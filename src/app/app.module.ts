import { opRoutes } from './routes/opinionize.routes';
import { FrontModule } from './modules/front/front.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrontModule,
    RouterModule.forRoot(opRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
