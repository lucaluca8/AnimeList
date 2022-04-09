import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAccountComponent } from './manage-account/manage-account.component';

const routes: Routes = [
  {
    path:'search',
    loadChildren:()=>import('./search-mod/search-mod.module').then((module)=>(module).SearchModModule)
  },
  {
    path:':ManageAccount',
    component:ManageAccountComponent
  },
  { 
    path:'',
    loadChildren:()=>import('./home-mod/home-mod.module').then((module)=>(module).HomeModModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
