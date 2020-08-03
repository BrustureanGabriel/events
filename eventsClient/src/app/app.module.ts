import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './users/user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventPageComponent} from './event/event-page/event-page.component';
import {EventListItemComponent} from './event/event-list-item/event-list-item.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {AdminUserListComponent} from './admin/user-list/admin-user-list.component';
import {UserListItemComponent} from './users/user-list-item/user-list-item.component';
import {RouterModule} from '@angular/router';
import {AddEventComponent} from './event/add-event/add-event.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {GmapComponent} from './gmap/gmap.component';
import {LoginComponent} from './security/login/login.component';
import {HttpInterceptorService} from './security/http-interceptor.service';
import {MenuComponent} from './basic-pages/menu/menu.component';
import {RegisterComponent} from './security/register/register.component';
import {AdminEventListComponent} from './admin/event-list/admin-event-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WelcomeComponent} from './basic-pages/welcome/welcome.component';
import {NotAuthorizedComponent} from './basic-pages/not-authorized/not-authorized.component';
import {NotFoundComponent} from './basic-pages/not-found/not-found.component';
import {NotLoggedInComponent} from './basic-pages/not-logged-in/not-logged-in.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventPageComponent,
    EventListItemComponent,
    EventListComponent,
    AdminUserListComponent,
    UserListItemComponent,
    AddEventComponent,
    GmapComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    AdminEventListComponent,
    WelcomeComponent,
    NotAuthorizedComponent,
    NotFoundComponent,
    NotLoggedInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

}
