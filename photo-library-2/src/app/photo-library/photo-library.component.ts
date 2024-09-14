import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-library',
  templateUrl: './photo-library.component.html',
  styleUrls: ['./photo-library.component.css'],
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink, CommonModule],
})
export class PhotoLibraryComponent implements OnInit {
  events: any[] = [];
  addEventForm!: FormGroup;
  updateEventForm!: FormGroup;
  editMode: boolean = false;
  eventToEdit: any = null;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForms();
    this.loadEvents();
  }

  initializeForms(): void {
    this.addEventForm = this.fb.group({
      eventName: ['', Validators.required]
    });
    this.updateEventForm = this.fb.group({
      updatedEventName: ['', Validators.required]
    });
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (events) => {
        console.log('Loaded events from Firebase:', events);
        this.events = events ? Object.keys(events).map(key => ({ id: key, ...events[key] })) : [];
      },
      error: (err) => {
        console.error('Error loading events:', err);
      }
    });
  }
  
  addEvent(): void {
    if (this.addEventForm.valid) {
      const newEvent = { name: this.addEventForm.value.eventName };
      console.log('New Event Data:', newEvent);
      this.eventService.addEvent(newEvent).subscribe({
        next: (response) => {
          console.log('Event added successfully:', response);
          this.loadEvents();
          this.addEventForm.reset();
        },
        error: (err) => {
          console.error('Error adding event:', err);
        }
      });
    }
  }

  deleteEvent(eventId: string): void {
    this.eventService.deleteEvent(eventId).subscribe(() => this.loadEvents());
  }

  editEvent(event: any): void {
    this.editMode = true;
    this.eventToEdit = event;
    this.updateEventForm.setValue({ updatedEventName: event.name });
  }

  updateEvent(): void {
    if (this.updateEventForm.valid && this.eventToEdit) {
      this.eventService.updateEvent(this.eventToEdit.id, this.updateEventForm.value.updatedEventName)
        .subscribe(() => {
          this.loadEvents();
          this.resetEditMode();
        });
    }
  }

  resetEditMode(): void {
    this.editMode = false;
    this.eventToEdit = null;
    this.updateEventForm.reset();
  }

  logout(): void {
    this.authService.logout();
  }
}
