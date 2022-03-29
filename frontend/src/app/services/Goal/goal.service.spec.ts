import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GoalService } from './goal.service';

describe('GoalService', () => {
    let service: GoalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(GoalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
