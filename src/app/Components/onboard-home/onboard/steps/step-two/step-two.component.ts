import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  emailAdded = false;

  constructor() { }

  ngOnInit() {
  }

  addEmail() {
    console.log('Email Added Successfully');
    this.emailAdded = true;
  }


}
