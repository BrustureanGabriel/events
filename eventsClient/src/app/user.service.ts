import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const htttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const userUrl = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getUser() {
    return this.httpClient.get<any>(userUrl);
  }
}
