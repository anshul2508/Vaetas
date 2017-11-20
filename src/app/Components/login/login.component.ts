import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InvidzService} from '../../Services/Invidz';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: FormGroup;
  loading = false;

  constructor( private invidz: InvidzService, private router: Router) {}


  ngOnInit() {
    this.loginData = new FormGroup ({
      'email' : new FormControl(null, [Validators.email, Validators.required]),
      'password' : new FormControl(null, Validators.required )
    });
  }

  onSubmit() {
    this.loading = true;
    const output = this.invidz.login(this.loginData.get('email').value, this.loginData.get('password').value );

    output.subscribe( (value) => {
        console.log(value.email);
        console.log(value.first_name);
        console.log(value.last_name);
        this.loading = false;
        this.router.navigate(['/videos']);
      },
      (error) => {
        console.log(error.json);
        this.loading = false;
      }
    );

  }

}
