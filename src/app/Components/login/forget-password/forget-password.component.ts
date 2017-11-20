import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPassword: FormGroup;
  loading = false;

  constructor( private router: Router) { }

  ngOnInit() {
    this.forgetPassword = new FormGroup ({
      'email' : new FormControl(null, [Validators.email, Validators.required]),
    });
  }

  onSubmit() {
    console.log(' An Email has been sent to ' + this.forgetPassword.get('email').value);
    this.router.navigate(['/login']);
  }

}
