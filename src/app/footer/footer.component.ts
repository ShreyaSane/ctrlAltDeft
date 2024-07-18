import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showChatbox = false;
  constructor() { }

  ngOnInit(): void {
  }
  showChatBox(){
    this.showChatbox = true;
  }

}
