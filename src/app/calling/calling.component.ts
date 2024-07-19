import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.css']
})
export class CallingComponent implements OnInit {

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  closeCall() {
    console.log("sending");
    this.notifyParent.emit('Hello from Child!');
  }

}
