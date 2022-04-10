import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAnimeComponent } from './manage-anime/manage-anime.component';

const routes: Routes = [
  {
    path:':anime',
    component:ManageAnimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
