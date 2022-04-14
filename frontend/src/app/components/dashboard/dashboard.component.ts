import { Component, OnInit } from '@angular/core';
import { LabelService } from '@services/Label/label.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    constructor(private filterService: LabelService) { }

    // filters: string[];
    // selectedFilter: string;

    ngOnInit(): void {
        // this.filters = this.getFilters();
        // this.selectedFilter = "";
    }

    // private getFilters(): string[] {
    //     return this.filterService.getLabels();
    // }

    // public a_filter_was_clicked(choice: string): void {
    //     this.selectedFilter = choice;
    // }

    // public clearSelectedFilter(): void {
    //     this.selectedFilter = "";
    // }

    // currentlySelectedFilter(chosenFilter: any): boolean {
    //     return chosenFilter == this.selectedFilter;
    // }

    // nothingToFilter(): boolean {
	// 	return this.selectedFilter == "";
	// }

}
