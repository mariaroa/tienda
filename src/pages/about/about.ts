import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  productosTop:Producto[] =[];

  constructor(
    public navCtrl: NavController,
    private servicioProductos: ProductoProvider )
    {

  }
  ionViewDidLoad(){
    this.servicioProductos.obtenerProductos().subscribe(
      (datos: Producto[]) => {
        this.productosTop = datos.filter(p => p.bestSeller ==true );
      }
    );
  }

}
