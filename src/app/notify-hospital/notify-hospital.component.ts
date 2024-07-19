import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notify-hospital',
  templateUrl: './notify-hospital.component.html',
  styleUrls: ['./notify-hospital.component.css']
})
export class NotifyHospitalComponent implements OnInit {
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log("sending");
    this.notifyParent.emit('Hello from Child!');
  }

}
