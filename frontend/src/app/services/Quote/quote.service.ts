import { Quote } from '@viewmodels/Quote';

import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class QuoteService {

  	constructor() { }

	public getRandomQuote(): Quote{
		let size = this.QUOTES().length;
		let random_index = Math.floor(Math.random() * Math.floor(size));
		return this.QUOTES()[random_index];
	}

	// // how to order it such that the quote is "random" each day, but if the page is reloaded on the same day, 
	// 	// the quote is the same

	// public getQuoteBasedOnDayOfMonth(): void {
	// 	console.log(new Date());
	// }

	private QUOTES():  Quote[]{
		return [
			{
				text: "The key to a great life is simply having a bunch of great days. So you can think about it one day at a time.",
				author: "Mr. Money Mustache"
			},
			{
				text: "Every day is an opportunity to create a living masterpiece.",
				author: "Michael Gervais"
			},
			{
				text: "Secrets of the world are hidden behind cliches",
				author: "unknown"
			},
			{
				text: "Self esteem is just the reputation that you have with yourself. You'll always know.",
				author: "Naval Ravikant"
			},
			{
				text: "God will not have his work made manifest by cowards.",
				author: "Ralph Waldo Emerson"
			},
			{
				text: "If you chase two rabbits, you will not catch either one.",
				author: "Russian proverb"
			},
			{
				text: "Your work works on you more than you work on it",
				author: "unknown"
			},
		];
	}
}
