import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForestEventComponent} from './forest-event/forest-event.component';
import {ForestEventListItemComponent} from './forest-event-list-item/forest-event-list-item.component';
import {ForestEventListComponent} from './forest-event-list/forest-event-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserListItemComponent} from './user-list-item/user-list-item.component';
import {RouterModule} from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { GmapComponent } from './gmap/gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ForestEventComponent,
    ForestEventListItemComponent,
    ForestEventListComponent,
    UserListComponent,
    UserListItemComponent,
    AddEventComponent,
    GmapComponent
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
    MatTooltipModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
