import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule,  ReactiveFormsModule}   from '@angular/forms';
import { ListuserComponent } from './listuser/listuser.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    ListuserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
