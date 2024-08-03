import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { HistorialComponent } from './historial/historial.component';
import { MovimientoMercanciaComponent } from './movimiento-mercancia/movimiento-mercancia.component';


@NgModule({
  declarations: [
    InicioComponent,
    HistorialComponent,
    MovimientoMercanciaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    InicioComponent,
    HistorialComponent,
    MovimientoMercanciaComponent
  ]
})
export class PagesModule { }
