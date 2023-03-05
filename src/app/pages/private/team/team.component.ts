import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team!: Team[];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  moreInfo(membroTeam: Team) {
    console.log(`more info on ${membroTeam.cognome}`);
  }

  getTeam() {
    this.teamService.getTeam().subscribe({
      next: (teamRes: Team[]) => {
        this.team = teamRes;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
