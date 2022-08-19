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
import { CustomsComponentsModule } from '../shared/customs-components/customs-components.module';
import { FormEditarComponent } from './cadastro/form-editar/form-editar.component';
import { FormExibirComponent } from './cadastro/form-exibir/form-exibir.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpresaFormComponent,
    CadastroComponent,
    FormExibirComponent,
    FormEditarComponent
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
    DropdownModule,
    CustomsComponentsModule,
    FormsModule
  ]
})
export class EmpresaModule { }
