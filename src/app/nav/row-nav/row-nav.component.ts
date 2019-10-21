import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component,  OnDestroy, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatSidenav, MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-row-nav',
  templateUrl: './row-nav.component.html',
  styleUrls: ['./row-nav.component.css']
})
export class RowNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  opened = false;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  //@Input() toggleSidenav: MatSidenav;
  //@Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {

  }

  // sideNavBtnToggle(){
  //   if(this.SideNav == false)
  //   {
  //          this.SideNav = true;
  //   }
  //   else{
  //          this.SideNav = false;
  //   }
//}

}
