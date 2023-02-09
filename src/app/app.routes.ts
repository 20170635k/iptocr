import { RecibosdetalleComponent } from './pages/recibosdetalle/recibosdetalle.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { RecibosComponent } from './pages/recibos/recibos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

const routesValues = {
  ROUTE_EMPRESAS:"empresas",
  ROUTE_RECIBOS:"recibos",
  ROUTE_REPORTES:"reportes",
  ROUTE_CONFIGURACION:"configuracion",
};
const routes: Routes = [
  {
    path:'',
    redirectTo:routesValues.ROUTE_EMPRESAS,
    pathMatch:'full'
  },
  {
    path:routesValues.ROUTE_EMPRESAS,
    component:EmpresasComponent
  },
  {
    path:routesValues.ROUTE_RECIBOS,
    component:RecibosComponent
  },
  {
    path:routesValues.ROUTE_RECIBOS+"/:id",
    component:RecibosdetalleComponent
  },
  {
    path:routesValues.ROUTE_REPORTES,
    component:ReportesComponent
  },
  {
    path:routesValues.ROUTE_CONFIGURACION,
    component:ConfiguracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
  public static ROUTES_VALUES = routesValues;
}
