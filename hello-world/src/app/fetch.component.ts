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
    const data = await fetch('https://reqres.in/api/users/2');
    const json = await data.json();
    console.log(json.data.email);
    console.log('testing weather console')
}

getWeather()