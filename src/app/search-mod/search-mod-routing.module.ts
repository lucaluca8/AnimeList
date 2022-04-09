import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { RakingListComponent } from './raking-list/raking-list.component';

const routes: Routes = [
  {
    path:':name',
    component:AnimeComponent
  },
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
