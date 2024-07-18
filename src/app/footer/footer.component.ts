import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('slideUp', [
      state('hidden', style({
        bottom: '-100px'  // Position outside the view
      })),
      state('visible', style({
        bottom: '0px'  // Position inside the view, but at the bottom
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
      transition('visible => hidden', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
  state = 'hidden';
  showChatbox = false;
  constructor() { }

  ngOnInit(): void {
  }
  showChatBox(){
    this.showChatbox = true;
  }

  toggleSlide() {
    this.state = this.state === 'hidden' ? 'visible' : 'hidden';
    this.showChatbox = true;
  }
  onNotify(message: string) {
    console.log("received..");
    this.showChatbox = false;
  }

}
