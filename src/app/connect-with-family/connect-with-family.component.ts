import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-connect-with-family',
  templateUrl: './connect-with-family.component.html',
  styleUrls: ['./connect-with-family.component.css']
})
export class ConnectWithFamilyComponent implements OnInit {

  
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log("sending");
    this.notifyParent.emit('Hello from Child!');
  }
}
