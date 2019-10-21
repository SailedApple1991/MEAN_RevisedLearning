import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  latitude = 39.017133;
  longitude = -77.372330;
  mapType = 'roadmap';
  constructor() { }

  ngOnInit() {
  }

}
