import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public prodsSrv: ProductosService ) {
    // console.log('PortafolioComponent -> prodsSrv');
    // console.log( prodsSrv.prods );
  }

  ngOnInit(): void {
  }

}
