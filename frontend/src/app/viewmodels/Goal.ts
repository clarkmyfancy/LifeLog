import { JournalEntry } from "./JournalEntry";


export class Goal {
    public content: string;
    public relatedJournalEntries: JournalEntry[];

    public statement: string;
    public daysToGoalExpiration: number;
    public probabilityOfAchievement: number;
    public measure: string;
    
}