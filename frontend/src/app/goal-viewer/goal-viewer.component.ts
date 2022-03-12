import { Component, OnInit } from '@angular/core';
import { Goal } from '@viewmodels/Goal';

@Component({
    selector: 'goal-viewer',
    templateUrl: './goal-viewer.component.html',
    styleUrls: ['./goal-viewer.component.scss']
})
export class GoalViewerComponent implements OnInit {

    constructor() { }

    goal: Goal;

    ngOnInit(): void {
        this.goal = new Goal();
        this.goal.content = "Do a kickflip";
    }

    name: string = "Skating";
}
