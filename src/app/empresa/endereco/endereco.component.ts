import { Component, Input, OnInit } from '@angular/core';
import { EmpresaFormComponent } from '../empresa-form/empresa-form.component';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() isEditarForm: boolean = false;
  @Input() isEditarButtonDisabled: boolean = true;
  @Input() isCancelarButtonDisabled: boolean = true;
  @Input() isSalvarButtonDisabled: boolean = true;
  @Input() isNovoButtonDisabled: boolean = false;
  @Input() isPrintButtonDisabled: boolean = true;
  @Input() isDeleteButtonDisabled: boolean = true;
  @Input() isToolBarHidden: boolean = false;

  constructor(
    private empresaForm: EmpresaFormComponent
  ) { }

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
    this.empresaForm.disableTabEndereco = false;
    this.empresaForm.disableTabEstabelecimento = true;
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
