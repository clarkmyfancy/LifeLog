import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LabelService {

    constructor() { }

    // FIXME: there is a better place for this (2022-03-12)
    getLabels(): string[] {
        return [
            'Spiritual Life',
            'Physical Health',
            'Personal Life',
            'Key Relationships',
            'Career',
            'Business',
            'Finances',
            'Skating',
            'Software Dev'
        ];
    }
}
