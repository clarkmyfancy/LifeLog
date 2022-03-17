import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '@viewmodels/JournalEntry';
import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { GoalService } from '@services/Goal/goal.service';
import { Goal } from '@viewmodels/Goal';

@Component({
    selector: 'app-journal-entry',
    templateUrl: './journal-entry.component.html',
    styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

    journalEntry: JournalEntry;
    categories: string[];
    goals: Goal[];
    
    constructor(
        private journalService: JournalEntryService,
        private goalService: GoalService,
    ) {}

    ngOnInit(): void {
        this.journalEntry = new JournalEntry();
        this.categories = this.journalService.getCategories();
        this.retrieveGoals();
    }

    public createJournalEntry(): void {
        this.journalEntry.title = "new title created at: " + this.getTodaysDateISO();
        this.journalEntry.date = this.getTodaysDateISO();
        this.journalService.addEntry(this.journalEntry).subscribe();
        this.cleanUpJournalEntry();
    }

    private retrieveGoals(): void {
        this.goalService.getGoals()
            .subscribe(goals => this.goals = goals);
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

    currentlySelectedCategory(buttonsCategory: any): boolean {
        return buttonsCategory == this.journalEntry.category;
    }

}
