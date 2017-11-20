import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  CTAAdded = false;

  constructor() { }

  ngOnInit() {
  }

  addCTA() {
    console.log('CTA added successfully');
    this.CTAAdded = true;
  }

}
