import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // 27. Crear interfaz para controlar la información de la página
  // infoSite: any = {}; // Cambia esta definición
  public infoSite: infoPagina;  // Por la definición de la interfaz.
  public equipo: any[] = [];
  loaded = false;

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // console.log("Infopágina");
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
         .subscribe(
            (resp: infoPagina ) => {
               // console.log(resp);
               this.infoSite = resp;
               this.loaded = true;
            }
         );
  }

  // 33. Carga de la información de Firebase a nuestra página
  private cargarEquipo() {
    const dataURL = 'https://angular-html-67a81-default-rtdb.firebaseio.com/equipo.json';
    this.http.get(dataURL)
        .subscribe (
          (resp: any) => {
            this.equipo = resp;
            // console.log(resp);
          }
        );
  }

}
