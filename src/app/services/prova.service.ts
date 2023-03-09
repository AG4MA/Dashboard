import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const miohttp = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class ProvaService {



  constructor(private http:HttpClient) { }



  callHttp() {
    this.http.get(miohttp + "ciao")
    .subscribe(dati  => {
      console.log(dati);
    });
  }

}