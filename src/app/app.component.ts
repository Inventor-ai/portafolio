import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Virtual Store';

  // 26. Servicio - Información de la página
  constructor ( public infoPage: InfoPaginaService ) {
    console.log( "app.component.ts -> infoPage.infoSite:");
    console.log( infoPage.infoSite );
  }
}
