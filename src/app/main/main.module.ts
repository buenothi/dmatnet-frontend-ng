import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BarraPrincipalComponent } from './barra-principal/barra-principal.component';
import { MenuModulosComponent } from './menu-modulos/menu-modulos.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';
import { ToolbarModule } from 'primeng/toolbar';

import { SeletorDeEmpresaComponent } from './seletor-de-empresa/seletor-de-empresa.component';
import { CustomsComponentsModule } from '../shared/customs-components/customs-components.module';


@NgModule({
  declarations: [
    MainComponent,
    BarraPrincipalComponent,
    MenuModulosComponent,
    SeletorDeEmpresaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    PanelModule,
    DialogModule,
    OrderListModule,
    CustomsComponentsModule,
    MainRoutingModule,
    ToolbarModule
  ]
})
export class MainModule { }
