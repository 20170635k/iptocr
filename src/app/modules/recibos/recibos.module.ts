import { DragdropDirective } from './directives/dragdrop.directive';
import { AgregareditarComponent } from './pages/agregareditar/agregareditar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReciboRoutingModule } from './recibos.routes';
import { CommonModule } from '@angular/common';
import { DragdropfilesComponent } from './components/dragdropfiles/dragdropfiles.component';



@NgModule({
  declarations: [
    DragdropDirective,
    BodyComponent,
    AgregareditarComponent,
    ListarComponent,
    DragdropfilesComponent,
  ],
  imports: [
    CommonModule,
    ReciboRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ReciboModule { }
