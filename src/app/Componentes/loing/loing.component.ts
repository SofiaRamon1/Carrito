import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loing',
  templateUrl: './loing.component.html',
  styleUrls: ['./loing.component.css']
})
export class LoingComponent {

  constructor(private router:Router){}
  ngOnInit(): void {
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
