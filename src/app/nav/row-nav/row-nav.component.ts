import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from '../side-nav/sidenav.component';
@Component({
  selector: 'app-row-nav',
  templateUrl: './row-nav.component.html',
  styleUrls: ['./row-nav.component.css']
})
export class RowNavComponent implements OnInit {

  // @Input() openSideNav: SidenavComponent;
  SideNav : boolean ;
  constructor(public SidenavComponent:SidenavComponent) { }

  ngOnInit() {

  }

  sideNavBtnToggle(){
    if(this.SideNav == false)
    {
           this.SideNav = true;
    }
    else{
           this.SideNav = false;
    }
}
