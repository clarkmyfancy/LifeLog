import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Task } from '@viewmodels/Task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor(
		private client: HttpClient,
	) { }

	private api_url = '/tasks/';


	getTasks(): Observable<Task[]> {
        const request = this.client.get<Task[]>(this.api_url)
            .pipe(
                catchError(this.handleError<Task[]>('getTasks', []))
            );
        return request;
    }

	createTask(entry: Task): Observable<any> {
        const request = this.client.post<Task>(this.api_url, entry)
            .pipe(
                catchError(this.handleError<Task>('createTask'))
            );
        return request;
    }

    private handleError<T>(operation="operation", result?: T) {
        return (error: any): Observable<T> => {

        console.error(error); 
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }





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
