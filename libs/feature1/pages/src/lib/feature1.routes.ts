import {Routes} from "@angular/router";


export const feature1Routes: Routes = [
  {path: ':id', loadComponent: () => import('./view-page/view-page.component').then(m => m.ViewPageComponent)},
  {path: 'edit/:id', loadComponent: () => import('./edit-page/edit-page.component').then(m => m.EditPageComponent)},
  {path: '', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)},
]
