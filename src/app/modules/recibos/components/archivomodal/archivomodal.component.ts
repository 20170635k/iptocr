import { Component, OnInit } from '@angular/core';
import { ReciboRoutingModule } from '../../recibos.routes';
import {Observable} from 'rxjs';
import { ModalService } from './modal.service';
import {Router,ActivatedRoute} from "@angular/router"
import { ConfirmationModalService } from '../confirmationmodal/confirmationmodal.service';

@Component({
  selector: 'app-archivomodal',
  templateUrl: './archivomodal.component.html',
  styleUrls: ['./archivomodal.component.scss']
})
export class ArchivomodalComponent implements OnInit {
  
  thisDisplay$: Observable<'open' | 'close'>;


  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private modalService: ModalService,
    private confirmationService: ConfirmationModalService) { 

    }

  ngOnInit(): void {
    this.thisDisplay$ = this.modalService.watch();
  }

  close(): void {  
    this.modalService.close();
  }

  upload(): void {
    this.confirmationService.open();
    
  }
}
