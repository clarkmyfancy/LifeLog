import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LabelService {

    constructor() { }

    public getLabels(): string[] {
        return [
            'mental',
            'physical',
            'personal',
            'family',
            'job',
            'business',
            'financial',
        ];
    }
}
