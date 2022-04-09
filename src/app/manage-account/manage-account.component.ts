import { Component, OnInit } from '@angular/core';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  public  accounts=<any>[]
  id:number=null;
  name:string = "";
  username:string = ""

  constructor(private manageServices:ManageService) { }

  ngOnInit(): void {
    this.accounts = this.manageServices.getAccounts();
  }
  getAccountId():void {
    this.accounts.forEach(data=>{
      if(data.username === this.username || data.name === this.name) {
        this.id=data.id;
     console.log(data.username)      
    }})
  }
  changeName():void{
    this.getAccountId();
    console.log(this.id);
    console.log(this.name)
  }

}
