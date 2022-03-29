import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { JournalEntryService } from './journal-entry.service';

describe('JournalEntryService', () => {
    let service: JournalEntryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(JournalEntryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
