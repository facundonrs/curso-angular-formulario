import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SessionState } from 'src/app/core/state/session.reducer';
import { selectSessionActiva } from 'src/app/core/state/session.selectors';
import { Alumno } from 'src/app/models/alumno';
import { ISession } from 'src/app/models/session';
import { AlumnoState } from '../../state/alumnos.reducer';

@Component({
    selector: 'app-ver-mis-datos',
    templateUrl: './ver-mis-datos.component.html',
    styleUrls: ['./ver-mis-datos.component.css']
})
export class VerMisDatosComponent implements OnInit {

    public usuarioActivo!: Alumno;
    public sessionSubscription!: Subscription;

    constructor(
        private storeAlumnos: Store<AlumnoState>,
        private storeSession: Store<SessionState>,
    ) { }

    ngOnInit(): void {
        /*busco al usuario activo */
        this.sessionSubscription =
            this.storeSession.select(selectSessionActiva).subscribe((session: ISession) => {
                this.usuarioActivo = session.usuarioActivo!
            });
    }

    ngOnDestroy(): void {
        if(this.sessionSubscription) this.sessionSubscription.unsubscribe();
        
    }

}
