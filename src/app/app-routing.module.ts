import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './Componentes/car/car.component';
import { FacturaComponent } from './Componentes/factura/factura.component';
import { LoingComponent } from './Componentes/loing/loing.component';
import { PaginaComponent } from './Componentes/pagina/pagina.component';
import { TiendaComponent } from './Componentes/tienda/tienda.component';
import { UsuComponent } from './Componentes/usu/usu.component';

const routes: Routes = [
{
  path: 'error', component: UsuComponent
},
{
  path:'tienda', component: TiendaComponent
},
{
  path: 'ingresar', component: LoingComponent
},
{
  path: 'facturar', component: CarComponent
},
{
  path: 'comprar', component: FacturaComponent
}
];


@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
