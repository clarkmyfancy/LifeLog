import { Component, OnInit } from '@angular/core';

import { Goal } from '@viewmodels/Goal';
import { JournalEntry } from '@viewmodels/JournalEntry';

import { GoalService } from '@services/Goal/goal.service';
import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { LabelService } from '@services/Label/label.service';

@Component({
    selector: 'app-journal-entry',
    templateUrl: './journal-entry.component.html',
    styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

    journalEntry: JournalEntry;
    categories: string[];
    labels: string[];
    goals: Goal[];
    
    constructor(
        private journalService: JournalEntryService,
        private labelService: LabelService,
        private goalService: GoalService,
    ) {}

    ngOnInit(): void {
        this.journalEntry = new JournalEntry();
        this.categories = this.labelService.getLabels();
        this.labels = this.labelService.getLabels();
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
