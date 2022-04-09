import { Component, OnInit } from '@angular/core';
import { AnimeInterface } from '../AnimeInterface';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../table.service';
import { searchValidator } from './validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-raking-list',
  templateUrl: './raking-list.component.html',
  styleUrls: ['./raking-list.component.scss']
})
export class RakingListComponent implements OnInit {
displayedColumns: string[] = ['name', 'rating', 'nr_episodes'];
public  animeList=<any>[]

inputSb:string = "";
searchResult! : any;
searchedId:any;
check:boolean = false;


validatorForm:FormGroup;
  dataSource: MatTableDataSource<unknown>;

constructor(private tableService: TableService, public fb:FormBuilder  ) {}

ngOnInit(): void {
  this.validatorForm=this.fb.group(
    {
    search: ['',[searchValidator]]
    }
  );
  this.animeList = this.tableService.getAnimes();
  
  this.tableService.getAnimes().subscribe(data=>{
    this.animeList = data;
    this.dataSource = new MatTableDataSource(this.animeList);
  });
  
  
}

get search(){
  return this.validatorForm.get('search');
}

searchFunction(){
  console.log("binded");
  if(this.inputSb !="")
  {
    
    this.animeList.forEach(data=>{
      if(data.name==this.inputSb) {
      this.searchResult=data;
      if(this.check === false)
      alert("Anime found!! \n Press again to go to anime page :)");
      this.check = true;
      this.searchedId=this.searchResult.id;
      
    }})
      
    if(this.check === false)
    {
      alert("Anime not found");
    }
  }
  else{
    alert("Search box cannot be empty");
  }
}




}
