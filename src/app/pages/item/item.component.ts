import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // 46. Actualizando la página del producto
  prod: ProductoDescripcion;
  prodId: string;

  constructor( private route: ActivatedRoute,
               public prodServ: ProductosService ) {  }

  ngOnInit(): void {
    // console.log('this.prodServ.loading:', this.prodServ.loading);
    this.prodServ.loading = true;
    this.route.params
        .subscribe( parametros => {
          //  console.log('ItemComponent');
          //  console.log(parametros);       // Objeto
          //  console.log(parametros['id']); // Valor del objeto
           this.prodId = parametros['id'];
           this.prodServ.getProducto(this.prodId)
          //  this.prodServ.getProducto(parametros['id'])
               .subscribe ( (producto: ProductoDescripcion) => {
                  this.prodServ.loading = false;
                  this.prod = producto;
                  // console.log('ItemComponent->producto:');
                  // console.log(producto);
               });
        });
/*
    setTimeout(() => {
    this.route.params
        .subscribe( parametros => {
           //  console.log('ItemComponent');
           //  console.log(parametros);       // Objeto
           //  console.log(parametros['id']); // Valor del objeto
           this.prodServ.getProducto(parametros['id'])
               .subscribe ( (producto: ProductoDescripcion) => {
                  this.prodServ.loading = false;
                  console.log('ItemComponent->producto:');
                  console.log(producto);
                  console.log('this.prodServ.loading:', this.prodServ.loading);
               });
        });
    }, 1000);
    */
  }

}
