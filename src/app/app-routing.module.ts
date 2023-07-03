import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MentorRegistrationComponent } from './pages/mentor-registration/mentor-registration.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'mentor-registration',component:MentorRegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[WelcomeComponent,MentorRegistrationComponent]
