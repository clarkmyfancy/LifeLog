import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { JournalEntry } from '@viewmodels/JournalEntry';

@Injectable({
    providedIn: 'root'
})
export class JournalEntryService {

    constructor(
        private client: HttpClient,
    ) { }

    // FIXME: there is a better place for this (2022-03-12)
    getCategories(): string[] {
        return [
            'Spiritual Life',
            'Physical Health',
            'Personal Life',
            'Key Relationships',
            'Career',
            'Business',
            'Finances',
            'Skating',
            'Software Dev'
        ];
    }

    private api_url = '/journal-entries/';

    getEntries(): Observable<JournalEntry[]> {
        const request = this.client.get<JournalEntry[]>(this.api_url)
            .pipe(
                catchError(this.handleError<JournalEntry[]>('getEntries', []))
            );
        return request;
    }

    addEntry(entry: JournalEntry): Observable<any> {
        const request = this.client.post<JournalEntry>(this.api_url, entry)
            .pipe(
                catchError(this.handleError<JournalEntry>('addEntry'))
            );
        return request;
    }

    private handleError<T>(operation="opteration", result?: T) {
        return (error: any): Observable<T> => {

        console.error(error); 
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
}
