import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TemperatureComponent } from './component/temperature/temperature.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TemperatureComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
