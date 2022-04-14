import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { LabelService } from '@services/Label/label.service';
import { JournalEntry } from '@viewmodels/JournalEntry';

@Component({
	selector: 'journal-viewer',
	templateUrl: './journal-viewer.component.html',
	styleUrls: ['./journal-viewer.component.scss']
})
export class JournalViewerComponent implements OnInit, OnChanges {

	@Input() journalEntryType = '';

	constructor(
		private journalService: JournalEntryService,
		private filterService: LabelService
	) { }

	allEntries: JournalEntry[] = [];
	entriesToDisplay: JournalEntry[] = [];


    filters: string[];
    selectedFilter: string;

	ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
			if (propName == "journalEntryType") {
				const filter_choice = changes[propName];
				if (!filter_choice.isFirstChange()) {
					const new_filter_ugly = JSON.stringify(filter_choice.currentValue);
					const new_filter = JSON.parse(new_filter_ugly);
					this.entriesToDisplay = this.filterEntriesToDisplayBasedOn(new_filter);
				}
			}
		}
	}

	private filterEntriesToDisplayBasedOn(new_filter: string): JournalEntry[] {
		var candidate_entries: JournalEntry[];
		if (new_filter == "") {
			candidate_entries = this.allEntries; 
		}
		else {
			candidate_entries = this.allEntries.filter(element => element.category == new_filter);
		}
		return candidate_entries;
	}

	ngOnInit(): void {
		this.populateEntries();
		this.filters = this.getFilters();
        this.selectedFilter = "";
	}

	private populateEntries(): void {
		this.journalService.getEntries()
			.subscribe(entries => {
				this.allEntries = this.sortDescending(entries)
				this.entriesToDisplay = this.allEntries;
			});
	}

	private sortDescending(entries: JournalEntry[]): JournalEntry[] {
		var sorted_entries = entries.sort((a, b) => {
			if (a.date > b.date) {
				return -1;
			}
			else if (b.date > a.date) {
				return 1;
			}
			else {
				return 0;
			}
		});
		return sorted_entries;
	}

	public generateClassFor(category: string): string {
		var classes = "label_wrapper ";
		let label_to_color = this.createLabels();
		label_to_color.forEach(label => {
			if ( label.name.toUpperCase() == category.toUpperCase()) {
				classes = classes.concat(label.color);
			}
		});
		return classes;
	}

	private createLabels(): any[] {
		return [
			{ name: "mental", color: "lightblue" } ,
			{ name: "physical", color: "lightorange" },
			{ name: "personal", color: "blue" },
			{ name: "family", color: "pink" },
			{ name: "job", color: "green" },
			{ name: "business", color: "purple" },
			{ name: "financial", color: "lightgreen" }
			
		]
	}




    private getFilters(): string[] {
        return this.filterService.getLabels();
    }

    public a_filter_was_clicked(choice: string): void {
        this.selectedFilter = choice;
    }

    public clearSelectedFilter(): void {
        this.selectedFilter = "";
    }

    currentlySelectedFilter(chosenFilter: any): boolean {
        return chosenFilter == this.selectedFilter;
    }

    nothingToFilter(): boolean {
		return this.selectedFilter == "";
	}

	determineAppropriotThing(entry: JournalEntry): string {
		console.log(entry);
		var results: string = "";
		// order matters here
		if (entry.subtopic_area) {
			results = entry.subtopic_area;
		}
		else if (entry.topic_area) {
			results = entry.topic_area;
		}
		else {
			results = entry.category;
		}
		return results;
	}
}
