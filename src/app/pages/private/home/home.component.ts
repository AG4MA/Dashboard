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
  columnsModificheRecenti = ['date', 'responsabili', 'variazioni', 'totale'];
  columnsUltimiAggiornamenti = ['caso', 'stato'];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    // TO DO -- aggiungere caricamento
    this.getData();
    // this.getUltimiAggiornamenti();
  }

  getData() {
    this.homeService.getModificheRecenti$().subscribe({
      next: (modificheRes: any) => {
        this.modificheRecenti = this.homeService.getModificheRecenti();
        this.ultimiAggiornamenti = this.homeService.getUltimiAggiornamenti();
      },
      error: (e) => {
        console.log(e);
        // TO DO -- mostrare errore all'utente
      }
    });
  }

}
