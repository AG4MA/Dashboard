import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private team!: Team[];

  constructor() { }

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
}
