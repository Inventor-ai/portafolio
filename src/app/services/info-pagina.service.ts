import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // 27. Crear interfaz para controlar la información de la página  
  // infoSite: any = {}; // Cambia esta definición 
  infoSite: infoPagina;  // Por la definición de la interfaz.
  loaded  : boolean = false;

  constructor( private http: HttpClient ) { 
    console.log("Infopágina");
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
             .subscribe( 
               (resp: infoPagina ) => {
                  console.log(resp);
                  this.infoSite = resp;
                  this.loaded = true;
               }
             );
  }
}
