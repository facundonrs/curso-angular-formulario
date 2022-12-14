import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SessionState } from 'src/app/core/state/session.reducer';
import { selectSessionActiva } from 'src/app/core/state/session.selectors';
import { Alumno } from 'src/app/models/alumno';
import { ICiudad } from 'src/app/models/ciudad';
import { IPais } from 'src/app/models/pais';
import { ISession } from 'src/app/models/session';
import { PaisesService } from 'src/app/services/paises.service';
import { editarAlumno } from '../../state/alumnos.actions';
import { AlumnoState } from '../../state/alumnos.reducer';

@Component({
    selector: 'app-editar-alumnos',
    templateUrl: './editar-alumnos.component.html',
    styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {

    public id: number = 0;
    public resultado: any;

    public paises: IPais[] = [] // Datos.paises;

    public ciudades: ICiudad[] = [];

    public regExPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    public regExDNI: RegExp = /^[\d]{6,8}$/;
    public regExNombreApellido: RegExp = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]+$/
    public regExNumber: RegExp = /^[\d]+$/

    public usuarioActivo!: Alumno;
    public sessionSubscription!: Subscription;

    public edadValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            const fecha_nacimiento = new Date(control.value);
            const diferencia_milis = Date.now() - fecha_nacimiento.getTime();
            const diferencia = new Date(diferencia_milis);
            const edad = Math.abs(diferencia.getFullYear() - 1970);

            return (edad < 18) ? { edad: true } : null;
        };
    }

    public formulario = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(this.regExNombreApellido)]],
        apellido: ['', [Validators.required, Validators.pattern(this.regExNombreApellido)]],
        dni: ['', [Validators.required, Validators.pattern(this.regExDNI)]],
        fecha_nacimiento: ['', [Validators.required, this.edadValidator()]],
        pais: ['', [Validators.required]],
        ciudad: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern(this.regExPassword)]],
        email: ['', [Validators.required, Validators.email]],
        celular: ['', [Validators.required, Validators.pattern(this.regExNumber)]],
        domicilio: ['', []],
        admin: [false, []]
    });

    constructor(
        private storeAlumnos: Store<AlumnoState>,
        private storeSession: Store<SessionState>,
        private fb: FormBuilder,
        private paisesService: PaisesService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {

        /*busco al usuario activo */
        this.sessionSubscription =
            this.storeSession.select(selectSessionActiva).subscribe((session: ISession) => {
                this.usuarioActivo = session.usuarioActivo!
            });

        //obtiene los paises
        const paises$ = this.paisesService.obtenerPaises();

        const routeParam$ = paises$.pipe(
            switchMap((data: IPais[]) => {
                this.paises = data;
                return this.activatedRoute.paramMap
            })
        )

        routeParam$.subscribe(
            (parametros) => {
                this.id = parseInt(parametros.get('id') || '0');
                this.formulario.controls.nombre.setValue(parametros.get('nombre'));
                this.formulario.controls.apellido.setValue(parametros.get('apellido'));
                this.formulario.controls.dni.setValue(parametros.get('dni'));

                const stringDate = String(parametros.get('fechaNacimiento'));
                const date = new Date(stringDate);

                this.formulario.controls.fecha_nacimiento.setValue(date);
                this.formulario.controls.pais.setValue(Number(parametros.get('paisId')));

                const pais = this.paises.find((item) => item.id == Number(parametros.get('paisId')))!;
                this.ciudades = pais.ciudades;

                this.formulario.controls.ciudad.setValue(Number(parametros.get('ciudadId')));
                this.formulario.controls.password.setValue(parametros.get('password'));
                this.formulario.controls.email.setValue(parametros.get('email'));
                this.formulario.controls.celular.setValue(parametros.get('celular'));
                this.formulario.controls.domicilio.setValue(parametros.get('domicilio'));
                this.formulario.controls.username.setValue(parametros.get('username'));
                
                const admin = (parametros.get('admin') == 'true') ? true : false;
                this.formulario.controls.admin.setValue(admin);
            }
        )
    }

    public handlerPaises(event: MatSelectChange): void {

        const valor = event.value;

        this.ciudades = [];

        if (valor > 0) {
            const pais = this.paises.find((item) => item.id == valor)!;
            this.ciudades = pais.ciudades;
        }

    }

    public handlerSubmit(): void {
        if (this.formulario.valid) {
            this.resultado = 'El formulario fue enviado correctamente';
            this.editarAlumno();
        } else {
            this.verificarDatos();
            this.resultado = 'El formulario tiene errores, por favor revise los datos ingresados';
        }
    }

    public editarAlumno() {
        const alumno: Alumno = {
            id: this.id,
            nombre: this.formulario.value.nombre,
            apellido: this.formulario.value.apellido,
            dni: this.formulario.value.dni,
            fechaNacimiento: this.formulario.value.fecha_nacimiento,
            paisId: this.formulario.value.pais,
            ciudadId: this.formulario.value.ciudad,
            password: this.formulario.value.password,
            email: this.formulario.value.email,
            celular: this.formulario.value.celular,
            domicilio: this.formulario.value.domicilio,
            admin: this.formulario.value.admin,
            username: this.formulario.value.username
        };

        this.storeAlumnos.dispatch(editarAlumno({alumno}));
        // this.alumnosService.editarAlumno(alumno).subscribe((a) => {
        //     this.router.navigate(['alumnos/listado']);
        // });
    }

    public verificarDatos() {
        Object.keys(this.formulario.controls).forEach(field => {
            const control = this.formulario.get(field)!;
            control.markAsTouched({ onlySelf: true });
        });
    }

    public handlerVolver() {
        if(this.usuarioActivo.admin){
            this.router.navigate(['alumnos/listado']);
        }else{
            this.router.navigate(['inicio']);
        }
    }

}
