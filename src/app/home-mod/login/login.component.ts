import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  public  accounts=<any>[]
  constructor(private homeService:HomeServiceService) { }

  ngOnInit(): void {
    this.accounts = this.homeService.getAccounts();
  }
  logInPressed(){
    var check = false
    console.log(this.username);
    console.log(this.password);
    console.log("binded");
    if(this.username !="" && this.password !="")
    {
      
      this.accounts.forEach(data=>{
        if(data.username === this.username && data.password === this.password) {
          check = true;
        alert("LogIn succesfully");       
      }})
        
      if(check === false)
      {
        alert("Account not found");
      }
    }
    else{
      alert("Search box cannot be empty");
    }
  }


}
