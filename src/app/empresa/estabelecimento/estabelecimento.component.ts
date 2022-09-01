import { Component, OnInit } from '@angular/core';
import { EmpresaFormComponent } from '../empresa-form/empresa-form.component';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  isEditarForm = false;
  isEditarButtonDisabled = true;
  isCancelarButtonDisabled = true;
  isSalvarButtonDisabled = true;
  isNovoButtonDisabled = false;
  isPrintButtonDisabled = true;
  isDeleteButtonDisabled = true;

  constructor(
    private empresaForm: EmpresaFormComponent
  ) {
  }

  ngOnInit(): void {
  }

  editarCadastro(): void {
    this.isEditarForm ? this.isEditarForm = false : this.isEditarForm = true;
  }

  onNovoClick(): void {
    this.isEditarForm = true;
    this.isCancelarButtonDisabled = false;
    this.isSalvarButtonDisabled = false;
    this.isNovoButtonDisabled = true;
    this.isDeleteButtonDisabled = false;
    this.empresaForm.disableTabCadastro = true;
    this.empresaForm.disableTabContato = true;
    this.empresaForm.disableTabEndereco = true;
    this.empresaForm.disableTabEstabelecimento = false;
  }

  onCancelarClick(): void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
    this.empresaForm.disableTabCadastro = false;
    this.empresaForm.disableTabContato = false;
    this.empresaForm.disableTabEndereco = false;
    this.empresaForm.disableTabEstabelecimento = false;
  }

  onSalvarClick(): void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
    this.empresaForm.disableTabCadastro = false;
    this.empresaForm.disableTabContato = false;
    this.empresaForm.disableTabEndereco = false;
    this.empresaForm.disableTabEstabelecimento = false;
  }

  onDeleteClick(): void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
    this.empresaForm.disableTabCadastro = false;
    this.empresaForm.disableTabContato = false;
    this.empresaForm.disableTabEndereco = false;
    this.empresaForm.disableTabEstabelecimento = false;
  }

}