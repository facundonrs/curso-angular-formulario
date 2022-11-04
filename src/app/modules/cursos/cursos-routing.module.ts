import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { CursosPageComponent } from './components/cursos-page/cursos-page.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';

const routes: Routes = [
    { path: '', component: CursosPageComponent, children: [
        { path: 'crear', component: CrearCursosComponent },
        { path: 'editar', component: EditarCursosComponent },
        { path: 'listado', component: ListadoCursosComponent },
        { path: '', redirectTo: 'listado', pathMatch: 'full'},
      ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
