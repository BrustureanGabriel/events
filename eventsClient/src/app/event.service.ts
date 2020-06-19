import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Events} from './models/event.model';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const eventsUrl = 'http://localhost:8080/event/';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) {
  }

  public getEvent(eventId: number): Observable<Events> {
    return this.httpClient.get<Events>(eventsUrl + eventId);
  }

  public getEvents(): Observable<Array<Events>> {
    return this.httpClient.get<Array<Events>>(eventsUrl);
  }

  public getEventsByUserId(userId: number): Observable<Array<Events>> {
    return this.httpClient.get<Array<Events>>(eventsUrl + 'user/' + userId);
  }

  public deleteEvents(event: Events): Observable<Events> {
    return this.httpClient.delete<Events>(eventsUrl + event.id);
  }


  public saveEvent(event: Events): Observable<Events> {
    console.log(this.httpClient.post<Events>(eventsUrl, event, httpOptions));
    return this.httpClient.post<Events>(eventsUrl, event, httpOptions).pipe(
      tap((newEvent: Events) => console.log(`added hero w/ id=${newEvent.id}`)),
      catchError(this.handleError<Events>('addEvent'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
