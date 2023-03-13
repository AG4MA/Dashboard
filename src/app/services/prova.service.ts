import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProvaService {
  miohttp = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  callHttp() {
    this.http.get(this.miohttp + "ciao")
      .subscribe(dati => {
        console.log(dati);
      });
  }

}
