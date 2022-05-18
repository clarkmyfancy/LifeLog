import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-list-view',
	templateUrl: './todo-list-view.component.html',
	styleUrls: ['./todo-list-view.component.scss']
})
export class TodoListViewComponent implements OnInit {

	successListItemCompleted: boolean = false;

	task_group_types: string[] = [
		'Important and Urgent',
		'Important and not Urgent',
		'Urgent yet Unimportant',
		'Unimportant and not Urgent'
	];

	constructor() { }

	ngOnInit(): void {
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
