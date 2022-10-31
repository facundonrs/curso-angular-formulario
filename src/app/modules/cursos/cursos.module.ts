import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosPageComponent } from './components/cursos-page/cursos-page.component';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';


@NgModule({
  declarations: [
    ListadoCursosComponent,
    CursosPageComponent,
    CrearCursosComponent,
    EditarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
})
export class CursosModule { }
