import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serve-items',
  templateUrl: './serve-items.component.html',
  styleUrls: ['./serve-items.component.css']
})
export class ServeItemsComponent implements OnInit {
  title = 'app';
  tabLinks: any[];
  activeLinkIndex = -1;
  numd = 1;
  constructor(private router: Router) {   this.tabLinks = [
    {label: 'Deep Tissue', link: 'deeptissue-tab', index: 0},
    {label: 'Swedish', link: 'swedish-tab', index: 1},
    {label: 'Hot Stone Massage', link: 'hotstone-tab', index: 2},
  ];}
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
  nextInfo(){
    console.log(this.numd);
    this.numd++;
  }
}
