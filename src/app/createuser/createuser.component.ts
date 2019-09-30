import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormserviceService } from '../formservice.service';
<<<<<<< HEAD
import { Router, ActivatedRoute} from '@angular/router';
=======
import { Router} from '@angular/router';
>>>>>>> 7d91ccf8dfe9e90c3d5e2d830826db1bdc5bc6c9
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
<<<<<<< HEAD
email;
user;
  createForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email])
  });
  constructor(private formservice: FormserviceService,
              private route: ActivatedRoute,
              private router: Router) { }
  emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
=======
>>>>>>> 7d91ccf8dfe9e90c3d5e2d830826db1bdc5bc6c9

  createForm: FormGroup;
  constructor(private formservice: FormserviceService, private router: Router, private fb: FormBuilder) {
    this.newForm();
   }
  newForm(){
    this.createForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName:  ['', Validators.required ],
      email:  ['',[Validators.required, Validators.email]]

<<<<<<< HEAD
  onSubmit() {
    let create=this.createForm.value
    this.formservice.add(create)
    .subscribe(response => {
      this.formservice.getlist()
    .then(res => {
      this.user= res;
      console.log(this.user)
    })
     console.log(response);
    
=======
>>>>>>> 7d91ccf8dfe9e90c3d5e2d830826db1bdc5bc6c9
    });
    this.router.navigate(['/listuser'])
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
