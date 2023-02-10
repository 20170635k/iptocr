import { BodyComponent } from './body/body.component';
import { AgregareditarComponent } from './pages/agregareditar/agregareditar.component';
import { ListarComponent } from './pages/listar/listar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

const routesValues = {
  ROUTE_LISTAR:"listar",
  ROUTE_AGREGAR:"agregar",
  ROUTE_EDITAR:"",
};
const routes: Routes = [
  {
    path:'',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:routesValues.ROUTE_LISTAR,
        pathMatch:"full"
      },
      {
        path:routesValues.ROUTE_LISTAR,
        component:ListarComponent
      },
      {
        path:routesValues.ROUTE_AGREGAR,
        component:AgregareditarComponent
      },
      {
        path:routesValues.ROUTE_EDITAR+"/:id",
        component:AgregareditarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReciboRoutingModule{
  public static ROUTES_VALUES = routesValues;
}
