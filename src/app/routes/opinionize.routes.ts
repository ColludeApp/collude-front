import { IdeaDetailComponent } from './../modules/dashboard/idea-detail/idea-detail.component';
import { DashboardComponent } from './../modules/dashboard/dashboard/dashboard.component';
import { LandingComponent } from './../modules/front/landing/landing.component';
import { Routes } from '@angular/router';

export const opRoutes: Routes = [
  { path: '', component: LandingComponent },
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'idea',
    children: [
      {
        path: ':id',
        component: IdeaDetailComponent
      }
    ]
  }
]