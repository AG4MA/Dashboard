import { Component, OnInit } from '@angular/core';
import { ModificaRecente } from 'src/app/models/modifica-recente.model';
import { UltimoAggiornamento } from 'src/app/models/ultimi-aggionamenti.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modificheRecenti!: ModificaRecente[];
  ultimiAggiornamenti!: UltimoAggiornamento[];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.modificheRecenti = this.homeService.getModificheRecenti();
    this.ultimiAggiornamenti = this.homeService.getUltimiAggiornamenti();
  }

}
