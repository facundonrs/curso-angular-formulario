import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SessionState } from 'src/app/core/state/session.reducer';
import { selectSessionActiva } from 'src/app/core/state/session.selectors';
import { Alumno } from 'src/app/models/alumno';
import { ISession } from 'src/app/models/session';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    public usuarioActivo!: Alumno;
    public sessionSubscription!: Subscription;

    constructor(
        private router: Router,
        private storeSession: Store<SessionState>,
    ) { }

    ngOnInit(): void {
        /*busco al usuario activo */
        this.sessionSubscription =
            this.storeSession.select(selectSessionActiva).subscribe((session: ISession) => {
                this.usuarioActivo = session.usuarioActivo!
            });
    }

    public verCursos() {
        this.router.navigate(['cursos']);
    }

    public verAlumnos() {
        this.router.navigate(['alumnos']);
    }

    public verMisDatos() {
        //this.router.navigate(['mis-datos']);
        this.router.navigate(['alumnos/editar', this.usuarioActivo]);
    }

    public verInscripciones() {
        this.router.navigate(['inscripciones']);
    }
}
