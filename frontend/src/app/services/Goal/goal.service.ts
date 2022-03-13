import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Goal } from '@viewmodels/Goal';
import { JournalEntry } from '@viewmodels/JournalEntry';

@Injectable({
    providedIn: 'root'
})
export class GoalService {

    constructor(private client: HttpClient,) { }

    private api_url = '/goals/';

    public getGoals(): Observable<Goal[]> {
        const request = this.client.get<Goal[]>(this.api_url)
            .pipe(
                // FIXME: implement this function
                // catchError(this.handleError<JournalEntry[]>('getGoals', []))
            );
        return request;
    }
}
