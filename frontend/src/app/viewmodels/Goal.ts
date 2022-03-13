import { JournalEntry } from "@viewmodels/JournalEntry";

export class Goal {
    public statement: string;
    public focus: string;
    public daysUntilDue: number;
    public how_to_measure_success: string;
    public relatedJournalEntries: JournalEntry[];
    public isComplete: boolean;
}
