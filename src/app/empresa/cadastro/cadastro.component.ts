import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  editarCadastro(): void {
    this.isEditarForm ? this.isEditarForm = false : this.isEditarForm = true;
  }

  onNovoClick():void {
    this.isEditarForm = true;
    this.isCancelarButtonDisabled = false;
    this.isSalvarButtonDisabled = false;
    this.isNovoButtonDisabled = true;
    this.isDeleteButtonDisabled = false;
  }

  onCancelarClick():void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
  }

  onSalvarClick():void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
  }

  onDeleteClick():void {
    this.isEditarForm = false;
    this.isCancelarButtonDisabled = true;
    this.isSalvarButtonDisabled = true;
    this.isNovoButtonDisabled = false;
    this.isDeleteButtonDisabled = true;
  }

}
