import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/mesage.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {
  currentMessage: string = '';
  messageList: Message[] = [];
  constructor(
    private readonly teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.getMessages();
  }

  cancella() {
  }

  // FIX ME -- spostare in un servizio
  sendMessage() {
    if (this.currentMessage.length)
      this.teamService.sendMessage(new Message({
        userName: 'Io',
        messageText: this.currentMessage,
        fromBackend: false
      }))
        .subscribe({
          next: (messages: Message[]) => {
            this.messageList = messages;
            console.log(this.messageList);
            console.log(this.messageList.length);
            this.currentMessage = '';
            setTimeout(() => {
              const htmlMessages = document.getElementsByClassName('message');

              console.log(this.messageList.length);
              console.log(htmlMessages.length);

              if (htmlMessages.length === this.messageList.length) htmlMessages[this.messageList.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);

          },
          error: (e) => {
            console.log(e);
          }
        });

  }

  getMessages() {
    this.teamService.getMessageList()
      .subscribe({
        next: (messages: Message[]) => {
          this.messageList = messages;
          console.log(this.messageList);
        },
        error: (e) => {
          console.log(e);

        }
      });
  }
}
