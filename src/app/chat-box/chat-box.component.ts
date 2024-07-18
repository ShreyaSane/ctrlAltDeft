import { Component, ComponentFactoryResolver, Injectable, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserMsgComponent } from './user-msg/user-msg.component';
import { SystemReplyComponent } from './system-reply/system-reply.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})

@Injectable()
export class ChatBoxComponent implements OnInit {

  inputValue: string = '';


  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  
  constructor( private http: HttpClient, private componentFactoryResolver: ComponentFactoryResolver) {
   
   }
  
  ngOnInit(): void {
  }

  createComponent(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserMsgComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    componentRef.instance.inputValue = this.inputValue; // Pass the textarea value to the dynamic component
    this.fetchDataFromApi();
  }


  createReplyComponent(replyData){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SystemReplyComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    
    componentRef.instance.inputValue = JSON.stringify(replyData); // Pass the textarea value to the dynamic component
    
  }


  fetchDataFromApi() {
    this.http.get<any>('http://localhost:8080/FAQs?question=what%20is%20this&patient%20Id=1234')
      .subscribe(data => {
        console.log(data);
        this.createReplyComponent(data),
        error => this.createReplyComponent("EROR occoured");
      });
  }


}
