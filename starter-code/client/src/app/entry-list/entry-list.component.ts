import { Component, OnInit } from "@angular/core";
import { RetrieveJournalEntriesService } from "../retrieve-journal-entries.service";

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.css"],
  providers: [RetrieveJournalEntriesService]
})
export class EntryListComponent implements OnInit {
  journalEntries: Array<Object> = [];
  constructor(
    private retrieveJournalEntriesService: RetrieveJournalEntriesService
  ) {}

  ngOnInit() {
    this.retrieveJournalEntriesService
      .getJournalEntries()
      .subscribe(journalEntries => {
        this.journalEntries = journalEntries;
      });
  }
}
