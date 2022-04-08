import { Injectable } from '@angular/core';
import { AnimeInterface } from './AnimeInterface';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private anime: AnimeInterface[] = [
    { name: 'Blue Period', rating:'10/10', image:'image'},
    { name: 'God of Highschool', rating:'10/10', image:'image' },
    {  name: 'Tokyo Revengers', rating:'10/10', image:'image'},
    { name: 'Jujutsu Kaisen', rating:'10/10', image:'image' },
    {  name: 'My Dress-Up Darling', rating:'10/10', image:'image'},
    { name: 'Demon Slayer', rating:'10/10', image:'image'},
    {  name: 'Attack On Titan', rating:'10/10', image:'image'},
    {  name: 'Moriarty the Patriot', rating:'10/10', image:'image'},
    {  name: 'Naruto', rating:'10/10', image:'image' },
    {  name: 'Horimiya', rating:'10/10', image:'image' },
  ];

  constructor() {}

  getElements(): AnimeInterface[] {
    return this.anime;
  }
}
