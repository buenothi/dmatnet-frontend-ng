import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BarraPrincipalComponent } from './barra-principal/barra-principal.component';
import { MenuModulosComponent } from './menu-modulos/menu-modulos.component';


@NgModule({
  declarations: [
    MainComponent,
    BarraPrincipalComponent,
    MenuModulosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
