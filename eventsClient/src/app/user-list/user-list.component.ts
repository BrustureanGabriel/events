import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  usersList: Array<UserModel>;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.usersList = users;
    });
  }

}
