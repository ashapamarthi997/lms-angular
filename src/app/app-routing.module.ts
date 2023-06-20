import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';

const routes: Routes = [
 {path:'welcome',component:WelcomeComponent},
 {path:'student-dashboard', component:StudentDashboardComponent},
 { path: '',   redirectTo: '/welcome', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[WelcomeComponent, StudentDashboardComponent]
