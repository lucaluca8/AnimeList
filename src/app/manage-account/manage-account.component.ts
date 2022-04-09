import { Component, OnInit } from '@angular/core';
import { User } from '../home-mod/registerClass';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  public  accounts=<any>[]
  id:number=null;
  username:string = "";
  accName:string = "";
  user:User = new User();
  email:string="";
  password:string="";

  constructor(private manageServices:ManageService) { }

  ngOnInit(): void {
    this.manageServices.getAccounts().subscribe(data=>{
      this.accounts=data;
    });
  }
  getAccountId():void {
    this.accounts.forEach(data=>{
      if(data.name === this.accName) {
        this.user=data;
        this.id=data.id;       
    }
    })
  }
  changeAccountInfo():void{
    
    if(this.accName !="")
    {
      if(this.username !="")
        this.user.username=this.username;
      if(this.email!="")
        this.user.email=this.email;
      if(this.password!="")
        this.user.password=this.password;
      console.log(this.username)
      this.getAccountId();
      this.manageServices.updateAccount(this.id,this.user).subscribe(data=>{
        console.log(data);
      });
  }
  }

}
