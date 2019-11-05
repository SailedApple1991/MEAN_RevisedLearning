import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  // latitude = 39.017133;
  // longitude = -77.372330;
  mapType = 'roadmap';
  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 39.017133;
  lng: number = -77.372330;
  //ChIJwelgsf44tokRJXlLLrqrivk
  markers: marker[] = [{
  lat: 39.017133,
	lng: -77.372330,
	label: 'Massage Pros Sterling',
	draggable: false
    }
  ];
  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
    window.open('https://www.google.com/maps/search/?api=1&query=Massage+PROS+Sterling', '_blank');
    // window.open('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJCeSqUXs3tokRX9RzjaEFRTg&fields=name,rating,formatted_phone_number&key=AIzaSyA6EHvmpMAYLP6PQ2t6v4l04GXzNeYrQho');
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  constructor() { }

  ngOnInit() {
  }

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
