import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '@viewmodels/JournalEntry';

import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { CategoryMapService } from '@services/CategoryMap/category-map.service';

@Component({
    selector: 'app-journal-entry',
    templateUrl: './journal-entry.component.html',
    styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

    journalEntry: JournalEntry;

    categories: string[];

    categoryWasChosen: boolean;
    chosenCategory: string;
    chosenSubcategory: string;
    chosenHobby: string;

    constructor(
        private journalService: JournalEntryService,
        private categoryMapService: CategoryMapService,
    ) {}

    ngOnInit(): void {
        this.journalEntry = new JournalEntry();
        this.chosenCategory = "";
        this.categories = this.categoryMapService.getCategoryMap();
    }

    public createJournalEntry(): void {
        this.journalEntry.date = this.getTodaysDateISO();
        this.journalService.addEntry(this.journalEntry).subscribe();
        this.cleanUpJournalEntryData();
    }

    private getTodaysDateISO(): string {
        let today = new Date();
        return today.toISOString();
    }

    private cleanUpJournalEntryData() {
        this.journalEntry = new JournalEntry();
    }

    onSelectedCategory(category: string): void {
        this.categoryWasChosen = true;
        this.chosenCategory = category;
        this.journalEntry.category = category;
        this.chosenSubcategory = "";
    }
 
    shouldDisplaySubcategoriesFor(areaOfLife: string): boolean {
        let userSelectedAnAreaOfLife = this.userSelectedAreaOfLifeLabel();
        let areaOfLifeActuallyHasSubcategories = this.areaOfLifeContainsAnySubcategories(areaOfLife); 
        return userSelectedAnAreaOfLife && areaOfLifeActuallyHasSubcategories;
    }
    
    public userSelectedAreaOfLifeLabel(): boolean {
      return this.categoryWasChosen == true;
    }
    
    public areaOfLifeContainsAnySubcategories(key: string): boolean {
        const maybeChildrenCategories = this.getChildCategories(key);
        var childCategoryCount = Object.keys(maybeChildrenCategories).length
        return childCategoryCount >= 1;
    }

    public getChildCategories(key: string): any {
        var results = {};
        let categoryMap = this.categoryMapService.getCategoryMap();
        if (categoryMap.hasOwnProperty(key)) {
            results = categoryMap[key];
        }
        return results;
    }

    doThing(): void {
        console.log(this.journalEntry);
    }

    
    // FIXME: this function is duplicated, does it need to be dry? 
    currentlySelectedCategory(buttonsCategory: any): boolean {
        return buttonsCategory == this.journalEntry.category;
    }


    handleTopicAreaChange(subcategory: string): void {
        this.chosenSubcategory = subcategory;
        this.journalEntry.topicArea = subcategory;
    }

    handleHobbyChange(hobby: string): void {
        this.chosenHobby = hobby;
        this.journalEntry.subtopicArea = hobby;
    }

}
