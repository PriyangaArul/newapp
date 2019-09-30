import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ListuserComponent } from './listuser//listuser.component';
const routes: Routes = [
  {path: 'createuser', component: CreateuserComponent},
  {path: 'listuser', component:  ListuserComponent},
  {path: '', component: AppComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
