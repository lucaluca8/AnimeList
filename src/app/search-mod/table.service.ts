import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeInterface } from './AnimeInterface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) {}
 
  getAnimes(){
    return this.http.get('http://localhost:3000/anime');
  }

  
}
