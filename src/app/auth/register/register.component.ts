import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private formBuilder : FormBuilder) {
    
  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        username: ['', [Validators.required, Validators.pattern("^\\S*$")]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$")]],
    })
  }
  onSubmit() {
    console.log(this.registerForm);

  }
}
