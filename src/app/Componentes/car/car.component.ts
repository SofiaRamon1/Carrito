import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  constructor(private router:Router) {}
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

m1:any
m2:any
m3:any
m4:any
m5:any
m6:any
m7:any
m8:any

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
  mostrar(){
    console.log(this.m1)
    console.log(this.m2)
    console.log(this.m3)
    console.log(this.m4)
    console.log(this.m5)
    console.log(this.m6)
    console.log(this.m7)
    console.log(this.m8)
    if(this.compra>=1){
    this.m1= this.ti1 + this.compra
    }else{
      this.m1= " "
    }
    if(this.compra1>=1){
      this.m2= this.ti2 + this.compra1
      }else{
        this.m1= " "
      }
      if(this.compra2>=1){
        this.m3= this.ti3 + this.compra3
        }else{
          this.m1= " "
        }
        if(this.compra3>=1){
          this.m4= this.ti4 + this.compra3
          }else{
            this.m1= " "
          }
          if(this.compra4>=1){
            this.m5= this.ti5 + this.compra4
            }else{
              this.m1= " "
            }
            if(this.compra5>=1){
              this.m6= this.ti6 + this.compra5
              }else{
                this.m1= " "
              }
              if(this.compra6>=1){
                this.m7= this.ti7 + this.compra6
                }else{
                  this.m1= " "
                }
                if(this.compra7>=1){
                  this.m8= this.ti8 + this.compra7
                  }else{
                    this.m1= " "
                  }

  }
  nav2(){
    this.router.navigate(['comprar'])
  }
}
