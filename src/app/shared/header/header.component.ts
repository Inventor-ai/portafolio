import { Component, OnInit } from '@angular/core';
// 48. Creando la página de búsqueda - Importando Router
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPage: InfoPaginaService,
  // 48. Creando la página de búsqueda - Inyectando Router
               private router: Router ) {
    // console.log('HeaderComponent: ' );
    // console.log('infoSite: ', infoPage.infoSite );
    // console.log('equipo:   ', infoPage.equipo );
  }

  ngOnInit(): void {
  }

  // 48. Creando la página de búsqueda
  //     Recibe termino de búsqueda y
  //     redirecciona a la página de búsqueda
  buscarProducto( strBuscar: string) {
    if (strBuscar.length < 1) {
        return;
    }
    console.log(strBuscar);
    // this.router.navigateByUrl(`search/${strBuscar}`); // Own Works
    this.router.navigate(['search/', strBuscar]);
  }

}
