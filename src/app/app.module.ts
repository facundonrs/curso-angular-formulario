import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { AbmAlumnosComponent } from './componentes/abm-alumnos/abm-alumnos.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TituloStyleDirective } from './directives/titulo-style.directive';
import { ListadoCursosComponent } from './componentes/listado-cursos/listado-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    ToolbarComponent,
    ListadoAlumnosComponent,
    AbmAlumnosComponent,
    NombreCompletoPipe,
    TituloStyleDirective,
    ListadoCursosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
