import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  prods: Producto[] = [];
  // 49. Diseño y filtro de la página de búsqueda - Propiedad
  prodFiltrados: Producto[] = [];
  // const URL = 'https://angular-html-67a81-default-rtdb.firebaseio.com/productos/prod-4';
  // private const URL = 'https://angular-html-67a81-default-rtdb.firebaseio.com/productos';

  constructor( private http: HttpClient ) {
    // this.cargarProductos();
   }

  cargarProductos() {
    // 50. Lógica del proceso de carga y filtro
    return new Promise<void>( ( resolve, reject ) => {
      this.loading = true;
      this.http.get('https://angular-html-67a81-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe( (resp: Producto[] ) => {
             this.prods = resp;
             this.loading = false;
            //  console.log('cargarProductos:', this.prods);
  /*
             // Líneas de desarrollo / prueba
             console.log('cargarProductos:', this.prods);
             setTimeout(() => {
               this.loading = false;
             }, 3000);
  */
             resolve();
          });
    });
  }
/*
  // 45. Servicio para obtener el producto
  getProductoOwn(id: string) {
    const URL = 'https://angular-html-67a81-default-rtdb.firebaseio.com/productos';
    // console.log( 'ProductosService -getProducto:', id);
    this.http.get(`${URL}/${id}.json`) // My Own expresion
        .subscribe( (resp: any ) => {
           console.log( resp );
        });
  }
*/
  getProducto(id: string) {
    return this.http.get(`https://angular-html-67a81-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  // 49. Diseño y filtro de la página de búsqueda - Método
  buscarProducto(termino: string) {
    // console.log('ProductosService:buscarProducto:', termino);
    if ( this.prods.length === 0 ) {
         // Esperar que estén cargados los productos
         this.cargarProductos().then(
           () => {  // callback: Se ejecuta después de cargar prods.
             this.filtrarProductos(termino); // Ejecuta filtro
           }
         );
    } else { // Si ya están cargados los datos aplicar el filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    termino = termino.toLocaleLowerCase();
    this.prodFiltrados = [];
    this.prods.forEach( prd => {
      const tituloLower = prd.titulo.toLocaleLowerCase();
      if ( prd.categoria.indexOf( termino ) >= 0 ||
           tituloLower.indexOf( termino ) >= 0 ) {
           this.prodFiltrados.push( prd );
      }
    });
    // Investigar y probar con el método: filter
    // this.prodFiltrados = this.prods
    //                           .filter ( prod => {
    //                             return true;
    //                           });
    // console.log('filtrarProductos (prods): ', termino);
    // console.log(this.prods);
    // console.log('filtrarProductos (prodFiltrados): ', termino);
    // console.log(this.prodFiltrados);
  }
}
