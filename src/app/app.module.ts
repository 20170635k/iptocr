import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpresasComponent } from './modules/empresas/empresas.component';
import { ReportesComponent } from './modules/reportes/reportes.component';
import { ConfiguracionComponent } from './modules/configuracion/configuracion.component';
import { AppRoutingModule } from './app.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecibosAgregarEditarComponent } from './modules/recibosagregareditar/recibosagregareditar.component';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgregarrecibosComponent } from './modules/agregarrecibos/agregarrecibos.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    ReportesComponent,
    ConfiguracionComponent,
    NavigationComponent,
    RecibosAgregarEditarComponent,
    AgregarrecibosComponent,
  

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
