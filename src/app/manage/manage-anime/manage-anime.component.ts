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
    if( this.anime.name != "" && this.anime.image != "" && this.anime.description != "" && this.anime.rating !="" && this.anime.genre !=""&&this.anime.studio!="")
      {
        this.animeserv.addAnime(this.anime).subscribe(data=>{
          console.log(data);
        })
        alert("Anime added :D");
      }
      else
      {
        alert("You left at least one field empty");
      }
    
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
      if(this.anime.image != "" && this.anime.description != "" && this.anime.rating !="" && this.anime.genre !=""&&this.anime.studio!="")
      {
          this.animeserv.updateAnime(this.id,this.anime).subscribe(data=>{
        });
        alert("Updated anime info :)");
      }
      else
      {
        alert("You need to get the anime info first");
      }

    }
    else{
      alert("You need to introduce an anime name first");
    }
  }

  deleteAnime():void{
    if(this.anime.name !="")
    {
      if(this.anime.image != "" && this.anime.description != "" && this.anime.rating !="" && this.anime.genre !=""&&this.anime.studio!="")
      {
         this.animeserv.deleteAnime(this.id);
         alert("Anime deleted :(");
      }
      else
      {
        alert("You need to get the anime info first");
      }

    }
    else{
      alert("You need to introduce an anime name first");
    }
  }


}
