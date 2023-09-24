import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ]
})
export class AuthModule { }
