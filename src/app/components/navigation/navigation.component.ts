import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  configuracion:string =AppRoutingModule.ROUTES_VALUES.ROUTE_CONFIGURACION
  empresas:string =AppRoutingModule.ROUTES_VALUES.ROUTE_EMPRESAS
  recibos:string =AppRoutingModule.ROUTES_VALUES.ROUTE_RECIBOS
  reportes:string =AppRoutingModule.ROUTES_VALUES.ROUTE_REPORTES
  constructor() { }

  ngOnInit(): void {
  }

}
