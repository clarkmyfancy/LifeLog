import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

import { TaskService } from '@services/Task/task.service';
import { TheOneThingService } from '@services/TheOneThing/the-one-thing.service';

import { Task } from '@viewmodels/Task';

@Component({
	selector: 'success-list',
	templateUrl: './success-list.component.html',
	styleUrls: ['./success-list.component.scss']
})
export class SuccessListComponent implements OnInit {

	// this component should be responsible for:
		// displaying the most important task that can be done right now

	message: string;

	nextTask: Task;

	constructor(
		private theOneThingService: TheOneThingService,
		private taskService: TaskService
	) { }

	ngOnInit(): void {
		this.message = "What's the one thing I can do, such that by doing it, everything else would be made easier or unnecessary?"
		this.getNextTaskToDo();
	}

	async getNextTaskToDo() {
		this.nextTask = await this.theOneThingService.grabTheNextOneThingThatIfDoneWillMakeEverythingElseEasierOrUnnecessary();
	}

	markTaskComplete(task: Task): void {
		this.taskService.markTaskAsCompleted(task).subscribe(
			updatedTask => {
				console.log("task updated");
				window.location.reload();
			}
		);
	}
}
