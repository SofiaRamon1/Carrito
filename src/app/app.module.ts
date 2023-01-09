import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoingComponent } from './Componentes/loing/loing.component';
import { TiendaComponent } from './Componentes/tienda/tienda.component';
import { CarComponent } from './Componentes/car/car.component';
import { UsuComponent } from './Componentes/usu/usu.component';
import { PaginaComponent } from './Componentes/pagina/pagina.component';
import { FacturaComponent } from './Componentes/factura/factura.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoingComponent,
    TiendaComponent,
    CarComponent,
    UsuComponent,
    PaginaComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
