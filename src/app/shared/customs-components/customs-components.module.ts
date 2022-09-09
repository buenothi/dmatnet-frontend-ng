import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { EnderecoComponent } from './endereco/endereco.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { EndFormEditarComponent } from './endereco/end-form-editar/end-form-editar.component';
import { EndFormExibirComponent } from './endereco/end-form-exibir/end-form-exibir.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    EnderecoComponent,
    DataSelectorComponent,
    EndFormEditarComponent,
    EndFormExibirComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ToolbarModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule
  ], exports: [
    ToolbarComponent,
    DataSelectorComponent
  ]
})
export class CustomsComponentsModule { }
