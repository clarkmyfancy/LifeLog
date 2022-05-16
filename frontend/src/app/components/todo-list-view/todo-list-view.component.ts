import { Component, OnInit } from '@angular/core';

import { Task } from '@viewmodels/Task';
import { TaskService } from '@services/Task/task.service';

@Component({
	selector: 'todo-list-view',
	templateUrl: './todo-list-view.component.html',
	styleUrls: ['./todo-list-view.component.scss']
})
export class TodoListViewComponent implements OnInit {

	successListItemCompleted: boolean = false;

	imporantTasks: Task[];
	urgentTasks: Task[];
	imporantAndUrgentTasks: Task[];
	neitherImportantNorUrgentTasks: Task[];


	// thing: any[] = {
	// 	title: "Important and Urgent",

	// };

	constructor(
		private taskService: TaskService
	) { }

	ngOnInit(): void {
		this.retrieveAllTasks();
	}

	private retrieveAllTasks() {
		this.imporantTasks = this.taskService.getImportantOnlyTasks();
		this.urgentTasks = this.taskService.getUrgentOnlyTasks();
		this.imporantAndUrgentTasks = this.taskService.getImportantAndUrgentTasks();
		this.neitherImportantNorUrgentTasks = this.taskService.getTasksThatAreNeitherImportantNorUrgent();
	}

  	public generateClassForSuccessListItemCompletion(): string {
		var appropriate_class = "hidden";
		if (this.successListItemCompleted) {
			appropriate_class = "visible";
		}
		return appropriate_class;
	}

	markTaskCompleted(completionStatus: boolean): void {
		this.successListItemCompleted = completionStatus;
	}

}
