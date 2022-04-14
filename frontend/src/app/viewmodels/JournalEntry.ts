import { Label } from "@viewmodels/Label";

export class JournalEntry {

    public category: string;
    public topic_area: string;
    public subtopic_area: string;

    public author: number;
    public date: string;
    public duration: number;
    public description: string;
    // FIXME: does there really need to be this many fields on this object?
    public title: string;
}