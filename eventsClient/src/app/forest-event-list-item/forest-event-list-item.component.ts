import {Component, Input, OnInit} from '@angular/core';
import {Events} from '../models/event.model';
import {EventService} from '../event.service';

@Component({
  selector: 'app-forest-event-list-item',
  templateUrl: './forest-event-list-item.component.html',
  styleUrls: ['./forest-event-list-item.component.css']
})
export class ForestEventListItemComponent implements OnInit {

  constructor(private eventService: EventService) {
  }

  @Input()
  event: Events;

  ngOnInit(): void {
  }
  deleteAction(ev: Events): void{
    this.eventService.deleteEvents(ev).subscribe();
  }
}
