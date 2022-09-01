import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { PickListModule } from 'primeng/picklist';


@NgModule({
  declarations: [
    UsuarioLoginComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    PanelModule,
    PickListModule
  ]
})
export class UsuarioModule { }
