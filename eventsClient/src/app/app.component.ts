import {Component, OnInit} from '@angular/core';
import {Events} from './models/event.model';
import {HttpClient} from '@angular/common/http';
import {EventService} from './event.service';

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
