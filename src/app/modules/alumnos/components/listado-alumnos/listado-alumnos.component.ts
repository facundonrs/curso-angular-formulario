import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/modules/alumnos/services/alumnos.service';

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
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.populateTable();

    // this.alumnosSubscription = this.alumnosService.obtenerAlumnos().pipe(
    //         map( (alumnos: Alumno[]) => alumnos.filter( (item) => item.apellido == 'Rojas'))
    //     ).subscribe({
    //         next: (data) => this.dataSource.data = data
    //     })
  }

  public populateTable() :void {
    this.alumnosSubscription = this.alumnosService.obtenerAlumnos().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
    })
  }

  public filtrar(event: Event){
    const valor = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valor.trim().toLocaleLowerCase();
  }

  editarAlumno(alumno: Alumno){
    this.router.navigate(['alumnos/editar', alumno]);
  }

  eliminarAlumno(id: number){
    this.alumnosService.eliminarAlumno(id).subscribe((a) => {
        this.populateTable();
    });
  }

  ngOnDestroy(): void {
    this.alumnosSubscription.unsubscribe();
  }
}
