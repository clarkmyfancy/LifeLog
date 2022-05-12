import { QuoteService } from '@services/Quote/quote.service';

import { Component, OnInit } from '@angular/core';
import { Quote } from '@viewmodels/Quote';

@Component({
	selector: 'today',
	templateUrl: './today-view.component.html',
	styleUrls: ['./today-view.component.scss']
})
export class TodayviewComponent implements OnInit {

	quote_of_the_day: Quote;

  	constructor(
		private quoteService: QuoteService
	) { }

	ngOnInit(): void {
		this.populateQuote();
	}

	public populateQuote(): void {
		this.quote_of_the_day = this.quoteService.getRandomQuote();
	}

}
