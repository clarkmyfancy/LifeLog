import { Component, Input, OnInit } from '@angular/core';

import { Task } from '@viewmodels/Task';
import { TaskService } from '@services/Task/task.service';

@Component({
	selector: 'task-list-group',
	templateUrl: './task-list-group.component.html',
	styleUrls: ['./task-list-group.component.scss']
})
export class TaskListGroupComponent implements OnInit {

	tasks: Task[];

	@Input() groupName: string;

	constructor(
		private taskService: TaskService
	) { }

	ngOnInit(): void {
		this.getAppropriateTasks();
	}

	private getAppropriateTasks() {
		if (this.groupName == "Important and Urgent") {
			this.retrieveImportantAndUrgentTasks();
		}
		else if (this.groupName == "Important and not Urgent") {
			this.retrieveImportantYetNotUrgentTasks();
		}
		else if (this.groupName == "Urgent yet Unimportant") {
			this.retrieveUrgentYetUnimportantTasks();
		}
		else if (this.groupName == "Unimportant and not Urgent") {
			this.retrieveTheTasksThatAreNeitherImporantNorUrgent();
		}
	}

	private retrieveImportantAndUrgentTasks() {
		this.tasks = this.taskService.getImportantAndUrgentTasks();
	}

	private retrieveImportantYetNotUrgentTasks() {
		this.tasks = this.taskService.getImportantOnlyTasks();
	}

	private retrieveUrgentYetUnimportantTasks() {
		this.tasks = this.taskService.getUrgentOnlyTasks();
	}

	private retrieveTheTasksThatAreNeitherImporantNorUrgent() {
		this.tasks = this.taskService.getTasksThatAreNeitherImportantNorUrgent();
	}

}
