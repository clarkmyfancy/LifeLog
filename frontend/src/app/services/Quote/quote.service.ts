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
			{
				text: "These individuals have riches just as we say that we `have a fever,` when really the fever has us.",
				author: "Seneca"
			},
			{
				text: "You are what you repeat. You are what you repeat. You are what you..",
				author: "unknown"
			},
			{
				text: "If you want to be remembered, either do things worth writing, or write things worth reading",
				author: "unknown"
			},
			{
				text: "It is better to be a good man, than to darken the hills with your ponies",
				author: "Father of Crazy Horse"
			},
			{
				text: "What you seek is seeking you",
				author: "Rumi"
			}, 
			{
				text: "Self-sufficiency is another word for poverty",
				author: "Matt Ridley"
			},
			{
				text: "Diversity in council, unity in command",
				author: "Cyrus the Great"
			},
			{
				text: "Whenever there is any doubt, there is no doubt",
				author: "David Mamet, Ronin"
			},
			{
				text: "Hard choices, easy life. Easy choices, hard life.",
				author: "Jerzy Gregorek"
			},
			{
				text: "Get the hell out of my way.",
				author: "John Galt, Atlas Shrugged"
			},
			{
				text: "A man is rich in proportion to the number of things he can afford to let alone.",
				author: "Henry David Thoreau"
			},
			{
				text: "Things are never as good or as bad as they seem.",
				author: "Andrew Ross Sorkin"
			},
			{
				text: "Many a false step was made by standing still",
				author: "fortune cookie"
			},
			{
				text: "The best defense is a good offense",
				author: "Dan Gable"
			},
			{
				text: "Beware the investment activity that produces applause; the great moves are usually greeted by yawns.",
				author: "Warren Buffett"
			},
			{
				text: "The score takes care of itself",
				author: "Bill Walsh"
			},
			{
				text: "You do not rise to the level of your goals, you fall to the level of your systems",
				author: "James Clear"
			},
			{
				text: "If you must play, decide on three things at the start: the rules of the game, the stakes, and the quitting time.",
				author: "Chinese proverb"
			},
			{
				text: "It does not do harm to a mystery to know a little about it.",
				author: "Richard Feynman"
			},
			{
				text: "No one is better than their incentives.",
				author: "Robert Breedlove"
			},
		];
	}
}
