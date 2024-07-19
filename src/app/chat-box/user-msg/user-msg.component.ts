import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.css']
})
export class UserMsgComponent implements OnInit {

  @Input() inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
