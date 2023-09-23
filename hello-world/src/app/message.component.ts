import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './message.component.html',
  styleUrls: ['./app.component.css'],
})
export class MessageComponent implements OnInit {
  messageToShow: string = ''; // Initialize an empty message
  fetch: string = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.messageToShow = 'This is the delayed message after 2 seconds!';
    }, 2000); // 1000 milliseconds = 1 second
    setTimeout(() => {
      this.fetch = 'This will show up after 4 seconds';
    }, 4000);
  }
}
