import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $ : any;

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  user;
  edit_id;
  editForm;
  formbuilder;
  value;
  data: any;
  data_edit: any;
  constructor(private formservice:FormserviceService) { }

  ngOnInit() {
    this.formservice.getlist()
    .then(res => {
      this.user= res;
      console.log(this.user)
    })
  
  }

  openModel(data){  
    
    $('#myModal').modal('show');
    this.data = data;
    
  }
  
  delete(){
    
    this.formservice.delete(this.data.id).subscribe(
      res =>{
        this.formservice.getlist()
    .then(res => {
      
      this.user= res;
      console.log(this.user)
    })
      }
    )
    console.log(this.data.id)
  }
  
  editdata(data) {
    this.data = data;
    this.formservice.geteditdata(this.data.id)
      .subscribe(
        res => {
          console.log("res", res);
          res;
          
        }
      )
    $('#Model').modal('show');  
    this.form(this.data_edit);
  }
  form(data_edit){
    this.edit_id = data_edit.id
  //  this.editForm = this.formbuilder.group({
  //     firstName: [data_edit.firstName],
  //     lastName: [data_edit.lastName],
  //     email: [data_edit.email],
  //   })
   this.editForm = new FormGroup({
     firstName : new FormControl('',Validators.required),
     lastName : new FormControl('',Validators.required),
     email : new FormControl('',Validators.required)
   }); 
    
  }
  
  update() { 
    this.formservice.updateUser(this.editForm.value, this.edit_id)
      .subscribe(
        res => {
          this.formservice.getlist()
      .then(res => {
        this.user = res;
      });
      
        console.log(res)
      });
  }

  
} 
