import { Component, OnInit } from '@angular/core';

import { Goal } from '@viewmodels/Goal';
import { JournalEntry } from '@viewmodels/JournalEntry';
import { GoalService } from '@services/Goal/goal.service';

@Component({
    selector: 'goal-viewer',
    templateUrl: './goal-viewer.component.html',
    styleUrls: ['./goal-viewer.component.scss']
})
export class GoalViewerComponent implements OnInit {

    constructor(private goalService: GoalService) { }

    goals: Goal[];

    ngOnInit(): void {
        this.retrieveGoals();
    }

    private retrieveGoals(): void {
		this.goalService.getGoals()
			.subscribe(goals => this.goals = goals);
	}


    // FIXME: build out the checked/selected scenarios
    // private markCompleted(): void {

    // }

}
