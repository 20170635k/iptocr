import { Component, OnInit } from '@angular/core';
import { ReciboRoutingModule } from '../../recibos.routes';
import {Observable} from 'rxjs';
import { ConfirmationModalService } from './confirmationmodal.service';
import {Router,ActivatedRoute} from "@angular/router"
import { ModalService } from '../archivomodal/modal.service';

@Component({
  selector: 'app-confirmationmodal',
  templateUrl: './confirmationmodal.component.html',
  styleUrls: ['./confirmationmodal.component.scss']
})
export class ConfirmationmodalComponent implements OnInit {
  
  display$: Observable<'open' | 'close'>;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private modalService: ConfirmationModalService,
    private parentModal: ModalService) { 

    }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
    
  }

  close(): void {
    this.modalService.close()
    this.parentModal.close()  
  }

  upload(): void{
    this.modalService.close()
    this.parentModal.close() 
    
  }
}
