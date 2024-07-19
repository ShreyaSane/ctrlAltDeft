import { Component, ComponentFactoryResolver, Injectable, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserQuestionComponent } from './user-question/user-question.component';
import { SystemReplyComponent } from '../chat-box/system-reply/system-reply.component';
import { AgentAnswerComponent } from './agent-answer/agent-answer.component';
@Component({
  selector: 'app-live-agent',
  templateUrl: './live-agent.component.html',
  styleUrls: ['./live-agent.component.css']
})

@Injectable()
export class LiveAgentComponent implements OnInit {


  inputValue: string = '';


  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  
  constructor( private http: HttpClient, private componentFactoryResolver: ComponentFactoryResolver) {
   
   }
  
  ngOnInit(): void {
  }

  createComponent(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserQuestionComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    componentRef.instance.inputValue = this.inputValue; // Pass the textarea value to the dynamic component
    this.fetchDataFromApi();
  }


  createReplyComponent(replyData){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AgentAnswerComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    
    componentRef.instance.inputValue = replyData; // Pass the textarea value to the dynamic component
    
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
