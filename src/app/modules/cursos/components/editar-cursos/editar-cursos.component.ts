import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/modules/cursos/services/cursos.service';
import { editarCurso } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

    private id: number = 0;

    public formulario = this.fb.group({
        nombre: ['', [Validators.required ]],
        descripcion: ['', [Validators.required ]],
        fecha_desde: ['', [Validators.required ]],
        fecha_hasta: ['', [Validators.required ]],
      });

    constructor(
        private fb: FormBuilder,
        //private cursosService: CursosService,
        private storeCursos: Store<CursoState>,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((parametros) => {
            this.id = parseInt(parametros.get('id') || '0');
            this.formulario.controls.nombre.setValue( parametros.get('nombre') );
            this.formulario.controls.descripcion.setValue( parametros.get('descripcion') );

            const stringDateFrom = String(parametros.get('fecha_desde'));
            const dateFrom = new Date(stringDateFrom);

            const stringDateTo = String(parametros.get('fecha_hasta'));
            const dateTo = new Date(stringDateTo);
            
            this.formulario.controls.fecha_desde.setValue( dateFrom );
            this.formulario.controls.fecha_hasta.setValue( dateTo );
          })
    }

    public handlerSubmit(): void {
        if(this.formulario.valid){
           this.editarCurso();
        }else{
           this.verificarDatos();
        }
     }

    public editarCurso(){
        const curso: Curso = {
            id: this.id,
            nombre: this.formulario.value.nombre,
            descripcion: this.formulario.value.descripcion,
            fecha_desde: this.formulario.value.fecha_desde,
            fecha_hasta: this.formulario.value.fecha_hasta,

        };

        this.storeCursos.dispatch(editarCurso({curso}));

        // this.cursosService.editarCurso(curso).subscribe( () => {
        //     this.router.navigate(['cursos/listado']); 
        // });
    }
   
     public verificarDatos() {
       Object.keys(this.formulario.controls).forEach(field => {
           const control = this.formulario.get(field)!;
           control.markAsTouched({ onlySelf: true });
       });
     }

    public handlerVolver() {
        this.router.navigate(['cursos/listado']);
    }

}
