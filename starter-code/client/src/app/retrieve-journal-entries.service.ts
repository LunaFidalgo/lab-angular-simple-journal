import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class RetrieveJournalEntriesService {
  constructor(private http: Http) {}

  getJournalEntries() {
    return this.http
      .get("http://localhost:3000/api/journal-entries")
      .map((res: Response) => res.json());
  }

  getJournalEntry(id) {

    return this.http
      .get(`http://localhost:3000/api/journal-entries/${id}`)
      .map((res: Response) => res.json());
  }


}
