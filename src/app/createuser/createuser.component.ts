import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormserviceService } from '../formservice.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  createForm: FormGroup;
  constructor(private formservice: FormserviceService, private router: Router, private fb: FormBuilder) {
    this.newForm();
   }
  newForm(){
    this.createForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName:  ['', Validators.required ],
      email:  ['',[Validators.required, Validators.email]]

    });
  }
  onSubmit() {
    // let create=this.createForm.value
    // this.formservice.add(create)
    // .subscribe(response => {
    //  console.log(response);
    // });
    
    this.router.navigate(['/listuser'])
  }
 

  ngOnInit() {
  }

}
