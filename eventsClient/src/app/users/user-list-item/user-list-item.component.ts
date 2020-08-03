import {Component, Input, OnInit} from '@angular/core';
import {UserDTO} from '../../security/models/userDTO';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  constructor() { }
  @Input()
  user: UserDTO;
  ngOnInit(): void {
  }

}
