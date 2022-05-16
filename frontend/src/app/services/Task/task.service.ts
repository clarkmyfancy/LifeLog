import { Injectable } from '@angular/core';

import { Task } from '@viewmodels/Task';
@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor() { }

	public getImportantAndUrgentTasks(): Task[] {
		return this.TASKS().filter(task => task.isUrgent && task.isImportant);
	}

	public getUrgentOnlyTasks(): Task[] {
		return this.TASKS().filter(task => task.isUrgent && !task.isImportant);
	}

	public getImportantOnlyTasks(): Task[] {
		return this.TASKS().filter(task => !task.isUrgent && task.isImportant);
	}

	public getTasksThatAreNeitherImportantNorUrgent(): Task[] {
		return this.TASKS().filter(task => !task.isUrgent && !task.isImportant);
	}

	private TASKS(): Task[] {

		let tasks = [
			{
				isOnSuccessList: false,
				title: "Take the trash out",
				isUrgent: true,
				isImportant: false,
				dueDate: new Date(),
				datetimeCompletedOn: undefined
			},
			{
				isOnSuccessList: false,
				title: "Defuse the bomb",
				isUrgent: true,
				isImportant: true,
				dueDate: new Date(),
				datetimeCompletedOn: undefined
			},
			{
				isOnSuccessList: true,
				title: "Do 100 pushups",
				isUrgent: false,
				isImportant: true,
				dueDate: new Date(),
				datetimeCompletedOn: undefined
			},
			{
				isOnSuccessList: false,
				title: "Sleep for 8 hours tonight",
				isUrgent: false,
				isImportant: true,
				dueDate: new Date(),
				datetimeCompletedOn: undefined
			},
			{
				isOnSuccessList: false,
				title: "Buy a brand new car",
				isUrgent: false,
				isImportant: false,
				dueDate: new Date(),
				datetimeCompletedOn: undefined
			},
		];

		return tasks;
	} 

}
