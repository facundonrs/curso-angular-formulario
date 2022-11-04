import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/modules/cursos/services/cursos.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  //public cursosPromise!: Promise<Curso[]>;
    public cursos$!: Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  public cargarCursos(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    console.log(this.cursos$);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }

  eliminarCurso(id: number){
    this.cursosService.eliminarCurso(id).subscribe(() => {
        this.cargarCursos();
    });
  }

}
