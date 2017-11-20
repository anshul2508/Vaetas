import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  youtubeAdded = false;

  constructor() { }

  ngOnInit() {
  }

  addYoutube() {
    this.youtubeAdded = true;
    console.log('youtube account added successfully');
  }



}
