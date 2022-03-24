import { Label } from "@viewmodels/Label";

export class JournalEntry {
    public author: number;
    public date: string;
    public duration: number;
    public description: string;
    public category: string;
    // FIXME: does there really need to be this many fields on this object?
    public labels: Label[];
    public title: string;
}