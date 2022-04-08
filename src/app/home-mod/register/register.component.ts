import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator,specialCharactersValidator,emailValidator, 
  passwordContentsValidator} from '../validators/name.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  validatorForm:FormGroup;

  ngOnInit(): void {
    this.validatorForm=this.fb.group(
      {
      name: ['',[Validators.required,nameValidator,specialCharactersValidator]],
      username:['',[Validators.required,nameValidator,specialCharactersValidator]],
      email:['',[Validators.required,emailValidator]],
      password:['',[Validators.required,passwordContentsValidator]],
      confirmPassword: ['', Validators.required]
      }
  );
}

  get name() {
    return this.validatorForm.get('name');
  }
  get username() {
    return this.validatorForm.get('username');
  }
  get email(){
    return this.validatorForm.get('email');
  }
  get password(){
    return this.validatorForm.get('password');
  }
  get confirmPassword(){
    return this.validatorForm.get('confirmPassword');
  }

  
  }


