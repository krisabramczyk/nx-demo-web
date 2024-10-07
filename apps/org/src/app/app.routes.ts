import { Route } from '@angular/router';
import {HomePageComponent} from "./home/home.page.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'org-feature1',
    loadChildren: () => import('@feat1/pages').then( f => f.feature1Routes)
  }
];
