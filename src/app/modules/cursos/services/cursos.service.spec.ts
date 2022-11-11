import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';

describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { post: jasmine.Spy , get: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
    service = TestBed.inject(CursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//   it('DESAFIO UNIT TEST - Hace un get de cursos', (done: DoneFn) => {

//     const mockRespuesta2 = [
//         {
//           nombre: "SQL2",
//           descripcion: "Quae porro eum quisquam id. Dignissimos praesentium quia explicabo aut illum. Excepturi eos labore quod omnis eligendi.",
//           fecha_desde: new Date("2006-04-20"),
//           fecha_hasta: new Date("2008-12-22"),
//           cant_max_alumnos: 4,
//           id: 1
//         },
//         {
//           nombre: "Typescript",
//           descripcion: "Asperiores aut iure voluptatem qui ut.",
//           fecha_desde: new Date("2047-10-30"),
//           fecha_hasta: new Date("2098-02-10"),
//           cant_max_alumnos: 0,
//           id: 2
//         },
//         {
//           nombre: "Node",
//           descripcion: "Esse repellendus perferendis error earum incidunt dolorum.\nAliquid enim labore consequuntur deserunt quaerat occaecati aut officiis soluta.\nTotam ex non ut labore harum molestiae voluptatem reprehenderit.",
//           fecha_desde: new Date("2070-01-02"),
//           fecha_hasta: new Date("2012-06-08"),
//           cant_max_alumnos: 56,
//           id: "3"
//         },
//         {
//           nombre: "Angular",
//           descripcion: "Minima quo aspernatur et perferendis deserunt eum.\nIste eligendi molestiae animi omnis cumque dolor omnis earum.\nCulpa accusantium atque nostrum et qui.",
//           fecha_desde: new Date("2060-06-27"),
//           fecha_hasta: new Date("2073-04-21"),
//           cant_max_alumnos: 50,
//           id: 4
//         }
//       ];

//     httpClientSpy.get.and.returnValue(of(mockRespuesta2));

//     service.obtenerCursos().subscribe( (res) => {
//         expect(res).toEqual(mockRespuesta2);
//         done();
//     })
//   });

//   it('DESAFIO UNIT TEST - Hace un post de curso', (done: DoneFn) => {

//     const mockData = {
//         id: 1,
//         nombre: 'Angular',
//         descripcion: 'descripcion curso',
//         fecha_desde: new Date('2023-01-01'),
//         fecha_hasta: new Date('2023-01-01')
//     }

//     const mockRepuesta = {
//         id: 1,
//         nombre: 'Angular',
//         descripcion: 'descripcion curso',
//         fecha_desde: new Date('2023-01-01'),
//         fecha_hasta: new Date('2023-01-01')
//     }

//     httpClientSpy.post.and.returnValue(of(mockRepuesta));

//     service.agregarCurso(mockData).subscribe( (res) => {
//         expect(res).toEqual(mockRepuesta);
//         done();
//     })
//   });
});
