import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent {
  @ViewChild('editor') editor!: any;

  constructor() {
  }

  cancella() {
  }
}
