import { Component, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/mesage.model';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent {
  currentMessage: string = '';
  messageList: Message[] = [];
  constructor() {
  }

  cancella() {
  }

  // FIX ME -- spostare in un servizio
  sendMessage() {
    if (this.currentMessage.length)
      this.messageList.push({
        userName: 'Io',
        messageText: this.currentMessage
      });
    this.currentMessage = '';
  }
}
