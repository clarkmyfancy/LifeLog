import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '@viewmodels/JournalEntry';
import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';

@Component({
    selector: 'app-journal-entry',
    templateUrl: './journal-entry.component.html',
    styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

    categories: string[] = [
        'Spiritual Life',
        'Physical Health',
        'Personal Life',
        'Key Relationships',
        'Career',
        'Business',
        'Finances',
        'Skating'
    ];

    journalEntry: JournalEntry;
    
    constructor(private journalService: JournalEntryService) {}

    ngOnInit(): void {
        this.journalEntry = new JournalEntry();
    }

    public createJournalEntry(): void {
        this.journalEntry.title = "new title created at: " + this.getTodaysDateISO();
        this.journalEntry.date = this.getTodaysDateISO();
        this.journalService.addEntry(this.journalEntry).subscribe();
    }

    private getTodaysDateISO(): string {
        let today = new Date();
        return today.toISOString();
    }

}
