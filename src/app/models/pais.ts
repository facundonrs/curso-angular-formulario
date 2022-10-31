export interface IPais{
    id: number,
    nombre: string,
    ciudades: {id: number, nombre: string}[],
}