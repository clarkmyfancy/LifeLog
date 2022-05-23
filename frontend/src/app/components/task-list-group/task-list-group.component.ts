import { Component, Input, OnInit } from '@angular/core';

import { Task } from '@viewmodels/Task';
import { TaskService } from '@services/Task/task.service';

@Component({
	selector: 'task-list-group',
	templateUrl: './task-list-group.component.html',
	styleUrls: ['./task-list-group.component.scss']
})
export class TaskListGroupComponent implements OnInit {

	@Input() groupName: string;

	tasks: Task[];
	appropriateTasksForGroup: Task[];

	constructor(
		private taskService: TaskService
	) { 
		this.taskService.taskChanged.subscribe((task) => {
			console.log(task);
		});
	}

	ngOnInit(): void {
		this.getAllTasks();
	}

	private getAllTasks() {
		this.taskService.getTasks().subscribe(_tasks => {
			this.tasks = _tasks
			this.filterOutInappropriateTasksForGroup();
		});
	}

	private filterOutInappropriateTasksForGroup() {
		if (this.groupName == "Important and Urgent") {
			this.grabOnlyImportantAndUrgentTasks();
		}
		else if (this.groupName == "Important and not Urgent") {
			this.grabImportantButNotUrgentTasks();
		}
		else if (this.groupName == "Urgent yet Unimportant") {
			this.retrieveUrgentYetUnimportantTasks();
		}
		else {
			this.grabTheTasksThatAreNeitherImporantNorUrgent();
		}
	}

	private grabOnlyImportantAndUrgentTasks() {
		this.appropriateTasksForGroup = this.tasks.filter(task => task.is_important && task.is_urgent);
	}

	private grabImportantButNotUrgentTasks() {
		this.appropriateTasksForGroup = this.tasks.filter(task => task.is_important && !task.is_urgent);
	}

	private retrieveUrgentYetUnimportantTasks() {
		this.appropriateTasksForGroup = this.tasks.filter(task => !task.is_important && task.is_urgent);
	}

	private grabTheTasksThatAreNeitherImporantNorUrgent() {
		this.appropriateTasksForGroup = this.tasks.filter(task => !task.is_important && !task.is_urgent);
	}

}
