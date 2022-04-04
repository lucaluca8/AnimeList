import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path:'',
    loadChildren:()=>import('./home-mod/home-mod.module').then((module)=>(module).HomeModModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
