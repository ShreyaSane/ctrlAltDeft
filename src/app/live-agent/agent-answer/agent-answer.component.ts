import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-answer',
  templateUrl: './agent-answer.component.html',
  styleUrls: ['./agent-answer.component.css']
})
export class AgentAnswerComponent implements OnInit {

  constructor() { }
  @Input() inputValue: any[];
  ngOnInit(): void {
  }

}
