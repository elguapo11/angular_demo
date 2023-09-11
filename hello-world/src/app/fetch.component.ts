import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fetch.component.html',
  styleUrls: ['./app.component.css'],
})
export class Fetch {
  fetch = 'hello-world, this is Benny from Fetch';
}

async function getWeather() {
  try {
    const data = await fetch('https://reqres.in/api/users/2');
    const response = await data.json();
    console.log(response.data.email);
    setTimeout(() => console.log('this is benny again after 2 seconds'), 2000);
    console.log('testing dumb api example console');
  } catch (error) {
    console.log(error);
  }
}

getWeather();
