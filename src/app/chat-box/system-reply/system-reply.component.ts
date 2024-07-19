import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-reply',
  templateUrl: './system-reply.component.html',
  styleUrls: ['./system-reply.component.css']
})
export class SystemReplyComponent implements OnInit {

  constructor() { }
  @Input() inputValue: any[];
  ngOnInit(): void {
  }

}
