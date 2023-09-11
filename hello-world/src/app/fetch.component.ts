import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fetch.component.html',
  styleUrls: ['./app.component.css']
})

export class Fetch {
    fetch = 'hello-world, this is Benny from Fetch';
  }

async function getWeather () {
    console.log('testing weather console')
}
  