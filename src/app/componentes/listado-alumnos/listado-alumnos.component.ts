import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Datos } from 'src/app/data/datos';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  public alumnos: Alumno[] =  Datos.alumnos;
  public columnas: string[] = ['nombreCompleto', 'fechaNacimiento', 'email', 'acciones'];
  public dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);

  constructor() { }

  ngOnInit(): void {
  }

  public filtrar(event: Event){
    const valor = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valor.trim().toLocaleLowerCase();
  }

//   public eliminar(alumno: Alumno){
//     const alumnosFiltrados = this.alumnos.filter((item) => item != alumno);
//     this.alumnos = alumnosFiltrados;
//     console.log(this.alumnos);
//   }
}
