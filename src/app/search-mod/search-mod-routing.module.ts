import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RakingListComponent } from './raking-list/raking-list.component';

const routes: Routes = [
  {
    path:'',
    component:RakingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchModRoutingModule { }
