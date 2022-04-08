import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SearchModRoutingModule } from './search-mod-routing.module';
import { RakingListComponent } from './raking-list/raking-list.component';

@NgModule({
  declarations: [
    RakingListComponent
  ],
  imports: [
    CommonModule,
    SearchModRoutingModule,
    MatTableModule
  ]
})
export class SearchModModule { }
