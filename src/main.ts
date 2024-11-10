import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http'; // הוספת ייבוא של provideHttpClient

bootstrapApplication(AppComponent, {
  ...appConfig, // שמירה על ההגדרות הקיימות
  providers: [
    provideHttpClient(withFetch()) // הוספת withFetch
  ]
})
.catch((err) => console.error(err));
