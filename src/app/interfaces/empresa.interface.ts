export interface IEmpresa{
  nombre:string,
  ruc:string,
  codigo:string
}
export interface IEmpresaResponse{
  id:number,
  nombre:string,
  ruc:string,
  codigo:string
}

export enum Mascotas{
  PERRO = "PERRO",
  GATO = "GATO"
}
