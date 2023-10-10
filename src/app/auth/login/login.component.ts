import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user !: User

  onSubmit(form : any) {
      console.log(form)
    }
  }