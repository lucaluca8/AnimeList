import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAccountComponent } from '../manage-account/manage-account.component';
import { AnimeComponent } from './anime/anime.component';
import { RakingListComponent } from './raking-list/raking-list.component';

const routes: Routes = [
  {
    path:':name',
    component:AnimeComponent
  },
  {
    path:':ManageAccount',
    component:ManageAccountComponent
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
