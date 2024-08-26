import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = "";
  user: string = "";
  receivedMessages: string[] = [];

  constructor(private signalRService: SignalRService) { }
  
  ngOnInit(): void {
    this.signalRService.currentMessage.subscribe(message => {
      if (message) {
        this.receivedMessages.push(message);
      }
    }); 
  }

  sendMessage(): void {
    this.signalRService.sendMessage(this.user, this.message);
    this.message = '';
  }
}
