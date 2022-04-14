import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LabelService {

    constructor() { }

    public getLabels(): string[] {
        return [
            'Mental',
            'Physical',
            'Personal',
            'Family',
            'Job',
            'Business',
            'Financial',
        ];
    }
}
