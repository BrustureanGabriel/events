import {Component, OnInit} from '@angular/core';
import {EventDTO} from '../../security/models/eventDTO';
import {EventService} from '../../service/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService,
              private router: Router) {
  }

  eventsList: Array<EventDTO>;
  isOrganiser = false;

  ngOnInit(): void {
    if (!sessionStorage || !sessionStorage.getItem('accessToken')) {
      this.router.navigate(['/no-access']);
    } else {
      this.loadAllEventsAvailableForUser();
      this.isOrganiser = sessionStorage.getItem('roles') === 'ROLE_ORGANISER';
    }
  }

  loadAllEventsAvailableForUser() {
    this.eventService.getEvents().subscribe(events => {
      this.eventsList = events;
    });
  }

  loadEventsCreatedByCurrentUser() {
    this.eventService.getEventsCreatedByUserId(+sessionStorage.getItem('id')).subscribe(events => {
      this.eventsList = events;
    });
  }

  loadAllPastEvents() {
    this.eventService.getPassedEvents(+sessionStorage.getItem('id')).subscribe(events => {
      this.eventsList = events;
    });
  }
}
