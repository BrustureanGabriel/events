import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserDTO} from '../models/userDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public USER_TOKEN = 'accessToken';
  public USER_ID = 'id';
  public USER_USERNAME = 'username';
  public USER_ROLES = 'roles';

  public message: string;
  public user = new UserDTO();

  constructor(private http: HttpClient) {

  }

  loginUser(username: string, password: string) {
    return this.http.post(`http://localhost:8080/api/auth/signin`,
      {username, password}).pipe(map((result) => {
      this.user.id = result[this.USER_ID];
      this.user.username = result[this.USER_USERNAME];
      this.user.roles = result[this.USER_ROLES];
      this.registerSuccessfulLogin(this.user, 'Bearer ' + result[this.USER_TOKEN]);
    }));
  }

  registerUser(user: UserDTO) {
    return this.http.post(`http://localhost:8080/api/auth/signup`,
      {
        username: user.username,
        password: user.password,
        email: user.email,
        roles: user.roles,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber
      }).pipe(map((res) => {
      return res;
    }));
  }

  registerSuccessfulLogin(user, userToken: string) {
    sessionStorage.setItem(this.USER_ID, user.id);
    sessionStorage.setItem(this.USER_USERNAME, user.username);
    sessionStorage.setItem(this.USER_ROLES, user.roles);
    sessionStorage.setItem(this.USER_TOKEN, userToken);
  }

  logout() {
    sessionStorage.removeItem(this.USER_USERNAME);
    sessionStorage.removeItem(this.USER_ID);
    sessionStorage.removeItem(this.USER_ROLES);
    sessionStorage.removeItem(this.USER_TOKEN);
    this.user = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_USERNAME);
    return user !== null;
  }
}
