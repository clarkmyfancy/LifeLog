import { Component, OnChanges, Input, OnInit, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CategoryMapService } from '@services/CategoryMap/category-map.service';

@Component({
    selector: 'category-chooser',
    templateUrl: './category-chooser.component.html',
    styleUrls: ['./category-chooser.component.scss']
})
export class CategoryChooserComponent implements OnInit, OnChanges {

    @Input() chosenCategory: any;
    @Output() topicAreaWasChosenEvent = new EventEmitter<string>();
    @Output() hobbyWasChosenEvent = new EventEmitter<string>();

    categoryWasChosen: boolean;
    chosenTopicArea: string;

    chosenHobby: string;

    categoryMap: { [key: string]: any };

    constructor(
        private categoryMapService: CategoryMapService
    ) { }

    ngOnInit(): void {
        this.chosenTopicArea = "";
        this.chosenHobby = "";
        this.categoryMap = this.categoryMapService.getCategoryMap();
    }

    // FIXME: is this piece of code even needed?
    ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
			if (propName == "chosenCategory") {
				const category = changes[propName];
					const new_filter_ugly = JSON.stringify(category.currentValue);
					const new_filter = JSON.parse(new_filter_ugly);
          console.log(new_filter);
					// this.entriesToDisplay = this.filterEntriesToDisplayBasedOn(new_filter);
				// }
			}
		}
	}

    // FIXME: or maybe don't fix me, this is anti-D.R.Y. but does it need to be dry?
    getRelevantTopicAreas(): string[] {
        var results: any = {};
        if (this.chosenCategory in this.categoryMap) {
            results = this.categoryMap[this.chosenCategory];
        }
        return results;
    }

    onSelectedTopicArea(topic: string): void {
        this.chosenTopicArea = topic;
        this.topicAreaWasChosenEvent.emit(topic);
    }

    currentlySelectedTopic(topic: string): boolean {
        return topic == this.chosenTopicArea;
    }

    shouldDisplayHobbiesForTopicArea(): boolean {
        let userSelectedATopicArea = this.userPickedATopicArea();
        let topicAreaHasChildHobbiesToShow = this.determineIfTopicAreaHasHobbiesToShow();
        return userSelectedATopicArea && topicAreaHasChildHobbiesToShow;
    }

    private userPickedATopicArea(): boolean {
        return this.chosenTopicArea != "";
    }

    private determineIfTopicAreaHasHobbiesToShow(): boolean {
        const hobbies = this.getRelevantHobbiesForChosenTopicArea();
        return hobbies.length > 0;
    }

    getRelevantHobbiesForChosenTopicArea(): string[] {
        var results: string[] = [];

        let hobbies = this.categoryMap[this.chosenCategory][this.chosenTopicArea];
        if (hobbies) {
            results = hobbies;
        }
        else {
            results = [];
        }

        return results;
    }

    public userSelectedAreaOfLifeLabel(): boolean {
        return this.categoryWasChosen == true;
    }

    onSelectedHobby(hobby: string): void {
        this.chosenHobby = hobby;
        this.hobbyWasChosenEvent.emit(hobby);
    }

    currentlySelectedHobby(hobby: string): boolean {
        return hobby == this.chosenHobby;
    }

}
