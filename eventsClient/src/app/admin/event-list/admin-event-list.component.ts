import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventDTO} from '../../security/models/eventDTO';
import {EventService} from '../../service/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-event-list',
  templateUrl: './admin-event-list.component.html',
  styleUrls: ['./admin-event-list.component.css']
})
export class AdminEventListComponent implements OnInit {

  constructor(private eventService: EventService,
              private modalService: NgbModal,
              private router: Router) {
  }

  title: string;
  eventList: Array<EventDTO>;
  filteredEventList: Array<EventDTO>;

  ngOnInit(): void {
    if (!sessionStorage || !sessionStorage.getItem('accessToken')) {
      this.router.navigate(['/no-access']);
    } else if (
      sessionStorage.getItem('roles') !== 'ROLE_ADMIN') {
      this.router.navigate(['/not-authorized']);
    } else {
      this.loadEvents();
    }
  }

  openDeleteModal(event: EventDTO, deleteModal) {
    this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'delete') {
        this.eventService.deleteEvents(event).subscribe(() => {
          this.loadEvents();
        });
      }
    });
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.eventList = events;
      this.filteredEventList = events;
    });
  }

  searchForTitle() {
    this.filteredEventList = this.eventList.filter(event => {
      return event.title.includes(this.title);
    });
  }
}
