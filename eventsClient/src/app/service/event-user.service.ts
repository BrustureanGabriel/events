import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {EventUserModel} from '../security/models/event-user.model';
import {catchError, tap} from 'rxjs/operators';

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

  public getEventUserByEventId(eventId: number): Observable<number> {
    return this.httpClient.get<number>(eventUserUrl + eventId);
  }

  public getEventUsers(): Observable<Array<EventUserModel>> {
    return this.httpClient.get<Array<EventUserModel>>(eventUserUrl);
  }

  public deleteEventUser(eventUser: EventUserModel): Observable<EventUserModel> {
    return this.httpClient.delete<EventUserModel>(eventUserUrl + eventUser.id);
  }

  public isUserAlreadyRegisteredForEvent(eventId: number, userId: number): Observable<boolean> {
    return this.httpClient.get<boolean>(eventUserUrl + eventId + '/' + userId);
  }

  public joinEvent(eventUser: EventUserModel): Observable<EventUserModel> {
    return this.httpClient.post<EventUserModel>(eventUserUrl, eventUser, httpOptions).pipe(
      tap((newEventUser: EventUserModel) => console.log(`added evUse w/ id=${newEventUser.id}`)),
      catchError(this.handleError<EventUserModel>('addEventUser'))
    );
  }

  abandonEvent(eventId: number, userId: number) {
    return this.httpClient.delete(eventUserUrl + eventId + '/' + userId);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
