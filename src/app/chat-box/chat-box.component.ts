import { Component, ComponentFactoryResolver, EventEmitter, Injectable, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { UserMsgComponent } from './user-msg/user-msg.component';
import { SystemReplyComponent } from './system-reply/system-reply.component';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})

@Injectable()
export class ChatBoxComponent implements OnInit {
  question: string = '';
  private readonly patientId: number = 12;

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

sendMessage() {
  console.log("sending");
  this.notifyParent.emit('Hello from Child!');
}

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
    this.fetchDataFromApi(this.inputValue);
  }


  createReplyComponent(replyData){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SystemReplyComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // Optionally, you can pass inputs to the component here, using componentRef.instance.inputProperty = value;
    
    componentRef.instance.inputValue = replyData; // Pass the textarea value to the dynamic component
    
  }


  fetchDataFromApi(question: string) {

    const cleanedQuestion = question.replace(/\?/g, '');

    // Manually encode the cleaned question string
    const encodedQuestion = encodeURIComponent(cleanedQuestion);
    const completeURL = 'http://localhost:8080/FAQs?question='+encodedQuestion + '&patient%20Id=4';
    console.log(completeURL);
    let params = new HttpParams()
      .set('question', encodedQuestion)
      .set('patientId', this.patientId.toString());

    // Perform the GET request with query parameters
    this.http.get<any>(completeURL)
      .subscribe(
        data => {
          console.log(data);
          this.createReplyComponent(data);  // Handle the response data
        },
        error => {
          console.error('Error occurred:', error);
          this.createReplyComponent("Error occurred");  // Handle error
        }
      );
    

    // this.http.get<any>('http://localhost:8080/FAQs?question=?&patient=?')
      // .subscribe(data => {
      //   console.log(data);
      //   this.createReplyComponent(data),
      //   error => this.createReplyComponent("EROR occoured");
      // });
  }


}
