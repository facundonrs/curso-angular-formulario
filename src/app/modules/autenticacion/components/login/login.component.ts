import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SessionService } from 'src/app/core/services/session.service';
import { loginSession } from 'src/app/core/state/session.actions';
import { SessionState } from 'src/app/core/state/session.reducer';
import { Alumno } from 'src/app/models/alumno';
import { IUsuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public formulario = this.fb.group({
        username: ['', [Validators.required ]],
        password: ['', [Validators.required ]],
    });

    constructor(
        private fb: FormBuilder,
        private storeSession: Store<SessionState>,
    ) { }

    ngOnInit(): void {
    }

    public login(){
        // const usuario: IUsuario = {
        //     username: this.formulario.value.username,
        //     password: this.formulario.value.password,
        //     admin: false
        // };
        const usuario: Alumno = {
            username: this.formulario.value.username,
            password: this.formulario.value.password,
            admin: false,
            nombre: '',
            apellido: '',
            dni: 0,
            fechaNacimiento: new Date(),
            paisId: 0,
            ciudadId: 0,
            email: '',
            celular: '',
            domicilio: ''
        };
        
        this.storeSession.dispatch(loginSession({ usuario }));
       
    }    

}
