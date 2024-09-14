import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'https://photo-library-2-default-rtdb.firebaseio.com/events';

  constructor(private http: HttpClient) {}

  // Fetch all events
  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}.json`);
  }

  // Add a new event
  addEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}.json`, event);
  }

  // Delete an event by id
  deleteEvent(eventId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${eventId}.json`);
  }

  // Update event name
  updateEvent(eventId: string, newName: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${eventId}.json`, { name: newName });
  }
}
