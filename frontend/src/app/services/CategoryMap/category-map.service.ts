import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoryMapService {

    constructor() { }

    private categoryMap: { [key: string]: any } = {
        "Mental": {
            "Meditation": [],
        },
        
        "Business": {
        },

        "Job": {
            "Software": [],
            "Sales": []
        },

        "Physical": {
            "General Health": [],
            "Diet": [],
            "Training": [
                "Skating",
                "Mobility"
            ],
        },

        "Personal": {
            "Friends": [],
            "Family": [
                "Spouse",
                "Kids",
                "Pets"
            ],
        },

        "Financial": {
            "Assets": [
                "Equities",
                "Crypto",
                "Real Estate"
            ],
            "Income": [
                "Salary",
                "Bonus",
            ],
            "Debt": [],
            "Circle of Professionals": [
                "Attourney",
                "Real Estate Agent",
                "CPA"
            ],
        }
    };

    public getCategoryMap(): any {
        return this.categoryMap;
    }
  
}
