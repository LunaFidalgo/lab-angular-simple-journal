import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class RetrieveJournalEntriesService {
  BASE_URL: string = "http://localhost:3000/api/";
  constructor(private http: Http) {}

  getJournalEntries() {
    return this.http
      .get(`${this.BASE_URL}/journal-entries`)
      .map((res: Response) => res.json());
  }

  getJournalEntry(id) {
    return this.http
      .get(`${this.BASE_URL}/journal-entries/${id}`)
      .map((res: Response) => res.json());
  }
}
