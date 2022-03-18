/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  user: User = {
      fullname: undefined,
      username: undefined,
      password: undefined,
      mobileno: undefined,
      city: undefined,
      dob: undefined,
      state: undefined,
      year: undefined,
      qualification: undefined
  }
  result : User;
  
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router)
     {
     this.form  = this.formBuilder.group({
        fullname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        mobileno: ['', Validators.required],
        city: ['', Validators.required],
        dob: ['', Validators.required],
        state: ['', Validators.required],
        year: ['', Validators.required],
        qualification:['', Validators.required]
     });
   }

  ngOnInit() {
  }


  onSubmit(form1: FormGroup) {
    this.submitted = true;
    this.user.fullname = form1.value.userName;
    this.user.username = form1.value.email;
    this.user.password = form1.value.password;
    this.user.mobileno = form1.value.mobileno;
    this.user.city = form1.value.city;
    this.user.dob = form1.value.dob;
    this.user.state = form1.value.state;
    this.user.year = form1.value.year;
    this.user.qualification = form1.value.qualification;
    localStorage.setItem("user",JSON.stringify(this.user));
    this.userService.insertUser(this.user).subscribe((data:User)=> this.result = data).unsubscribe();
    this.router.navigate(['../login']);
    

    if (this.form.invalid) {
        return;
    }

} 
}

