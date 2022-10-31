import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { CursosPageComponent } from './components/cursos-page/cursos-page.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';

const routes: Routes = [
    { path: 'cursos', component: CursosPageComponent, children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full'},
        { path: 'crear', component: CrearCursosComponent },
        { path: 'editar', component: EditarCursosComponent },
        { path: 'listado', component: ListadoCursosComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
