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

import { CustomsComponentsModule } from '../shared/customs-components/customs-components.module';
import { CadFormEditarComponent } from './cadastro/cad-form-editar/cad-form-editar.component';
import { CadFormExibirComponent } from './cadastro/cad-form-exibir/cad-form-exibir.component';
import { FormsModule } from '@angular/forms';
import { EnderecoComponent } from './endereco/endereco.component';
import { ContatoComponent } from './contato/contato.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { EndFormExibirComponent } from './endereco/end-form-exibir/end-form-exibir.component';
import { EndFormEditarComponent } from './endereco/end-form-editar/end-form-editar.component';
import { ContFormEditarComponent } from './contato/cont-form-editar/cont-form-editar.component';
import { ContFormExibirComponent } from './contato/cont-form-exibir/cont-form-exibir.component';


@NgModule({
  declarations: [
    EmpresaFormComponent,
    CadastroComponent,
    EnderecoComponent,
    ContatoComponent,
    EstabelecimentoComponent,
    CadFormEditarComponent,
    CadFormExibirComponent,
    EndFormExibirComponent,
    EndFormEditarComponent,
    ContFormEditarComponent,
    ContFormExibirComponent
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
    OrderListModule
  ]
})
export class EmpresaModule { }
