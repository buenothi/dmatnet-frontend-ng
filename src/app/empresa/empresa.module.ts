import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    EmpresaFormComponent
  ],
  imports: [
    CommonModule,
    TabViewModule
  ]
})
export class EmpresaModule { }
