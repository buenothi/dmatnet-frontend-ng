import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BarraPrincipalComponent } from './barra-principal/barra-principal.component';
import { MenuModulosComponent } from './menu-modulos/menu-modulos.component';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    MainComponent,
    BarraPrincipalComponent,
    MenuModulosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    MainRoutingModule
  ]
})
export class MainModule { }
