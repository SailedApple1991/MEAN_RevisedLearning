import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import data from './data.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-serve-items1',
  templateUrl: './serve-items1.component.html',
  styleUrls: ['./serve-items1.component.css']
})
export class ServeItems1Component implements OnInit {

  private id: string;
  private items = data;
  public item;
  public description: SafeHtml;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
   }
   public picsList: any[] = [
    {image : '../assets/service/deeptissue.jpg'},
    {image : '/assets/main-card/massage-therapy1.jpg'},
    {image : '/assets/main-card/massage-therapy2.jpg'},
    {image : '/assets/main-card/massage-therapy3.jpg'},
  ];
  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = params.id;
      this.item = this.items.find(tab => tab.id === this.id);
      this.description = this.sanitizer.bypassSecurityTrustHtml(
        this.item.description
      )
      console.log(this.item, +'\n' );
    });
  }

}
