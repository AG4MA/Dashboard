import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Message, MessageInterface } from '../models/mesage.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private team!: Team[];
  private messageList: Message[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getTeam() {
    return of(
      this.team = [
        {
          cognome: 'Rossi',
          nome: 'Mario'
        },
        {
          cognome: 'Verdi',
          nome: 'Giuseppe'
        },
        {
          cognome: 'Rossi',
          nome: 'Mario'
        },
        {
          cognome: 'Rossi',
          nome: 'Mario'
        }
      ]
    )
      .pipe(map((teamRes: any) => {
        return teamRes;
      }));
  }

  getMessageList() {
    return of(
      this.messageList = [
        {
          userName: 'Alessandro',
          messageText: 'Ciao questa è una prova'
        },
        {
          userName: 'Michele',
          messageText: 'Sembra fighissimo'
        },
      ]
    )
      .pipe(
        map((messagesRes: MessageInterface[]) => messagesRes.map(msg => new Message(msg)))
      );
  }

  sendMessage(msg: Message) {
    this.messageList.push(msg);
    return of(this.messageList)
      .pipe(
        map((messagesRes: MessageInterface[]) => messagesRes.map(msg => new Message(msg)))
      );
  }
}
