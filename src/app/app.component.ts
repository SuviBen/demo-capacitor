import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-capacitor';
  imgSrc?: string;
  coords?: any;
  apiData?: string;
  private refreshInterval?: any;
  isOnline: boolean = navigator.onLine;

  constructor(private http: HttpClient) {
    // Listen for online/offline events
    window.addEventListener('online', () => this.isOnline = true);
    window.addEventListener('offline', () => this.isOnline = false);
  }

  ngOnInit() {
    // Initial API call
    this.getApiData();
    
    // Set up periodic refresh every 20 seconds
    this.refreshInterval = setInterval(() => {
      this.getApiData();
    }, 20000);
  }

  ngOnDestroy() {
    // Clean up the interval when component is destroyed
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  async getApiData() {
    try {
      const apiUrl = 'https://api.chucknorris.io/jokes/random';
      const request = this.http.get<{ value: string }>(apiUrl);
      const response = await firstValueFrom(request);
      this.apiData = response.value;
    } catch (error) {
      console.error('Error fetching joke:', error);
      // If we're offline, the service worker will serve the cached response
      if (!this.isOnline) {
        console.log('Offline mode: Using cached data');
      }
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    this.imgSrc = image.webPath;
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.coords = position.coords;
  }
}
