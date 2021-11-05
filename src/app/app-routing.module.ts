import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlerteComponent } from './alerte/alerte.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceComponent } from './service/service.component';
import { OperationComponent } from './operation/operation.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'alerte', component:AlerteComponent},
  {path:'service', component:ServiceComponent},
  {path:'operation', component:OperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
