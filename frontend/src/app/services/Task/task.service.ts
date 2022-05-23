import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Task } from '@viewmodels/Task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor(
		private client: HttpClient,
	) { }

	private api_url = '/tasks/';

    taskChanged: Subject<Task> = new Subject<Task>();

    createTask(entry: Task): Observable<any> {
        const request = this.client.post<Task>(this.api_url, entry)
            .pipe(
                catchError(this.handleError<Task>('createTask'))
            );
        return request;
    }

	getTasks(): Observable<Task[]> {
        const request = this.client.get<Task[]>(this.api_url)
            .pipe(
                catchError(this.handleError<Task[]>('getTasks', []))
            );
        return request;
    }

    markTaskAsCompleted(task: Task): Observable<Task> {
        task.actual_completion_datetime = new Date();
        // console.log(task);
        const urlToUniquelyIdentifyObject = this.api_url + task.id;
        const request = this.client.put<Task>(urlToUniquelyIdentifyObject, task)
            .pipe(
                catchError(this.handleError<Task>('markTaskAsCompleted', task))
            );
        this.taskChanged.next(task);
        return request;
    }

    private handleError<T>(operation="operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); 
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
