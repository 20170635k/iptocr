import { Component, OnInit } from '@angular/core';
import { ReciboRoutingModule } from '../../../recibos.routes';
import {Observable} from 'rxjs';
import { SGModalService } from './sgmodal.service';
import {Router,ActivatedRoute} from "@angular/router"
import { SGConfirmacionModalService } from '../confirmacionModal/sgcmodal.service';

@Component({
  selector: 'app-subirgrupomodal',
  templateUrl: './subirgrupomodal.component.html',
  styleUrls: ['./subirgrupomodal.component.scss']
})
export class SubirGrupoModalComponent implements OnInit {
  files:File[];
  thisDisplay$: Observable<'open' | 'close'>;
  confirmed: boolean = false;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private modalService: SGModalService,
    private childModal: SGConfirmacionModalService,
    ) { 
     
    }

  ngOnInit(): void {
    this.thisDisplay$ = this.modalService.watch();
  }

  close(): void {  
    
    this.modalService.close();
  }

  upload(): void {
    
    this.childModal.open()    
  }
}
