import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: any[] = [];  // Store events locally for now

  constructor() {}

  // Get all events
  getEvents(): Observable<any[]> {
    return of(this.events);
  }

  // Add a new event
  addEvent(event: any): Observable<any> {
    this.events.push(event);
    return of(event);  // Simulate API response
  }

  // Delete an event
  deleteEvent(event: any): Observable<any> {
    this.events = this.events.filter(e => e !== event);
    return of(event);  // Simulate API response
  }
}
