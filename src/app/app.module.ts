import { opRoutes } from './routes/opinionize.routes';
import { FrontModule } from './modules/front/front.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrontModule,
    MaterialModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(opRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
