import { Component, Injectable, OnInit } from '@angular/core';
import { EmpresaFormComponent } from '../empresa-form/empresa-form.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

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
    this.empresaForm.disableTabContato = true;
    this.empresaForm.disableTabEndereco = true;
  }

  onCancelarClick(): void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
    this.empresaForm.disableTabContato = false;
    this.empresaForm.disableTabEndereco = false;
  }

  onSalvarClick(): void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
    this.empresaForm.disableTabContato = false;
    this.empresaForm.disableTabEndereco = false;
  }

  onDeleteClick(): void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
    this.empresaForm.disableTabContato = false;
    this.empresaForm.disableTabEndereco = false;
  }

}
