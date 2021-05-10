import { Component, OnInit } from '@angular/core';
  // 49. Diseño y filtro de la página de búsqueda
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // 49. Diseño y filtro de la página de búsqueda
  // Creando la propiedad termino
  termino = '';
  // Inyectando el ActivatedRoute
  constructor( private activatedRoute: ActivatedRoute,
  // Inyectando el ProductosService
               public prodsSrv: ProductosService) { }

  ngOnInit(): void {
    // 49. Diseño y filtro de la página de búsqueda
    // Leyendo el termino del URL
    this.prodsSrv.cargarProductos();
    this.activatedRoute.params
        .subscribe(
           parametros => {
            // console.log(parametros.termino);
            this.termino = parametros.termino;
            this.prodsSrv.buscarProducto(this.termino);
          }
        );
  }
}
