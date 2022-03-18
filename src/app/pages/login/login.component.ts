/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
    loading = false;
    submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    
) { }

ngOnInit() {
  this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

}
get f() { return this.form.controls; }

onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }
}

}

