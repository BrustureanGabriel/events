import {Component, OnInit} from '@angular/core';
import {Events} from '../models/event.model';
import {EventService} from '../event.service';
import {MatTableDataSource} from '@angular/material';
import {EventUserService} from '../event-user.service';
import {EventUserModel} from '../models/event-user.model';

@Component({
  selector: 'app-forest-event-list',
  templateUrl: './forest-event-list.component.html',
  styleUrls: ['./forest-event-list.component.css']
})
export class ForestEventListComponent implements OnInit {

  constructor(private eventService: EventService,
              private eventUserService: EventUserService) {
  }

  userId = 1;
  eventUser: EventUserModel = new EventUserModel();
  eventsList: Array<Events>;
  displayedColumns = ['id', 'title', 'date', 'forward', 'participate', 'delete'];
  dataSource = new MatTableDataSource(this.eventsList);

  ngOnInit(): void {
    this.loadEvents();
    this.dataSource = new MatTableDataSource(this.eventsList);
  }


  deleteAction(ev: Events): void {
    this.eventService.deleteEvents(ev).subscribe();
  }

  shortingDescription(evDescription: string) {
    return evDescription.substr(0, 200);
  }

  participate(idEvent: number) {
    /* TO DO
    * schimb 2 cu idul userului conectat*/
    this.eventUser.idUser = this.userId;
    this.eventUser.idEvent = idEvent;
    this.eventUserService.saveEventUser(this.eventUser).subscribe(data => console.log(data));
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.eventsList = events;
    });
  }

  myEvents() {
    debugger;
    /*modify userId to connected user*/
    this.eventService.getEventsByUserId(this.userId).subscribe(events => {
      this.eventsList = events;
    });
  }
}
