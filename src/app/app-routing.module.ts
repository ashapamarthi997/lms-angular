import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MentorLoginComponent } from './pages/mentor-login/mentor-login.component';

const routes: Routes = [
 {path:'',component:WelcomeComponent},
 {path:'mentor-login',component:MentorLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[WelcomeComponent,MentorLoginComponent]
