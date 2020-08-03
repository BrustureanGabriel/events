import {Component, OnInit} from '@angular/core';
import {EventDTO} from '../../security/models/eventDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../service/event.service';
import {EventUserService} from '../../service/event-user.service';
import {EventUserModel} from '../../security/models/event-user.model';
import {DatePipe} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forest-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event: EventDTO;
  isOrganiser = false;
  isUserAlreadyRegistered = false;
  userId: number;
  eventUser: EventUserModel = new EventUserModel();
  numberOfParticipants: number;

  constructor(private eventUserService: EventUserService,
              private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.userId = +sessionStorage.getItem('id');
    this.loadEvent();
  }

  loadEvent() {
    const eventId = +this.route.snapshot.paramMap.get('eventId');
    this.eventService.getEvent(eventId).subscribe(event => {
      this.event = event;
      this.isOrganiser = this.event.ownerId === this.userId;
      if (!this.isOrganiser) {
        this.eventUserService.isUserAlreadyRegisteredForEvent(this.event.id, this.userId).subscribe(value => {
          this.isUserAlreadyRegistered = value;
        });
      }
      if (this.event.id) {
        this.getNumberOfRegisteredUser(this.event.id);
      }
    });
  }

  getFormattedDate(): string {
    return this.datePipe.transform(this.event.plannedDate, 'yyyy-MM-dd');
  }

  joinEvent() {
    this.eventUser.idUser = this.userId;
    this.eventUser.idEvent = this.event.id;
    this.eventUserService.joinEvent(this.eventUser).subscribe(() => location.reload());
  }

  abandonEvent() {
    this.eventUserService.abandonEvent(this.event.id, this.userId).subscribe(() => location.reload());
  }

  getNumberOfRegisteredUser(eventId: number) {
    this.eventUserService.getEventUserByEventId(eventId).subscribe(result => {
      this.numberOfParticipants = result;
    });
  }

  openDeleteModal(deleteModal) {
    this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'delete') {
        this.router.navigate(['event-list']);
        this.eventService.deleteEvents(this.event).subscribe(() => {
          this.router.navigate(['event-list']);
        });
      }
    });
  }
}
