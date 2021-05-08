import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Virtual Store';
/*
  // 26. Servicio - Información de la página
  constructor( public infoPage: InfoPaginaService,
               public prodsSrv: ProductosService ) {
  // constructor() {
    // console.log( "app.component.ts -> infoPage.infoSite:");
    console.log( 'app.component.ts:' );
    console.log( 'infoPage.infoSite:', infoPage.infoSite );
    console.log( 'prodsSrv.prods:', prodsSrv.prods );
  }
  */
}
