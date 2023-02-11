import { IEmpresaResponse } from "./empresa.interface"

export interface IRecibo{
  nombre:string,
  empresa:string,//seguramente sea el Id de la empresa
  peso:string, //peso del archivo
  estado: IEstadoRecibo //estado del recibo |incosistencia|subido|subiendo
}
export interface IReciboResponse{
  id:number,
  nombre:string,
  empresa:IEmpresaResponse,
  fechaSubida:string,
  usuario?:String,
  fechaProcesamiento:string,
  estado: IEstadoRecibo
}


export interface IGrupoRecibo{
  nombre:string,
  fechaSubida:string,
  usuario:String, //probablemente el id del usuario
  recibos:IRecibo[]
}
export interface IGrupoReciboResponse{
  id:number,
  nombre:string,
  numeroRecibos:number,
  fechaSubida:string,
  usuario:String, //probablemente el id del usuario
  estado:IEstadoGrupoRecibo
}


export interface IDataResponse<T>{
  id:number,
  data:T
}

export interface IEstadoGrupoRecibo{
  id:number,
  descripcion:string
}
export interface IEstadoRecibo{
  id:number,
  descripcion:string
}
