import {Component, Input, OnInit} from '@angular/core';
import {Events} from '../models/event.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';
import {EventUserService} from '../event-user.service';
import {EventUserModel} from '../models/event-user.model';

@Component({
  selector: 'app-forest-event',
  templateUrl: './forest-event.component.html',
  styleUrls: ['./forest-event.component.css']
})
export class ForestEventComponent implements OnInit {
  forestEvent: Events;
  evUs: EventUserModel = new EventUserModel();
  evUsList: Array<EventUserModel>;

  constructor(private route: ActivatedRoute,
              private eventUserService: EventUserService,
              private eventService: EventService) {
  }

  ngOnInit() {
    this.getEventId();
    this.eventService.getEvent(this.getEventId()).subscribe(result => {
      this.forestEvent = result;
    });
  }

  getEventId(): number {
    return +this.route.snapshot.paramMap.get('eventId');
  }

  removeParticipation() {
    this.eventUserService.getEventUsers().subscribe(evUs => {
        console.log('works');
        this.evUsList = evUs.filter(x => x.idUser === 1 && x.idEvent === this.getEventId());
      }
    );

    this.eventUserService.deleteEventUser(this.evUsList[0]).subscribe();
  }

}
