import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  compra: any
  compra1: any
  compra2: any
  compra3: any
  compra4: any
  compra5: any
  compra6: any
  compra7: any
  
ti1:any="El principe del sol"
ti2: any ="Anhelo"
ti3: any ="En el bosque oscuro"
ti4: any="Viaje a la luna"
ti5:any = "El retrato de Dorian Gray"
ti6: any="Aquiles"
ti7: any= "laciudad de las sombras"
ti8: any ="Sombra y Huesos"


  er: any
  
  constructor(private router:Router){
  }
  ngOnInit(): void {}
nave2 (){
  this.router.navigate (['Facturar'])
}
almacenar (){
  localStorage.setItem('compra', this.compra.toString())
  localStorage.setItem('compra1', this.compra.toString())
  localStorage.setItem('compra2', this.compra.toString())
  localStorage.setItem('compra3', this.compra.toString())
  localStorage.setItem('compra4', this.compra.toString())
  localStorage.setItem('compra5', this.compra.toString())
  localStorage.setItem('compra6', this.compra.toString())
  localStorage.setItem('compra7', this.compra.toString())
  localStorage.setItem('ti1', this.ti1.toString())
  localStorage.setItem('ti2', this.ti1.toString())
  localStorage.setItem('ti3', this.ti1.toString())
  localStorage.setItem('ti4', this.ti1.toString())
  localStorage.setItem('ti5', this.ti1.toString())
  localStorage.setItem('ti6', this.ti1.toString())
  localStorage.setItem('ti7', this.ti1.toString())
  localStorage.setItem('ti8', this.ti1.toString())
}

}

