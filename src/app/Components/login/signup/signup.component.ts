import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InvidzService} from '../../../Services/Invidz';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData: FormGroup;
  loading = false;

  constructor(private router: Router, private invidz: InvidzService) {}


  ngOnInit() {
    this.signupData = new FormGroup ({
      'firstName' : new FormControl(null, Validators.required ),
      'lastName' : new FormControl(null, Validators.required ),
      'email' : new FormControl(null, [Validators.email, Validators.required]),
      'password' : new FormControl(null, Validators.required ),
      'confirmPassword' : new FormControl(null, Validators.required ),
    });
  }

  onSubmit() {
    this.loading = true;
    console.log('signup successful');
    this.invidz.signup(
      this.signupData.get('firstName').value,
      this.signupData.get('password').value,
      this.signupData.get('confirmPassword').value,
      this.signupData.get('lastName').value,
            this.signupData.get('email').value );
    this.router.navigate(['videos']);

  }

}
