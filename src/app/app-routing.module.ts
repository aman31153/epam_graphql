import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';

const routes: Routes = [
  {path:'router1',component:Router1Component},
  {path:'router2',component:Router2Component},  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
