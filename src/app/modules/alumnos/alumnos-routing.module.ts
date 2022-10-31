import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { AlumnosPageComponent } from './components/alumnos-page/alumnos-page.component';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';

const routes: Routes = [
    { path: 'alumnos', component: AlumnosPageComponent, children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full'},
        { path: 'crear', component: CrearAlumnosComponent },
        { path: 'editar', component: EditarAlumnosComponent },
        { path: 'listado', component: ListadoAlumnosComponent },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class    AlumnosRoutingModule { }
