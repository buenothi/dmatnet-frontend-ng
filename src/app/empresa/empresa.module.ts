import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { TabViewModule } from 'primeng/tabview';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    EmpresaFormComponent,
    CadastroComponent
  ],
  imports: [
    AccordionModule,
    ButtonModule,
    CommonModule,
    PanelModule,
    TabViewModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule
  ]
})
export class EmpresaModule { }
