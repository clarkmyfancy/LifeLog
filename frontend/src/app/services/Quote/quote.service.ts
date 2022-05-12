import { Quote } from '@viewmodels/Quote';

import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class QuoteService {

  	constructor() { }

	public getRandomQuote() {
		let size = this.QUOTES().length;
		let random_index = Math.floor(Math.random() * Math.floor(size));
		return this.QUOTES()[random_index];
	}

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
				author: "Unknown"
			},
		];
	}
}
