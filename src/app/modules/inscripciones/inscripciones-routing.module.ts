import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesPageComponent } from './components/inscripciones-page/inscripciones-page.component';


const routes: Routes = [
    { path: '', component: InscripcionesPageComponent, 
    //   children: [
    //     { path: 'crear', component: CrearCursosComponent, canActivate: [AdminGuard] },
    //     { path: 'editar', component: EditarCursosComponent, canActivate: [AdminGuard] },
    //     { path: 'listado', component: ListadoCursosComponent },
    //     { path: '', redirectTo: 'listado', pathMatch: 'full'},
    //   ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
