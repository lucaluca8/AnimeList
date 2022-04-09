import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageService {


  path:string = 'http://localhost:3000/accounts';
  constructor(private http:HttpClient) { }

  getAccounts(){
    return this.http.get(this.path);
  }

}
