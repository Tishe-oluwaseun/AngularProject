import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit, OnDestroy {
  eventForm!: FormGroup;
  eventId: string = '';
  pictures: any[] = [];
  isUploading = false;
  picturesSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private photoService: PhotoService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id') || '';
      this.loadPictures();
    });
    this.initializeForm();
  }

  ngOnDestroy(): void {
    if (this.picturesSubscription) {
      this.picturesSubscription.unsubscribe();
    }
  }

  initializeForm(): void {
    this.eventForm = this.fb.group({
      eventName: ['', [Validators.required]],
    });
  }

  loadPictures(): void {
    this.picturesSubscription = this.photoService.getPhotos(this.eventId).subscribe(pictures => {
      console.log('Photos retrieved from Firebase:', pictures); // Debugging the response
      this.pictures = pictures ? Object.keys(pictures).map(key => ({ id: key, ...pictures[key] })) : [];
    });
  }

  uploadPicture(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.isUploading = true;
      this.photoService.uploadPhoto(this.eventId, file).then(() => {
        this.isUploading = false;
        this.loadPictures(); 
      }).catch(err => {
        this.isUploading = false;
        // this.snackBar.open('Upload failed', 'Close', { duration: 1000 });
      });
    }
  }

  deletePicture(pictureId: string): void {
    this.photoService.deletePhoto(this.eventId, pictureId).subscribe(() => {
      this.loadPictures();
    });
  }

  // updatePhotoName(pictureId: string, fileName: string): void {
  //   this.photoService.updatePhotoName(this.eventId, pictureId, fileName).subscribe(() => {
  //     console.log('Photo name updated');
  //   });
  // }

  backToEvents(): void {
    this.router.navigate(['/photo-library']);
  }
}
