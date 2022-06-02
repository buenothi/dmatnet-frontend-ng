import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BarraPrincipalComponent } from './barra-principal/barra-principal.component';


@NgModule({
  declarations: [
    MainComponent,
    BarraPrincipalComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
