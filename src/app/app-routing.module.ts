import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { InicioComponent } from './modules/principal/inicio/inicio.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent, canActivate: [AutenticacionGuard] },
    //{ path: 'autenticacion', component: InicioComponent, canActivate: [AutenticacionGuard] },
    { 
        path: 'autenticacion',
        loadChildren: () => import('./modules/autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)
    },
    { 
        path: 'cursos',
        loadChildren: () => import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
        canActivate: [AutenticacionGuard]
    },
    { 
        path: 'alumnos',
        loadChildren: () => import('./modules/alumnos/alumnos.module').then((m) => m.AlumnosModule),
        canActivate: [AutenticacionGuard]
    },
    { path: '', redirectTo: 'autenticacion', pathMatch: 'full'},
    // { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
