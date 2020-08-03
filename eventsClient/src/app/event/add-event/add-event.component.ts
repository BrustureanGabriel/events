import {Component, OnInit} from '@angular/core';
import {EventService} from '../../service/event.service';
import {EventDTO} from '../../security/models/eventDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: EventDTO;

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit(): void {
    if (!sessionStorage || !sessionStorage.getItem('accessToken')) {
      this.router.navigate(['/no-access']);
    } else if (
      sessionStorage.getItem('roles') === 'ROLE_USER') {
      this.router.navigate(['/not-authorized']);
    } else {
      this.event = new EventDTO();
    }
  }

  public addEvent(): void {
    this.event.ownerId = +sessionStorage.getItem('id');
    this.eventService.saveEvent(this.event).subscribe(data => {
      this.router.navigate(['/event-list/' + data.id]);
    });
  }

  updateMapCoordinates($event: any) {
    this.event.location = $event;
  }
}
