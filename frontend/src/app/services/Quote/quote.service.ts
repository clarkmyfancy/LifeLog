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
				text: "Life is not designed to hand us success or satisfaction, but rather to present us with challenges that make us grow. Mastery is the mysterious process by which those challenges become progressively easier and more satisfying through practice. The key to that satisfaction is to reach the nirvana in which love of practice for its own sake (intrinsic) replaces the original goal (extrinsic) as our goal.",
				author: "Terry Laughlin"
			},
			{
				text: "Secrets of the world are hidden behind cliches",
				author: "Unknown"
			},
		];
	}
}
