import { ReciboRoutingModule } from '../../recibos.routes';
import { Component, OnInit } from '@angular/core';
import {  IReciboResponse } from 'src/app/interfaces/recibo.interface';
import {Router,ActivatedRoute} from "@angular/router"
import { ModalService } from '../../components/archivomodal/modal.service';

@Component({
  selector: 'app-agregareditar',
  templateUrl: './agregareditar.component.html',
  styleUrls: ['./agregareditar.component.scss']
})
export class AgregareditarComponent implements OnInit {

  gruposRecibo:IReciboResponse[]//DATABASE
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute, 
    private modalService: ModalService
  ) {
    this.gruposRecibo = [
      {
        id:1,
        nombre: 'Recibo de Luz 01',
        empresa: {
            id:1,
            nombre:'ENEL',
            ruc:'RucENEL',
            codigo:'enel'
          },
        fechaSubida: '7/2/2023',
        usuario: 'Juan',
        fechaProcesamiento: '1/1/2023',
        estado: {
          id:1,
          descripcion:"Procesado"
        }
      },
      {
        id:2,
        nombre: 'Recibo de Luz 02',
        empresa: {
          id:1,
          nombre:'ENEL',
          ruc:'RucENEL',
          codigo:'enel'
        },
        fechaSubida: '7/2/2023',
        usuario: 'Juan',
        fechaProcesamiento: '1/1/2023',
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

  }

  open() {
    this.modalService.open();
  }

}
