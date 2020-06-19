import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from './models/user.model';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const userUrl = 'http://localhost:8080/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getUser(userId: number): Observable<UserModel> {
    return this.httpClient.get<UserModel>(userUrl + userId);
  }

  public getUsers(): Observable<Array<UserModel>> {
    return this.httpClient.get<Array<UserModel>>(userUrl);
  }

  public deleteUser(userModel: UserModel): Observable<UserModel> {
    return this.httpClient.delete<UserModel>(userUrl + userModel.id);
  }

  public saveUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(userUrl, user);
  }
}
