import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authenticat/login/login.component';
import { WelcomeComponent } from './Authenticat/welcome/welcome.component';
import { CreanciersComponent } from './creanciers/creanciers.component';

const routes: Routes = [
  // default path to login component
  {path:'',
  redirectTo:'/welcome',
  pathMatch:'full'}
  ,
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'creanciers',
    component:CreanciersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
