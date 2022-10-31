import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalModule } from './modules/principal/principal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    CursosModule,
    AlumnosModule,
    PrincipalModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
