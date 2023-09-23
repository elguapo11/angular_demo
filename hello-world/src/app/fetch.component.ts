import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fetch.component.html',
  styleUrls: ['./app.component.css'],
})
export class Fetch implements OnInit {
  fetch: string = 'Benny has a site';
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.fetch = 'new message!';
    }, 0); // 1000 milliseconds = 1 second
  }
}

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
