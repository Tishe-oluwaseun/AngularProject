import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  private maxFileSize = 5 * 1024 * 1024; // 5MB
  private baseUrl = 'https://photo-library-2-default-rtdb.firebaseio.com';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  
  getPhotos(eventId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/${eventId}/photos.json`);
  }

 
  uploadPhoto(eventId: string, file: File): Promise<void> {
    if (!['image/jpeg', 'image/png', 'image/gif', 'image/jpg'].includes(file.type)) {
      this.showError('Only JPEG, PNG, and GIF files are allowed');
      return Promise.reject('Invalid file type');
    }
    
    if (file.size > this.maxFileSize) {
      this.showError('File size must be less than 5MB');
      return Promise.reject('File size exceeds 5MB');
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.http.post(`${this.baseUrl}/events/${eventId}/photos.json`, {
          base64: base64String,
          fileName: file.name
        }).subscribe({
          next: () => resolve(),
          error: (err) => {
            this.showError('Error uploading image');
            reject(err);
          }
        });
      };
      reader.onerror = () => {
        this.showError('File reading error');
        reject('File reading error');
      };
      reader.readAsDataURL(file);
    });
  }

 
  deletePhoto(eventId: string, photoId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/events/${eventId}/photos/${photoId}.json`);
  }

  // // Update a photo name
  // updatePhotoName(eventId: string, photoId: string, newFileName: string): Observable<any> {
  //   return this.http.patch(`${this.baseUrl}/events/${eventId}/photos/${photoId}.json`, { fileName: newFileName });
  // }

  private showError(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 1000, panelClass: ['error-snackbar'] });
  }
}
