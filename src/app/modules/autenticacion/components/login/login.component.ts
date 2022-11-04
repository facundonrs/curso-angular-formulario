import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
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
        private router: Router,
        private sessionService: SessionService
    ) { }

    ngOnInit(): void {
    }

    login(){

        this.sessionService.login(this.formulario.value.username, this.formulario.value.password).subscribe(
            (resp) => {
                if (resp && resp.length == 1) {
                    //hago esto aca porque en mockapi no pude obtener por 2 campos
                    if(resp[0].username == this.formulario.value.username && resp[0].password == this.formulario.value.password){
                        console.log('si', resp)
                        //localStorage.setItem('usuario', JSON.stringify(resp));
                        this.sessionService.session = {
                            sesionActiva: true,
                            usuarioActivo: resp[0]
                        }
                        this.router.navigate(['inicio']); 
                    }else{
                        console.log('no autorizado 2');
                    }
                }else{
                    console.log('no autorizado');
                }
            }
        );
    }

    

}
