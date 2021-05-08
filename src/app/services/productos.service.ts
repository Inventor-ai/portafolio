import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  prods: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos() {
    // this.http.get('https://angular-html-67a81-default-rtdb.firebaseio.com/productos.json')
    this.http.get('https://angular-html-67a81-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[] ) => {
           this.prods = resp;
           this.loading = false;
/*
           // Líneas de desarrollo / prueba
           console.log('cargarProductos:', this.prods);
           setTimeout(() => {
             this.loading = false;
           }, 2000);
*/
        });
  }

}
