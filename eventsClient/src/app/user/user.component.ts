import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
  user: UserModel;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUserId();
    this.userService.getUser(this.getUserId()).subscribe(result => {
      this.user = result;
    });
  }

  getUserId(): number {
    return +this.route.snapshot.paramMap.get('userId');
  }

}
