import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit, OnDestroy {

  public alumnos: Alumno[] = []; //cambio esta linea para que el array de alumnos venga desde un observable
  public alumnosSubscription!: Subscription;
  public columnas: string[] = ['nombreCompleto', 'fechaNacimiento', 'email', 'acciones'];
  public dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();

  constructor(
    private alumnosService: AlumnosService
  ) { }

  ngOnInit(): void {
    // this.alumnosSubscription = this.alumnosService.obtenerAlumnos().subscribe({
    //     next: (data) => this.dataSource.data = data
    // })

    this.alumnosSubscription = this.alumnosService.obtenerAlumnos().pipe(
            map( (alumnos: Alumno[]) => alumnos.filter( (item) => item.apellido == 'Rojas'))
        ).subscribe({
            next: (data) => this.dataSource.data = data
        })
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

  ngOnDestroy(): void {
    this.alumnosSubscription.unsubscribe();
  }
}
