import { DashboardComponent } from './../modules/dashboard/dashboard/dashboard.component';
import { LandingComponent } from './../modules/front/landing/landing.component';
import { Routes } from '@angular/router';

export const opRoutes: Routes =[
 {path: '', component: LandingComponent},
 {path: 'dashboard', component: DashboardComponent}
]