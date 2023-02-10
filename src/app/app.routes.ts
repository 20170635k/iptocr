import { RecibosAgregarEditarComponent } from './modules/recibosagregareditar/recibosagregareditar.component';
import { ConfiguracionComponent } from './modules/configuracion/configuracion.component';
import { ReportesComponent } from './modules/reportes/reportes.component';
import { EmpresasComponent } from './modules/empresas/empresas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

const routesValues = {
  ROUTE_EMPRESAS:"empresas",
  ROUTE_RECIBOS:"recibos",
  ROUTE_REPORTES:"reportes",
  ROUTE_CONFIGURACION:"configuracion",
  ROUTE_AGREGAR_EDITAR_RECIBOS:"agregar"
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
    loadChildren:()=>import('./modules/recibos/recibos.module').then(m => m.ReciboModule)
  },
  {
    path:routesValues.ROUTE_AGREGAR_EDITAR_RECIBOS,
    component:RecibosAgregarEditarComponent
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
