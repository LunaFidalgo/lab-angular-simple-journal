import { Routes, RouterModule } from "@angular/router";
import { EntryListComponent } from "./entry-list/entry-list.component";
import { SingleEntryComponent } from "./single-entry/single-entry.component";

const routes: Routes = [{ path: "home", component: EntryListComponent }, 
{ path: "home/:id", component: SingleEntryComponent }
];

export const JournalRouterRoutes = RouterModule.forRoot(routes);
