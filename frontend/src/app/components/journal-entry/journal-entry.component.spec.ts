import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { JournalEntryComponent } from './journal-entry.component';



describe('JournalEntryComponent', () => {
    let component: JournalEntryComponent;
    let fixture: ComponentFixture<JournalEntryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [ JournalEntryComponent ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(JournalEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }); 
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should know when to display relevant subcategories', () => {
        // user picked a category and category has subcategories
        component.categoryWasChosen = true;
        expect(component.shouldDisplaySubcategoriesFor('mental')).toBeFalse(); // because when this code was written, "mental" didn't have any subcategories
        expect(component.shouldDisplaySubcategoriesFor('Physical')).toBeTrue();
    });

    
    it('should return true if userSelection for Area of life label flag is set to true', () => {
        component.categoryWasChosen = true;
        expect(component.userSelectedAreaOfLifeLabel()).toBe(true)
    });

    it('should return false if user hasnt yet selected area of life', () => {
        component.categoryWasChosen = false;
        expect(component.userSelectedAreaOfLifeLabel()).toBe(false)
    });
});
