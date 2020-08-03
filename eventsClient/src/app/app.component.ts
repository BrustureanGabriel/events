import {Component, OnInit} from '@angular/core';
import {EventDTO} from './security/models/eventDTO';
import {HttpClient} from '@angular/common/http';
import {EventService} from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;

  constructor() {
  }


}
