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
      this.homeService.getAccounts().subscribe(data=>{
        this.accounts=data;
      });
  }
  logInPressed(){
    var check = false
    console.log(this.username);
    console.log(this.password);
    if(this.username !="" && this.password !="")
    {
      
      this.accounts.forEach(data=>{
        if(data.username === this.username && data.password === this.password) {
          check = true;
        alert("LogIn succesfully");       
      }
      console.log(data.username)
    })
        
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
