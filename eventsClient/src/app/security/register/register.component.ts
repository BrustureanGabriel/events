import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {timeout} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDTO} from '../models/userDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new UserDTO();

  successMessage = 'User registered successfully!';

  errorMessage = 'Invalid username';
  invalidRegister = false;
  registerSuccessful = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {
  }

  ngOnInit() {
  }

  //TODO add validation for email and password
  //TODO add role selection

  handleRegister() {
    this.user.roles = ['moderator', 'user'];
    this.authenticationService.registerUser(this.user).subscribe((result) => {
      this.invalidRegister = false;
      this.registerSuccessful = true;
      this.successMessage = 'Register Successful.';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    }, (error) => {
      if (error.error.errors && error.error.errors > 1) {
        this.errorMessage = 'The username or the email address are already in use';
      } else {
        this.errorMessage = error.error.message;
      }
      this.invalidRegister = true;
    });
  }
}
