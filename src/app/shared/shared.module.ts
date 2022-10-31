import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TituloStyleDirective } from './directives/titulo-style.directive';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NombreCompletoPipe,
    TituloStyleDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    NombreCompletoPipe,
    TituloStyleDirective,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
