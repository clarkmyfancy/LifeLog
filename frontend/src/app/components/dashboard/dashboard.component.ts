import { Component, OnInit } from '@angular/core';
import { LabelService } from '@services/Label/label.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    constructor(private filterService: LabelService) { }

    filters: string[];
    selectedFilter: string;

    ngOnInit(): void {
        this.filters = this.getFilters();
    }

    private getFilters(): string[] {
        return this.filterService.getLabels();
    }

    public a_filter_was_clicked(choice: string): void {
        this.selectedFilter = choice;
    }

    currentlySelectedFilter(chosenFilter: any): boolean {
        return chosenFilter == this.selectedFilter;
    }

}
