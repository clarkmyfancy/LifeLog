import { Component, OnInit } from '@angular/core';

import { JournalEntryService } from '@services/JournalEntry/journal-entry.service';
import { JournalEntry } from '@viewmodels/JournalEntry';

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

}
