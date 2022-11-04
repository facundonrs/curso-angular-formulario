import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/modules/alumnos/services/alumnos.service';
import { PaisesService } from 'src/app/services/paises.service';

interface IPais{
    id: number;
    nombre: string;
    ciudades: ICiudad[];
  };
  
interface ICiudad{
id: number;
nombre: string;
}

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {

    public resultado: any;

    public paises: IPais[] = [];
  
    public ciudades: ICiudad[] = [];
  
    public regExPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    public regExDNI: RegExp = /^[\d]{6,8}$/;
    public regExNombreApellido: RegExp = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]+$/
    public regExNumber: RegExp = /^[\d]+$/
  
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
      password: ['', [Validators.required, Validators.pattern(this.regExPassword)]],
      email: ['', [Validators.required, Validators.email ]],
      celular: ['', [Validators.required, Validators.pattern(this.regExNumber) ]],
      domicilio: ['', []],
    });
  
    constructor(
      private fb: FormBuilder,
      private paisesService: PaisesService,
      private alumnosServive: AlumnosService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
        const paises$ = this.paisesService.obtenerPaises();

        paises$.subscribe((data) => {
            this.paises = data
        });
    }
  
    
  
    public handlerPaises(event: MatSelectChange): void{

      const valor = event.value;
  
      this.ciudades = [];
  
      if(valor > 0){
        const pais = this.paises.find( (item) => item.id == valor)!;
        this.ciudades = pais.ciudades;
        console.log('city', this.ciudades);
      }
      
    }
  
    public handlerSubmit(): void {
       if(this.formulario.valid){
          this.resultado = 'El formulario fue enviado correctamente';
          this.agregarAlumno();
       }else{
          this.verificarDatos();
          this.resultado = 'El formulario tiene errores, por favor revise los datos ingresados';
       }
    }

    public agregarAlumno(){
        const alumno: Alumno = {
            id: Math.round(Math.random()*1000),
            nombre: this.formulario.value.nombre,
            apellido: this.formulario.value.apellido,
            dni: this.formulario.value.dni,
            fechaNacimiento: this.formulario.value.fecha_nacimiento,
            paisId: this.formulario.value.pais,
            ciudadId: this.formulario.value.ciudad,
            password: this.formulario.value.password,
            email: this.formulario.value.email,
            celular: this.formulario.value.celular,
            domicilio: this.formulario.value.domicilio
          };
          console.log(alumno);
          this.alumnosServive.agregarAlumno(alumno).subscribe((a) => {
            this.router.navigate(['alumnos/listado']); 
          });
    }
  
    public verificarDatos() {
      Object.keys(this.formulario.controls).forEach(field => {
          const control = this.formulario.get(field)!;
          control.markAsTouched({ onlySelf: true });
      });
    }

    public handlerVolver() {
        this.router.navigate(['alumnos/listado']);
    }

}
