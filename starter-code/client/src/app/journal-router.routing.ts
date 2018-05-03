import { Routes, RouterModule } from "@angular/router";
import { EntryListComponent } from "./entry-list/entry-list.component";

const routes: Routes = [{ path: "home", component: EntryListComponent }];

export const JournalRouterRoutes = RouterModule.forRoot(routes);
