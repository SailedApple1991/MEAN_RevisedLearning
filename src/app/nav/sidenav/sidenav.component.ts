import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public toggleSidenav: MatSidenav;
  //@ViewChild('sidenav') sidenav:any;
  navigationSidenav()
  {
    this.toggleSidenav.toggle();
    console.log(this.toggleSidenav.toggle);
  }

  constructor() { }

  ngOnInit() {
  }

}
