import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormserviceService } from '../formservice.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
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
    
    });
    this.router.navigate(['/listuser'])
  }


  ngOnInit() {
  }

}
