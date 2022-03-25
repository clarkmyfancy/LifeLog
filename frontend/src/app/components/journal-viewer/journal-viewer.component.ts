import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { JournalEntry } from '@viewmodels/JournalEntry';
import { Label } from '@viewmodels/Label';

@Component({
	selector: 'journal-viewer',
	templateUrl: './journal-viewer.component.html',
	styleUrls: ['./journal-viewer.component.scss']
})
export class JournalViewerComponent implements OnInit, OnChanges {

	@Input() journalEntryType = '';

	constructor(private journalService: JournalEntryService) { }

	entries: JournalEntry[] = [];
	entriesToDisplay: JournalEntry[] = [];

	// ngOnChanges(changes: SimpleChanges): void {

	// }

	ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
			if (propName == "journalEntryType") {
				const filter_choice = changes[propName];
				if (!filter_choice.isFirstChange()) {
					const new_filter_ugly = JSON.stringify(filter_choice.currentValue);
					const new_filter = JSON.parse(new_filter_ugly);
					this.entriesToDisplay = this.filter_entries_to_display_based_on(new_filter);
				}
			}
		}
	}

	ngOnInit(): void {
		this.populateEntries();
	}

	private populateEntries(): void {
		this.journalService.getEntries()
			.subscribe(entries => {
				this.entries = this.sortDescending(entries)
				this.entriesToDisplay = this.entries;
			});
	}

	private filter_entries_to_display_based_on(new_filter: string): JournalEntry[] {
		return this.entries.filter(element => element.category == new_filter);
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
	
	public generateClassFor(category: string): string {
		var classes = "label_wrapper ";
		let label_to_color = this.createLabels();
		label_to_color.forEach(label => {
			if (label.name == category) {
				classes = classes.concat(label.color);
			}
		});
		return classes;
	}


}
