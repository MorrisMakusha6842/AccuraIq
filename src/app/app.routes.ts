import { ResolveStart, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'get-started',
    loadComponent: () => import('./get-started/get-started.component').then(m => m.GetStartedComponent)
  },
  {
    path: 'log-in',
    loadComponent: () => import('./log-in/log-in.component').then(m => m.LogInComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent)
  }

];


