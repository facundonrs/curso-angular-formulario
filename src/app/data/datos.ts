import { Alumno } from "../models/alumno";
import { Curso } from "../models/curso";

export class Datos{
    static alumnos: Alumno[] = [
        {
            nombre: "Facundo",
            apellido: "Rojas",
            fechaNacimiento: new Date(2005, 4, 1),
            domicilio: "Calle azul 123",
            celular: 3804998877,
            email: "facundonrs@gmail.com",
            ciudadId: 1,
            paisId: 1,
            password: 'asdv',
            dni: 35146436
        },
        {
            nombre: "Nahuel",
            apellido: "Serrano",
            fechaNacimiento: new Date(1990, 3, 12),
            domicilio: "Calle verde 123",
            celular: 3804998877,
            email: "nahuel@gmail.com",
            ciudadId: 1,
            paisId: 1,
            password: 'asdv',
            dni: 35146436
        },
        {
            nombre: "Jeremías",
            apellido: "Rojas",
            fechaNacimiento: new Date(2000, 10, 1),
            domicilio: "Calle rojo 123",
            celular: 3804998877,
            email: "jeremias@gmail.com",
            ciudadId: 1,
            paisId: 1,
            password: 'asdv',
            dni: 35146436
        },
        {
            nombre: "Soledad",
            apellido: "Alaniz",
            fechaNacimiento: new Date(2001, 12, 14),
            domicilio: "Calle azul 345",
            celular: 3804998877,
            email: "soledad@gmail.com",
            ciudadId: 1,
            paisId: 1,
            password: 'asdv',
            dni: 35146436
        },
        {
            nombre: "Eliana",
            apellido: "Castillo",
            fechaNacimiento: new Date(2003, 9, 1),
            domicilio: "Calle violeta 122",
            celular: 3804998877,
            email: "eliana@gmail.com",
            ciudadId: 1,
            paisId: 1,
            password: 'asdv',
            dni: 35146436
        }
    ];

    static cursos: Curso[] = [
        {
            id: 1,
            nombre: 'SQL',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi vitae delectus quis, fugit molestias dignissimos! Adipisci sed illum dignissimos, officiis laborum, corporis reprehenderit eligendi dolorum vitae dolores cumque suscipit.',
            fecha_desde: new Date(2022, 10, 1),
            fecha_hasta: new Date(2022, 12, 20),
            cant_max_alumnos: 10
        },
        {
            id: 2,
            nombre: 'Typescript',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi vitae delectus quis, fugit molestias dignissimos! Adipisci sed illum dignissimos, officiis laborum, corporis reprehenderit eligendi dolorum vitae dolores cumque suscipit.',
            fecha_desde: new Date(2022, 11, 1),
            fecha_hasta: new Date(2023, 1, 15),
            cant_max_alumnos: 15
        },
        {
            id: 3,
            nombre: 'Node',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi vitae delectus quis, fugit molestias dignissimos! Adipisci sed illum dignissimos, officiis laborum, corporis reprehenderit eligendi dolorum vitae dolores cumque suscipit.',
            fecha_desde: new Date(2022, 10, 1),
            fecha_hasta: new Date(2022, 12, 20),
            cant_max_alumnos: 20
        },
        {
            id: 4,
            nombre: 'Angular',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi vitae delectus quis, fugit molestias dignissimos! Adipisci sed illum dignissimos, officiis laborum, corporis reprehenderit eligendi dolorum vitae dolores cumque suscipit.',
            fecha_desde: new Date(2022, 11, 1),
            fecha_hasta: new Date(2023, 1, 15),
            cant_max_alumnos: 15
        }
    ];
}