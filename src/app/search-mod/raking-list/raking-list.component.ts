import { Component, OnInit } from '@angular/core';
import { AnimeInterface } from '../AnimeInterface';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../table.service';


@Component({
  selector: 'app-raking-list',
  templateUrl: './raking-list.component.html',
  styleUrls: ['./raking-list.component.scss']
})
export class RakingListComponent implements OnInit {
displayedColumns: string[] = ['name', 'rating', 'image'];
  public  animeList: AnimeInterface[] = this.tableService.getElements();

  dataSource = new MatTableDataSource(this.animeList);

  constructor(private tableService: TableService) {}

  ngOnInit(): void {}

  getElements() {
    this.animeList = this.tableService.getElements();
    this.dataSource = new MatTableDataSource(this.animeList);
    console.log(this.animeList);
  }

  clearData(){
    this.animeList=[];
    this.dataSource = new MatTableDataSource(this.animeList);
  }

}
