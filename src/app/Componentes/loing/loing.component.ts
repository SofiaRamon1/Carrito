import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loing',
  templateUrl: './loing.component.html',
  styleUrls: ['./loing.component.css']
})
export class LoingComponent implements OnInit {
nombre:any
correo:any
contrasena: any

  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  datos(){

  }

  navegacion(){
console.log(this.correo)
console.log(this.contrasena)
if(this.correo='Lilian' && this.contrasena=='lilian.ramonl.est@gmail.com'){
  this.router.navigate(['tienda'])
}else{
  this.router.navigate(['error'])
}
  }
  


}
