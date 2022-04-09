import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) {}
 
  getAccounts(){
    return this.http.get('http://localhost:3000/accounts');
  }

}
