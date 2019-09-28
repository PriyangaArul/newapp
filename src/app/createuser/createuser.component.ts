import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormserviceService } from '../formservice.service';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
email;
  createForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email])
  });
  constructor(private formservice: FormserviceService) { }
  emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  onSubmit() {
    let create=this.createForm.value
    this.formservice.add(create)
    .subscribe(response => {
     console.log(response);
    });
  }


  ngOnInit() {
  }

}
