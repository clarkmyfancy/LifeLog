import { Component, OnInit } from '@angular/core';

import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { JournalEntry } from '@viewmodels/JournalEntry';
import { Label } from '@viewmodels/Label';

@Component({
	selector: 'journal-viewer',
	templateUrl: './journal-viewer.component.html',
	styleUrls: ['./journal-viewer.component.scss']
})
export class JournalViewerComponent implements OnInit {

	constructor(private journalService: JournalEntryService) { }

	entries: JournalEntry[] = [];

	ngOnInit(): void {
		this.populateEntries();
	}

	private populateEntries(): void {
		this.journalService.getEntries()
			.subscribe(entries => this.entries = entries);
	}


	// labels: Label[] = [new Label()];
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
