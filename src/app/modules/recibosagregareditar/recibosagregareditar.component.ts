import { AppRoutingModule } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import {  IGrupoReciboResponse } from 'src/app/interfaces/recibo.interface';
import {Router,ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-recibosagregareditar',
  templateUrl: './recibosagregareditar.component.html',
  styleUrls: ['./recibosagregareditar.component.scss']
})
export class RecibosAgregarEditarComponent implements OnInit {

  addEditRoute:string = AppRoutingModule.ROUTES_VALUES.ROUTE_AGREGAR_EDITAR_RECIBOS

  gruposRecibo:IGrupoReciboResponse[]//DATABASE
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.gruposRecibo = [
      {
        id:1,
        nombre: 'Grupo 01',
        numeroRecibos: 1,
        fechaSubida: '7/2/2023',
        usuario: 'Juan',
        estado: {
          id:1,
          descripcion:"Procesado"
        }
      },
      {
        id:2,
        nombre: 'Grupo 02',
        numeroRecibos: 3,
        fechaSubida: '7/2/2023',
        usuario: 'Juan',
        estado: {
          id:1,
          descripcion:"Procesado"
        }
      }
    ]
  }

  ngOnInit(): void {

  }

  detalle(id:number){
    this.router.navigate(["../"+AppRoutingModule.ROUTES_VALUES.ROUTE_RECIBOS,id], {relativeTo:this.activatedRoute})
  }

}
