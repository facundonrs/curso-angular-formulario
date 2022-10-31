import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public resultado: any;

  public paises: IPais[] = [
    {
      id: 1,
      nombre: "Argentina",
      ciudades: [
        {id: 1, nombre: "Buenos Aires"},
        {id: 2, nombre: "Córdoba"},
        {id: 3, nombre: "La Rioja"}
      ]
    },
    {
      id: 2,
      nombre: "Uruguay",
      ciudades: [
        {id: 1, nombre: "Montevideo"},
        {id: 2, nombre: "Paysandú"},
        {id: 3, nombre: "Salto"}
      ]
    },
    {
      id: 3,
      nombre: "Paraguay",
      ciudades: [
        {id: 1, nombre: "Asunción"},
        {id: 2, nombre: "Ciudad del Este"},
        {id: 3, nombre: "Luque"}
      ]
    },
  ];

  public ciudades: ICiudad[] = [];

  public regExPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  public regExDNI: RegExp = /^[\d]{6,8}$/;
  public regExNombreApellido: RegExp = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]+$/

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
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  

  public handlerPaises(event: any): void{
    
    const valor = event.target.value;

    this.ciudades = [];

    if(valor > 0){
      const pais = this.paises.find( (item) => item.id == valor)!;
      this.ciudades = pais.ciudades;
    }
    
  }

  public handlerSubmit(): void {
     if(this.formulario.valid){
        this.resultado = 'El formulario fue enviado correctamente';
     }else{
        this.verificarDatos();
        this.resultado = 'El formulario tiene errores, por favor revise los datos ingresados';
     }
  }

  public verificarDatos() {
    Object.keys(this.formulario.controls).forEach(field => {
        const control = this.formulario.get(field)!;
        control.markAsTouched({ onlySelf: true });
    });
  }

}
