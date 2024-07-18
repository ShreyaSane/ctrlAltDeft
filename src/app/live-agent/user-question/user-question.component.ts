import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.css']
})
export class UserQuestionComponent implements OnInit {

  @Input() inputValue: string;

  ngOnInit(): void {
  }

}
