import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-library',
  standalone: true,
  templateUrl: './photo-library.component.html',
  styleUrls: ['./photo-library.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class PhotoLibraryComponent implements OnInit {
  events: any[] = [];  // Store events here
  addEventForm!: FormGroup;  // Reactive form for adding new event

  constructor(
    private eventService: EventService,  // Inject EventService correctly
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadEvents();
  }

  initializeForm(): void {
    // Initialize the form for adding events
    this.addEventForm = this.fb.group({
      eventName: ['', [Validators.required]]
    });
  }

  loadEvents(): void {
    // Load existing events from the EventService
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  addEvent(): void {
    if (this.addEventForm.valid) {
      const eventName = this.addEventForm.value.eventName;
      // Call the service to add the event
      this.eventService.addEvent({ name: eventName }).subscribe((newEvent) => {
        this.events.push(newEvent);  // Add the new event to the list
        this.addEventForm.reset();  // Clear the form
      });
    }
  }

  deleteEvent(event: any): void {
    this.eventService.deleteEvent(event).subscribe(() => {
      this.events = this.events.filter(e => e !== event);  // Remove event from the list
    });
  }
}


