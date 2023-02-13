import { Component, OnInit } from '@angular/core';
import { ReciboRoutingModule } from '../../../recibos.routes';
import {Observable} from 'rxjs';
import { SGConfirmacionModalService } from './sgcmodal.service';
import {Router,ActivatedRoute} from "@angular/router"
import { SGModalService } from '../subirgrupomodal/sgmodal.service';

@Component({
  selector: 'app-sgconfirmacionmodal',
  templateUrl: './sgconfirmacionmodal.component.html',
  styleUrls: ['./sgconfirmacionmodal.component.scss']
})
export class SGConfirmacionModalComponent implements OnInit {
  files:File[];
  thisDisplay$: Observable<'open' | 'close'>;
  confirmed: boolean = false;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private modalService: SGConfirmacionModalService,
    private parentModal: SGModalService,
    ) { 
     
    }

  ngOnInit(): void {
    this.thisDisplay$ = this.modalService.watch();
  }

  close(): void {  
    this.modalService.close();
    this.parentModal.close()
    
  }

  upload(): void {
    this.modalService.close();
    this.parentModal.close()
    
    
  }
}
