import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user-list/user-list.component';
import {ForestEventListComponent} from './forest-event-list/forest-event-list.component';
import {ForestEventComponent} from './forest-event/forest-event.component';
import {AddEventComponent} from './add-event/add-event.component';


const routes: Routes = [
  {path: '', redirectTo: 'event-list', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-list/:userId', component: UserComponent},
  {path: 'event-list', component: ForestEventListComponent},
  {path: 'event-list/:eventId', component: ForestEventComponent},
  {path: 'event-list-add', component: AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
