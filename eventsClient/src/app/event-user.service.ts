import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {EventUserModel} from './models/event-user.model';
import {catchError, tap} from 'rxjs/operators';
import {Events} from './models/event.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const eventUserUrl = 'http://localhost:8080/event-user/';

@Injectable({
  providedIn: 'root'
})
export class EventUserService {

  constructor(private httpClient: HttpClient) {
  }

  public getEventUser(eventUserId: number): Observable<EventUserModel> {
    return this.httpClient.get<EventUserModel>(eventUserUrl + eventUserId);
  }

  public getEventUsers(): Observable<Array<EventUserModel>> {
    return this.httpClient.get<Array<EventUserModel>>(eventUserUrl);
  }

  public deleteEventUser(eventUser: EventUserModel): Observable<EventUserModel> {
    return this.httpClient.delete<EventUserModel>(eventUserUrl + eventUser.id);
  }

  public saveEventUser(eventUser: EventUserModel): Observable<EventUserModel> {
    return this.httpClient.post<EventUserModel>(eventUserUrl, eventUser, httpOptions).pipe(
      tap((newEventUser: EventUserModel) => console.log(`added evUse w/ id=${newEventUser.id}`)),
      catchError(this.handleError<EventUserModel>('addEventUser'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
