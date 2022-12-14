import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesPageComponent } from './components/inscripciones-page/inscripciones-page.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { InscripcionesListadoComponent } from './components/inscripciones-listado/inscripciones-listado.component';



@NgModule({
  declarations: [
    InscripcionesPageComponent,
    InscripcionesListadoComponent,
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ],
  exports: [
    InscripcionesListadoComponent
  ]
})
export class InscripcionesModule { }
