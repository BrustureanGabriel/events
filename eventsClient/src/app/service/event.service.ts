import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventDTO} from '../security/models/eventDTO';
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

  public getEvent(eventId: number): Observable<EventDTO> {
    return this.httpClient.get<EventDTO>(eventsUrl + eventId);
  }

  public getEvents(): Observable<Array<EventDTO>> {
    return this.httpClient.get<Array<EventDTO>>(eventsUrl);
  }

  public getPassedEvents(userId: number): Observable<Array<EventDTO>> {
    return this.httpClient.get<Array<EventDTO>>(eventsUrl + 'passed/' + userId);
  }

  public getEventsCreatedByUserId(userId: number): Observable<Array<EventDTO>> {
    return this.httpClient.get<Array<EventDTO>>(eventsUrl + 'created/' + userId);
  }

  public deleteEvents(event: EventDTO): Observable<EventDTO> {
    return this.httpClient.delete<EventDTO>(eventsUrl + event.id);
  }


  public saveEvent(event: EventDTO): Observable<EventDTO> {
    console.log(this.httpClient.post<EventDTO>(eventsUrl, event, httpOptions));
    return this.httpClient.post<EventDTO>(eventsUrl, event, httpOptions).pipe(
      tap((newEvent: EventDTO) => console.log(`added hero w/ id=${newEvent.id}`)),
      catchError(this.handleError<EventDTO>('addEvent'))
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
