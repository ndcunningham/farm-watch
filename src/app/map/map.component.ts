import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
          <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675912.8797476252!2d-81.51222295174047!3d34.87463926112549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2sca!4v1601227159661!5m2!1sen!2sca" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
  `,
  styles: [`
  :host {
    display: block;
    padding-top: 50px;
  }
  .map {
    max-width: 800px;
    margin: 0 auto;
  }
  `]
})
export class MapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
