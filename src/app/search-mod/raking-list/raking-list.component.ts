import { Component, OnInit } from '@angular/core';
import { AnimeInterface } from '../AnimeInterface';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../table.service';
import { searchValidator } from './validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-raking-list',
  templateUrl: './raking-list.component.html',
  styleUrls: ['./raking-list.component.scss']
})
export class RakingListComponent implements OnInit {
displayedColumns: string[] = ['name', 'rating', 'image'];
public  animeList=<any>[]


validatorForm:FormGroup;
  dataSource: MatTableDataSource<unknown>;

constructor(private tableService: TableService, public fb:FormBuilder) {}

ngOnInit(): void {
  this.validatorForm=this.fb.group(
    {
    search: ['',[searchValidator]]
    }
  );
  this.animeList = this.tableService.getAnimes();
  this.dataSource = new MatTableDataSource(this.animeList);
}

get search(){
  return this.validatorForm.get('search');
}




}
