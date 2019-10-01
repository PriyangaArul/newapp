import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

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
  constructor(private formservice:FormserviceService) { }

  ngOnInit() {
    this.formservice.getlist()
    .then(res => {
      this.user= res;
      console.log(this.user)
    })
  
  }
  delete(data){
    this.formservice.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
 
    this.formservice.delete(data.id).subscribe(
      res =>{
        this.formservice.getlist()
    .then(res => {
      
      this.user= res;
      console.log(this.user)
    })
      }
    )
    console.log(data)
  }

  editdata(data) {
    this.formservice.geteditdata(data.id)
      .subscribe(
        res => {
          console.log("res", res);
          res;
        }
      )
  }
  // form(data_edit){
  //   this.edit_id = data_edit.id
  //  this.editForm = this.formbuilder.group({
  //     firstName: [data_edit.first_name],
  //     lastName: [data_edit.last_name],
  //     email: [data_edit.email],
  //   })
    
  // }
  
  update() {
    this.formservice.updateUser(this.editForm.value, this.edit_id)
      .subscribe(
        res => {
          this.formservice.getlist()
      .then(res => {
        this.user = res;
      });
      
        console.log(res)
        },
          error => {
          alert(error);
        });
  }

  
} 
