import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '@viewmodels/JournalEntry';
import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';

@Component({
    selector: 'app-journal-entry',
    templateUrl: './journal-entry.component.html',
    styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

    journalEntry: JournalEntry;
    categories: string[];
    
    constructor(private journalService: JournalEntryService) {}

    ngOnInit(): void {
        this.journalEntry = new JournalEntry();
        this.categories = this.journalService.getCategories();
    }

    public createJournalEntry(): void {
        this.journalEntry.title = "new title created at: " + this.getTodaysDateISO();
        this.journalEntry.date = this.getTodaysDateISO();
        this.journalService.addEntry(this.journalEntry).subscribe();
        this.cleanUpJournalEntry();
    }

    private getTodaysDateISO(): string {
        let today = new Date();
        return today.toISOString();
    }

    private cleanUpJournalEntry() {
        this.journalEntry.category = "";
        this.journalEntry.description = "";
        this.journalEntry.duration = 0;
        this.journalEntry.title = "";
    }

    onSelectedCategory(category: string): void {
        this.journalEntry.category = category;
    }

}
