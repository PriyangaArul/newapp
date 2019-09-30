import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ListuserComponent } from './listuser//listuser.component';
const routes: Routes = [
<<<<<<< HEAD
  {path: '', component: AppComponent},
  {path: 'adduser', component: CreateuserComponent},
  {path: 'listuser', component:  ListuserComponent}
=======
  {path: 'createuser', component: CreateuserComponent},
  {path: 'listuser', component:  ListuserComponent},
  {path: '', component: AppComponent}
>>>>>>> 7d91ccf8dfe9e90c3d5e2d830826db1bdc5bc6c9
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
