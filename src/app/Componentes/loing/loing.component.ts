import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loing',
  templateUrl: './loing.component.html',
  styleUrls: ['./loing.component.css']
})
export class LoingComponent implements OnInit {



  constructor(private router:Router){
  }
  ngOnInit(): void {
    localStorage.clear();
  }

  almacenar(){
      }

  navegacionreg()
  {
    this.router.navigate(['registrar'])
  }
  navegacioning()
  {
    this.router.navigate(['ingresar'])
  }
}
