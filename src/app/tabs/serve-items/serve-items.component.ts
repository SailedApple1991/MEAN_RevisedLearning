import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve-items',
  templateUrl: './serve-items.component.html',
  styleUrls: ['./serve-items.component.css']
})
export class ServeItemsComponent implements OnInit {

  constructor() { }
  public picsList: any[] = [
    {image : '../assets/service/deeptissue.jpg'},
    {image : '/assets/main-card/massage-therapy1.jpg'},
    {image : '/assets/main-card/massage-therapy2.jpg'},
    {image : '/assets/main-card/massage-therapy3.jpg'},
  ];
  ngOnInit() {
  }

}
