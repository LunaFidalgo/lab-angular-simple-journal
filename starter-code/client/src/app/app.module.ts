import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { EntryListComponent } from "./entry-list/entry-list.component";
import { JournalRouterRoutes } from "./journal-router.routing";

@NgModule({
  declarations: [AppComponent, EntryListComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JournalRouterRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
