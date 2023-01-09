import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit{
  constructor() {}
  compra: any
  compra1: any
  compra2: any
  compra3: any
  compra4: any
  compra5: any
  compra6: any
  compra7: any
  
ti1:any
ti2: any 
ti3: any 
ti4: any
ti5:any 
ti6: any
ti7: any
ti8: any
  ngOnInit(): void {
    this.recuperar()
  }

  recuperar(){
    this.compra=localStorage.getItem('compra')
    this.compra1=localStorage.getItem('compra1')
    this.compra2=localStorage.getItem('compra2')
    this.compra3=localStorage.getItem('compra3')
    this.compra4=localStorage.getItem('compra4')
    this.compra5=localStorage.getItem('compra5')
    this.compra6=localStorage.getItem('compra6')
    this.compra7=localStorage.getItem('compra7')
    this.ti1=localStorage.getItem('ti1')
    this.ti2=localStorage.getItem('ti2')
    this.ti3=localStorage.getItem('ti3')
    this.ti4=localStorage.getItem('ti4')
    this.ti5=localStorage.getItem('ti5')
    this.ti6=localStorage.getItem('ti6')
    this.ti7=localStorage.getItem('ti7')
    this.ti8=localStorage.getItem('ti8')

  }

}
