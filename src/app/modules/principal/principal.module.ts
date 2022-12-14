import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesModule } from '../inscripciones/inscripciones.module';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesModule
  ]
})
export class PrincipalModule { }
