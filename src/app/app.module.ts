import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TemperatureComponent } from './component/temperature/temperature.component';
<<<<<<< HEAD
import { MentorRegistrationComponent } from './pages/mentor-registration/mentor-registration.component';
=======
import { MentorLoginComponent } from './pages/mentor-login/mentor-login.component';
>>>>>>> d6db40ff72bf38d8135db4b73cb6190bcc913715
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TemperatureComponent,
<<<<<<< HEAD
    MentorRegistrationComponent
=======
    MentorLoginComponent
>>>>>>> d6db40ff72bf38d8135db4b73cb6190bcc913715
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
