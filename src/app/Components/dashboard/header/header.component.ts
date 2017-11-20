import { Component, OnInit } from '@angular/core';
import {InvidzService} from '../../../Services/Invidz';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private invidz: InvidzService) { }

  ngOnInit() {
  }

  logout() {
    this.invidz.logout();
  }
}
