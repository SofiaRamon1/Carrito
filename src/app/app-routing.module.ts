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
  path: 'registrar', component: UsuComponent
},
{
  path:'ingresar', component: TiendaComponent
},
{
  path: 'guardado', component: LoingComponent
}
];


@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
