import { Component, OnInit } from '@angular/core';
import { AnimeServService } from '../anime-serv.service';
import { Anime } from '../animeClass';

@Component({
  selector: 'app-manage-anime',
  templateUrl: './manage-anime.component.html',
  styleUrls: ['./manage-anime.component.scss']
})
export class ManageAnimeComponent implements OnInit {

  anime:Anime = new Anime()
  public animes=<any>[]
  id:number=null

  constructor(private animeserv:AnimeServService) { }

  ngOnInit(): void {
    this.animeserv.getAnimes().subscribe(data=>{
      this.animes=data;
    });
  }


  addAnime(){
    this.animeserv.addAnime(this.anime).subscribe(data=>{
      console.log(data);
    })
  }

  getAnimeId():void {
    this.animes.forEach(data=>{
      if(data.name === this.anime.name) {
        this.anime=data;
        this.id=data.id;     
    }
    });
  }

  getAnimeInfo(){
    if(this.anime.name !="")
    {
      this.getAnimeId();
    }
  }

  changeAnimeInfo():void{
    
    if(this.anime.name !="")
    {
      this.animeserv.updateAnime(this.id,this.anime).subscribe(data=>{
        console.log(data);
      });
  }
  }

}
