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
    chosenCategory: string;
    categoryWasChosen: boolean;
    chosenSubcategory: string;

    labels: string[];
    goals: Goal[];

    subcategory_map: { [key: string]: string[] } = {
        "mental": [],
        "physical": [ 
            "Diet",
            "Training",
            "General Health"],
        "personal": [],
        "family": [
            "Spouse",
            "Friends",
            "Kids",
            "Pets"
        ],
        "job": [],
        "business": [],
        "financial": [
            "Circle of Professionals", 
            "Assets",
            "Income",
            "Debt"
        ]
    };

    
    
    constructor(
        private journalService: JournalEntryService,
        private labelService: LabelService,
        private goalService: GoalService,
    ) {}

    ngOnInit(): void {
        this.journalEntry = new JournalEntry();
        this.chosenCategory = "";
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
        this.categoryWasChosen = true;
        this.chosenCategory = category;
        this.journalEntry.category = category;
    }

    shouldDisplaySubcategoriesFor(areaOfLife: string): boolean {
        let userSelectedAnAreaOfLife = this.userSelectedAreaOfLifeLabel();
        let areaOfLifeActuallyHasSubcategories = this.areaOfLifeContainsAnySubcategories(areaOfLife); 
        return userSelectedAnAreaOfLife && areaOfLifeActuallyHasSubcategories;
    }

    getRelevantSubcategories(parentCategory: string): string[] {
        var results: string[] = [];
        if (parentCategory in this.subcategory_map) {
            results = this.subcategory_map[parentCategory];
        }
        return results;
    }

    public userSelectedAreaOfLifeLabel(): boolean {
        return this.categoryWasChosen == true;
    }

    public areaOfLifeContainsAnySubcategories(key: string): boolean {
        return this.findMapping(key).length >= 1;
    }

    // FIXME: this function is called for each button, there is a more efficient way to handle this
    public findMapping(key: string): string[] {
        var results: string[] = [];
        if (this.subcategory_map.hasOwnProperty(key)) {
            results = this.subcategory_map[key];
        }
        return results;
    }

    // FIXME: this function is duplicated, does it need to be dry? 
    currentlySelectedCategory(buttonsCategory: any): boolean {
        return buttonsCategory == this.journalEntry.category;
    }

    currentlySelectedSubCategory(topic: string): boolean {
        return topic == this.chosenSubcategory;
    }

    onSelectedSubcategory(subcategory: string): void {
        this.chosenSubcategory = subcategory;
    }

    

}
