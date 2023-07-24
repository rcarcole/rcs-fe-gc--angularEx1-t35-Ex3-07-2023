import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-art',
  templateUrl: './admin-art.component.html',
  styleUrls: ['./admin-art.component.css']
})
export class AdminArtComponent {
  articulos = [
    {
      codigo: 1,
      descripcion: 'Papas',
      precio: 10.55,
      borrar: false,
      seleccionar: false
    },
    {
      codigo: 2,
      descripcion: 'manzanas',
      precio: 12.1,
      borrar: false,
      seleccionar: false
    },
    {
      codigo: 3,
      descripcion: 'melon',
      precio: 52.3,
      borrar: false,
      seleccionar: false
    }
  ];
  codigo: number = 0;
  descripcion: string = '';
  precio: number = 0;

  borrar(articulo: any) {
    this.articulos.splice(this.articulos.indexOf(articulo), 1);
  }

  seleccionar(articulo: any) {
    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }
  

  agregar() {
    this.articulos.push({
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio,
      borrar: false,
      seleccionar: false
    });
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  modificar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.codigo == this.articulos[i].codigo) {
        this.articulos[i].codigo = this.codigo;
        this.articulos[i].descripcion = this.descripcion;
        this.articulos[i].precio = this.precio;
      }
    }
  }

  constructor() { }
}
