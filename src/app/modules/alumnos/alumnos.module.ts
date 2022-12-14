import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AlumnosPageComponent } from './components/alumnos-page/alumnos-page.component';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './state/alumnos.effects';
import { StoreModule } from '@ngrx/store';
import { alumnosFeatureKey, reducer } from './state/alumnos.reducer';
import { VerMisDatosComponent } from './components/ver-mis-datos/ver-mis-datos.component';

@NgModule({
  declarations: [
    AbmAlumnosComponent,
    ListadoAlumnosComponent,
    FormularioComponent,
    AlumnosPageComponent,
    CrearAlumnosComponent,
    EditarAlumnosComponent,
    VerMisDatosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature(alumnosFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
})
export class AlumnosModule { }
