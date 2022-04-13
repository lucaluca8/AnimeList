import { Component, OnInit } from '@angular/core';
import { User } from '../../home-mod/registerClass';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  public  accounts=<any>[]
  id:number=null;
  user:User = new User();
  constructor(private manageServices:ManageService) { }

  ngOnInit(): void {
    this.manageServices.getAccounts().subscribe(data=>{
      this.accounts=data;
    });
  }

  getAccountId():void {
    this.accounts.forEach(data=>{
      if(data.name === this.user.name) {
        this.user=data;
        this.id=data.id;       
    }
    })
  }

  changeAccountInfo():void{
    
    if(this.user.name !="")
    {
      this.manageServices.updateAccount(this.id,this.user).subscribe(data=>{
        console.log(data);
      });
      alert("Updated account info :)")
    }
    else{
      alert("You need to introduce an account name first")
    }
  }
  deleteAccount():void{
    if(this.user.name !="")
    {
      this.manageServices.deleteAccount(this.id);
      alert("The account has been deleted :(")
    }
    else{
      alert("You need to introduce an account name first")
    }
  }

}
