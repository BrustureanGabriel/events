import {Component, Input, OnInit} from '@angular/core';
import {EventDTO} from '../../security/models/eventDTO';
import {EventService} from '../../service/event.service';
import {EventUserModel} from '../../security/models/event-user.model';
import {EventUserService} from '../../service/event-user.service';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forest-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {

  constructor(private eventService: EventService,
              private eventUserService: EventUserService,
              private router: Router,
              private datePipe: DatePipe) {
  }

  @Input()
  event: EventDTO;
  eventUser: EventUserModel = new EventUserModel();
  isUserAlreadyRegistered = false;
  userId: number;
  isOrganiser = false;

  ngOnInit(): void {
    this.userId = +sessionStorage.getItem('id');
    this.eventUserService.isUserAlreadyRegisteredForEvent(this.event.id, this.userId).subscribe(value => {
      this.isUserAlreadyRegistered = value;
    });
    this.isOrganiser = this.event.ownerId === this.userId;
  }

  joinEvent() {
    this.eventUser.idUser = this.userId;
    this.eventUser.idEvent = this.event.id;
    this.eventUserService.joinEvent(this.eventUser).subscribe(data => this.router.navigate(['event-list/' + this.event.id]));
  }

  getFormattedDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  abandonEvent() {
    this.eventUserService.abandonEvent(this.event.id, this.userId).subscribe(data => alert('You have successfully deregistered for the event'));
  }
}
