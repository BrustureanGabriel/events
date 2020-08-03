import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../register/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccessful = false;

  public USER_TOKEN = 'accessToken';
  public USER_ID = 'id';
  public USER_USERNAME = 'username';
  public USER_ROLES = 'roles';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {
  }

  ngOnInit() {
    if (sessionStorage) {
      sessionStorage.removeItem(this.USER_USERNAME);
      sessionStorage.removeItem(this.USER_ID);
      sessionStorage.removeItem(this.USER_ROLES);
      sessionStorage.removeItem(this.USER_TOKEN);
    }
  }

  handleLogin() {
    this.authenticationService.loginUser(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccessful = true;
      this.successMessage = 'Login Successful.';
      if (sessionStorage.getItem('roles') === 'ROLE_ADMIN') {
        this.router.navigate(['/admin-users']);
      } else {
        this.router.navigate(['/event-list']);
      }
    }, (error) => {
      this.invalidLogin = true;
      this.loginSuccessful = false;
    });
  }
}
