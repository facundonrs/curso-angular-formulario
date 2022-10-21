import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  public cursosPromise!: Promise<Curso[]>;

  constructor(
    private cursoService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosPromise = this.cursoService.obtenerCursosComoPromise();
  }

}
