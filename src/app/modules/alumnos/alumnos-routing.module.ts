import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AlumnosPageComponent } from './components/alumnos-page/alumnos-page.component';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { VerMisDatosComponent } from './components/ver-mis-datos/ver-mis-datos.component';

const routes: Routes = [
    { path: '',
      //canActivateChild: [AdminGuard],
      component: AlumnosPageComponent, 
      children: [
        { path: 'crear', component: CrearAlumnosComponent, canActivate: [AdminGuard]},
        { path: 'editar', component: EditarAlumnosComponent},
        { path: 'listado', component: ListadoAlumnosComponent, canActivate: [AdminGuard]},
        { path: 'mis-datos', component: VerMisDatosComponent },
        { path: '', redirectTo: 'listado', pathMatch: 'full'},
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class    AlumnosRoutingModule { }
