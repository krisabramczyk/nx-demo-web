import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {provideFeature1Infra} from "@feat1/infrastructure";
import {ENV} from "@core/models";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: ENV,
      useValue: {
        apiUrl: 'http://localhost:8080',
      }
    }
  ],
};
