import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {Events} from '../models/event.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {GmapComponent} from '../gmap/gmap.component';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  event: Events = new Events();
  gmapComponent: GmapComponent;

  ngOnInit(): void {
    console.log('routing test');
  }

  // tslint:disable-next-line:max-line-length

  public addEvent(title: string, maxNumber: number, imageUrl: string, dates: Date, sponsor: string, description: string): void {
    this.event.title = title;
    this.event.maxNumber = maxNumber;
    this.event.imageUrl = imageUrl;
    this.event.dates = dates;
    this.event.sponsor = sponsor;
    this.event.description = description;
    this.eventService.saveEvent(this.event).subscribe(data => console.log(data));
  }

  updateMapCoordinates($event: any) {
    this.event.location = $event;
  }
}
