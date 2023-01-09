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
pre1:any =22
pre2:any =30
pre3:any =14
pre4:any =27
pre5:any =16
pre6:any =32
pre7:any =25
pre8:any =21
m1:any
m2:any
m3:any
m4:any
m5:any
m6:any
m7:any
m8:any
total:number=0
su:number=0


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
facturar(){
  console.log(this.pre1)
  console.log(this.pre2)
  console.log(this.pre3)
  console.log(this.pre4)
  console.log(this.pre5)
  console.log(this.pre6)
  console.log(this.pre7)
  console.log(this.pre8)
  console.log(this.m1)
    console.log(this.m2)
    console.log(this.m3)
    console.log(this.m4)
    console.log(this.m5)
    console.log(this.m6)
    console.log(this.m7)
    console.log(this.m8)
    console.log(this.total)
    console.log(this.su)


  if(this.compra>=1){
    this.su=(this.compra * this.pre8)
  this.pre1= this.ti1 + this.su
  this.total=this.total+this.su
  }else{
    this.m1= " "
  this.total=this.total+0
  }
  if(this.compra1>=1){
   this.su= (this.compra1 * this.pre1)
    this.m2= this.ti2 + this.su
    this.total=this.total+this.su
    }else{
      this.m1= " "
      this.su=0
    }
    if(this.compra2>=1){
      this.su=(this.compra3* this.pre2)
      this.m3= this.ti3 + this.su
      this.total=this.total+this.su
    }
     else{
        this.m1= " "
        this.total=this.total+0

      }
      if(this.compra3>=1){
        this.su=(this.compra3 * this.pre3)
        this.m4= this.ti4 + this.su
        this.total=this.total+this.su
        }else{
          this.m1= " "
          this.total=this.total+0

        }
        if(this.compra4>=1){
          this.su=(this.compra4 * this.pre4)
          this.m5= this.ti5 + this.su
          this.total=this.total+this.su
          }else{
            this.m1= " "
            this.total=this.total+0

          }
          if(this.compra5>=1){
            this.su=(this.compra5 * this.pre5)
            this.m6= this.ti6 + this.su
            this.total=this.total+this.su
            }else{
              this.total=this.total+0

              this.m1= " "
            }
            if(this.compra6>=1){
              this.su=( this.compra6 * this.pre6)
              this.m7= this.ti7 + this.su
              this.total=this.total+this.su
              }else{
                this.m1= " "
                this.total=this.total+0

              }
              if(this.compra7>=1){
                this.su=(this.compra7 * this.pre7)
                this.m8= this.ti8 + this.su
                this.total=this.total+this.su
                }else{
                  this.m1= " "
                  this.total=this.total+0

                }

                
}
}

