import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  editarDisabled: boolean = true;

  @Input()
  cancelarDisabled: boolean = true;

  @Input()
  salvarDisabled = true;

  @Input()
  novoDisabled = false;

  @Input()
  printDisabled = true;

  @Input()
  printButtonHidden = true;

  @Input()
  deleteDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  onEditarClick(): void {
    alert("editar foi clicado");
  }

  onCancelarClick(): void {
    alert("cancelar foi clicado");
  }

  onSalvarClick(): void {
    alert("salvar foi clicado");
  }

  onNovoClick(): void {
    alert("novo foi clicado");
  }

  onPrintClick(): void{
    alert("print foi clicado");
  }

  onDeleteClick(): void{
    alert("delete foi clicado");
  }

}
