import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { RecibosComponent } from './pages/recibos/recibos.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { AppRoutingModule } from './app.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecibosdetalleComponent } from './pages/recibosdetalle/recibosdetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    RecibosComponent,
    ReportesComponent,
    ConfiguracionComponent,
    NavigationComponent,
    RecibosdetalleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
