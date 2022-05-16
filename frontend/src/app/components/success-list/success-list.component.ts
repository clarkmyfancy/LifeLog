import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
	selector: 'success-list',
	templateUrl: './success-list.component.html',
	styleUrls: ['./success-list.component.scss']
})
export class SuccessListComponent implements OnInit {

	@Output() taskCompletionStatus = new EventEmitter<boolean>();

	message: string;

	constructor() { }

	ngOnInit(): void {
		this.message = "The single most important thing I can do today is"
	}

	markTaskComplete(): void {
		this.taskCompletionStatus.emit(true);
	}

}
