import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serve-items',
  templateUrl: './serve-items.component.html',
  styleUrls: ['./serve-items.component.css']
})
export class ServeItemsComponent implements OnInit {
  title = 'app';
  navLinks: any[];
  activeLinkIndex = -1;
  tabLinks = [
    {label: 'Deep Tissue', link: 'deeptissue-tab'},
    {label: 'Swedish', link: 'swedish-tab'},
    {label: 'Hot Stone Massage', link: 'hotstone-tab'},
  ];
  constructor(private router: Router) { }
  public picsList: any[] = [
    {image : '../assets/service/deeptissue.jpg'},
    {image : '/assets/main-card/massage-therapy1.jpg'},
    {image : '/assets/main-card/massage-therapy2.jpg'},
    {image : '/assets/main-card/massage-therapy3.jpg'},
  ];
  ngOnInit():void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.tabLinks.indexOf(this.tabLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

}
