import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDTO} from '../security/models/userDTO';
import {Observable} from 'rxjs';

const userUrl = 'http://localhost:8080/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getUser(userId: number): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>(userUrl + userId);
  }

  public getUsers(): Observable<Array<UserDTO>> {
    return this.httpClient.get<Array<UserDTO>>(userUrl);
  }

  public deleteUser(user: UserDTO): Observable<UserDTO> {
      return this.httpClient.delete<UserDTO>(userUrl + user.id);
  }

  public saveUser(user: UserDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(userUrl, user);
  }
}
