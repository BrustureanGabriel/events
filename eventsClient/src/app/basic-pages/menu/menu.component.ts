import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../security/register/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  handleLogout() {
    this.authenticationService.logout();
  }

  navigateToEvent() {
    if (this.isAdmin()) {
      this.router.navigate(['/admin-event']);
    } else {
      this.router.navigate(['/event-list']);
    }
  }

  isAdmin() {
    if (sessionStorage.getItem('roles') === 'ROLE_ADMIN') {
      return true;
    }
  }

}
