import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( public infoPage: InfoPaginaService  ) { 
    // console.log('FooterComponent');
    // console.log('infoSite:', infoPage.infoSite);
    // console.log('equipo:', infoPage.equipo);
  }

  ngOnInit(): void {
  }

}
