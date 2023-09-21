import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fetch.component.html',
  styleUrls: ['./app.component.css'],
})
export class Fetch {
  fetch = 'Benny has a site';
}
async function getWeather() {
  try {
    const data = await fetch('https://reqres.in/api/users/2');
    const response = await data.json();
    console.log(response.data.email);
    setTimeout(() => console.log('this is benny again after 4 seconds'), 4000);
    console.log('testing dumb api example console');
  } catch (error) {
    console.log(error);
  }
}

getWeather();

const nums = [1, 2, 4, 5, 6, 7, 8, 9];

function multiply(value: any) {
  return value + 2;
}
console.log(nums.map(multiply) + 'benny');

console.log(nums.map);

function callback(arr: any) {
  return arr + ' benny is here counting ';
}

const newNums = nums.map(callback);
console.log(newNums);

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles);

const kvArray = [
  { first: 'benny', last: 'mendoza' },
  { first: 'sarah', last: 'maddock' },
  { first: 'billie', last: 'bobby' },
];

console.log(kvArray);
const reformattedArray = kvArray.map(({ first, last }) => ({ [first]: last }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
