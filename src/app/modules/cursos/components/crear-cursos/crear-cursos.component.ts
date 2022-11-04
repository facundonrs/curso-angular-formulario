import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/modules/cursos/services/cursos.service';

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {

    public formulario = this.fb.group({
        nombre: ['', [Validators.required ]],
        descripcion: ['', [Validators.required ]],
        fecha_desde: ['', [Validators.required ]],
        fecha_hasta: ['', [Validators.required ]],
      });

    constructor(
        private fb: FormBuilder,
        private cursosService: CursosService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    public handlerSubmit(): void {
        if(this.formulario.valid){
           this.agregarCurso();
        }else{
           this.verificarDatos();
        }
     }
 
     public agregarCurso(){
         const curso: Curso = {
             id: Math.round(Math.random()*1000),
             nombre: this.formulario.value.nombre,
             descripcion: this.formulario.value.descripcion,
             fecha_desde: this.formulario.value.fecha_desde,
             fecha_hasta: this.formulario.value.fecha_hasta,

           };
           console.log(curso);
           this.cursosService.agregarCurso(curso).subscribe( () => {
               this.router.navigate(['cursos/listado']); 
           });
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
