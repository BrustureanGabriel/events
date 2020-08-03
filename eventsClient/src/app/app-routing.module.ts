import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './users/user/user.component';
import {AdminUserListComponent} from './admin/user-list/admin-user-list.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {EventPageComponent} from './event/event-page/event-page.component';
import {AddEventComponent} from './event/add-event/add-event.component';
import {LoginComponent} from './security/login/login.component';
import {RegisterComponent} from './security/register/register.component';
import {AdminEventListComponent} from './admin/event-list/admin-event-list.component';
import {WelcomeComponent} from './basic-pages/welcome/welcome.component';
import {NotAuthorizedComponent} from './basic-pages/not-authorized/not-authorized.component';
import {NotFoundComponent} from './basic-pages/not-found/not-found.component';
import {NotLoggedInComponent} from './basic-pages/not-logged-in/not-logged-in.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: '#', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'admin-users', component: AdminUserListComponent},
  {path: 'admin-events', component: AdminEventListComponent},

  {path: 'user', component: UserComponent},
  {path: 'user-list/:userId', component: UserComponent},

  {path: 'event-list', component: EventListComponent},
  {path: 'event-list/:eventId', component: EventPageComponent},
  {path: 'event-list-add', component: AddEventComponent},

  {path: 'no-access', component: NotLoggedInComponent},
  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
