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
import { OrderListModule } from 'primeng/orderlist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListboxModule } from 'primeng/listbox';
import { PickListModule } from 'primeng/picklist';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';

import { CustomsComponentsModule } from '../shared/customs-components/customs-components.module';
import { CadFormEditarComponent } from './cadastro/cad-form-editar/cad-form-editar.component';
import { CadFormExibirComponent } from './cadastro/cad-form-exibir/cad-form-exibir.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato/contato.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { ContFormEditarComponent } from './contato/cont-form-editar/cont-form-editar.component';
import { ContFormExibirComponent } from './contato/cont-form-exibir/cont-form-exibir.component';
import { EstFormEditarComponent } from './estabelecimento/est-form-editar/est-form-editar.component';
import { EstFormExibirComponent } from './estabelecimento/est-form-exibir/est-form-exibir.component';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
  declarations: [
    EmpresaFormComponent,
    CadastroComponent,
    ContatoComponent,
    EstabelecimentoComponent,
    CadFormEditarComponent,
    CadFormExibirComponent,
    ContFormEditarComponent,
    ContFormExibirComponent,
    EstFormEditarComponent,
    EstFormExibirComponent,
    EnderecoComponent
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
    FormsModule,
    OrderListModule,
    ListboxModule,
    PickListModule,
    ToggleButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    DialogModule,
    TableModule
  ]
})
export class EmpresaModule { }
