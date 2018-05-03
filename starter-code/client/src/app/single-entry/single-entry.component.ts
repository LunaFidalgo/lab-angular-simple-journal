import { Component, OnInit } from '@angular/core';
import { RetrieveJournalEntriesService } from '../retrieve-journal-entries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'], 
  providers: [RetrieveJournalEntriesService]
})
export class SingleEntryComponent implements OnInit {

  singleEntry: object = {}
  constructor(private retrieveJournalEntriesService: RetrieveJournalEntriesService, 
  private route: ActivatedRoute) { }

  ngOnInit() {
    let id = ""
    this.route.params.subscribe((params) => id = (params.id))
    this.retrieveJournalEntriesService
      .getJournalEntry(id)
      .subscribe(journalEntries => {
        this.singleEntry = journalEntries;
      });
  }

}
