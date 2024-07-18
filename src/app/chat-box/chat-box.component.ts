import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserMsgComponent } from './user-msg/user-msg.component';
import { SystemReplyComponent } from './system-reply/system-reply.component';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  inputValue: string = '';


  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  ngOnInit(): void {
  }

  createComponent(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserMsgComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    componentRef.instance.inputValue = this.inputValue; // Pass the textarea value to the dynamic component
    this.createReplyComponent();
  }

  createReplyComponent(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SystemReplyComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    componentRef.instance.inputValue = "--REPLY--"; // Pass the textarea value to the dynamic component
    
  }


}
