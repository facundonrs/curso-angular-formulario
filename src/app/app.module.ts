import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalModule } from './modules/principal/principal.module';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreModule.forRoot({}, {}), 
    EffectsModule.forRoot([]), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
