import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPage: InfoPaginaService ) {
    // console.log('HeaderComponent: ' );
    // console.log('infoSite: ', infoPage.infoSite );
    // console.log('equipo:   ', infoPage.equipo );
  }

  ngOnInit(): void {
  }

}
