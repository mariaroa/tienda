import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos: Producto[] = [];
  constructor(
    public navCtrl: NavController,
    private servicioProductos:ProductoProvider
    
    ) {
  }
  ionViewDidLoad(){
    this.servicioProductos.obtenerProductos().subscribe(
      (datos: any[])=>{
        this.productos=datos;
      }
    );
  }
  irPaginaDetalle(producto){
    this.navCtrl.push('DetalleProductoPage', {
      productoDetalle: producto
    });
  }
}
