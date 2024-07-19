import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

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

  private _booleanValue: boolean;

  @Input()
  set booleanValueFromParent(value: boolean) {
    this._booleanValue = value;
    if(this._booleanValue == true)
    {
      console.log("efwef");
      this.showChatbox = true;
    }
    // You can perform additional logic here if needed
  }

  get booleanValueFromParent(): boolean {
    return this._booleanValue;
  }


  
onNotifyNF() {
  console.log("received..");
  this.showNF = false;
}
  state = 'hidden';
  showChatbox = false;
  showFamilyContact =false;
  showNF = false;
  constructor() { }

  ngOnInit(): void {
  }
  showChatBox(){
    this.showChatbox = true;
  }    

  showFamilyContact1(){
    this.showFamilyContact = true;
  }
  showNF1(){
    this.showNF = true;
  }

  toggleSlide() {
    this.state = this.state === 'hidden' ? 'visible' : 'hidden';
    this.showChatbox = true;
  }
  
  onNotify(message: string) {
    console.log("received..");
    this.showChatbox = false;
  }

  toggleFamilyContact() {
    this.state = this.state === 'hidden' ? 'visible' : 'hidden'; 
    this.showFamilyContact = true;
  }

  onNotifyFromFamilyContact() {
    console.log("received..");
    this.showFamilyContact = false;
  }

  toggleNF(){
    this.state = this.state === 'hidden' ? 'visible' : 'hidden'; 
    this.showNF = true;
  }


}
