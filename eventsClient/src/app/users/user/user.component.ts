import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserDTO} from '../../security/models/userDTO';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
  user: UserDTO;

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
