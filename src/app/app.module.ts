import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TemperatureComponent } from './component/temperature/temperature.component';
import { MentorRegistrationComponent } from './component/mentor-registration/mentor-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TemperatureComponent,
    MentorRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
