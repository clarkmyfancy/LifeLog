import { Injectable } from '@angular/core';

import { Task } from '@viewmodels/Task';
import { TaskService } from '@services/Task/task.service';
import { lastValueFrom, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TheOneThingService {

	nextTaskToDo: Task;

	constructor(
		private taskService: TaskService
	) { }

	public async grabTheNextOneThingThatIfDoneWillMakeEverythingElseEasierOrUnnecessary() {
		const observable_of_tasks = this.taskService.getTasks();
		var tasks = await lastValueFrom(observable_of_tasks);
		return this.determineWhichTaskShouldBeDoneNext(tasks);
	}

	private determineWhichTaskShouldBeDoneNext(tasks: Task[]): any {
		return tasks.pop();
	}
}
