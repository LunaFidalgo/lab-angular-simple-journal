/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetrieveJournalEntriesService } from './retrieve-journal-entries.service';

describe('Service: RetrieveJournalEntries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveJournalEntriesService]
    });
  });

  it('should ...', inject([RetrieveJournalEntriesService], (service: RetrieveJournalEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
