import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeServiceService } from '../home-service.service';
import { User } from '../registerClass';
import { nameValidator,specialCharactersValidator,emailValidator, 
  passwordContentsValidator} from '../validators/name.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  constructor(public fb:FormBuilder,private homeService:HomeServiceService) { }

  validatorForm:FormGroup;
  public  accounts=<any>[]

  ngOnInit(): void {
    this.validatorForm=this.fb.group(
      {
      name: ['',[Validators.required,nameValidator,specialCharactersValidator]],
      username:['',[Validators.required,nameValidator,specialCharactersValidator]],
      email:['',[Validators.required,emailValidator]],
      password:['',[Validators.required,passwordContentsValidator]],
      security: ['', [Validators.required,nameValidator,specialCharactersValidator]],  
      }
  );
  this.accounts = this.homeService.getAccounts();
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
  get security() {
    return this.validatorForm.get('security');
  }

  registerButton(){
    const message =`Registration succsefully`;
    if(this.validatorForm.get('name').value==="" ||this.validatorForm.get('username').value==="" || 
      this.validatorForm.get('email').value==="" ||  this.validatorForm.get('password').value==="")
      alert("You cannot leave empty fields");
      else
        alert(message);
  }
  addAccount(){

    this.homeService.addAccount(this.user).subscribe(data=>{
      console.log(data);
    })
    console.log(this.user.name);
    console.log(this.user.username);
    console.log(this.user.email);
    console.log(this.user.password);
  }
  
  
  }


