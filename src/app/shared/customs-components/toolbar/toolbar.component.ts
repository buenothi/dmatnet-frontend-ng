import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  editarClickEvent = new EventEmitter();

  @Output()
  cancelarClickEvent = new EventEmitter();

  @Output()
  salvarClickEvent = new EventEmitter();

  @Output()
  novoClickEvent = new EventEmitter();

  @Output()
  printClickEvent = new EventEmitter();

  @Output()
  deleteClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEditarClick(): void {
    this.editarClickEvent.emit("editar");
  }

  onCancelarClick(): void {
    this.cancelarClickEvent.emit("cancelar");
  }

  onSalvarClick(): void {
    this.salvarClickEvent.emit("salvar");
  }

  onNovoClick(): void {
    this.novoClickEvent.emit("novo");
  }

  onPrintClick(): void{
    this.printClickEvent.emit("print");
  }

  onDeleteClick(): void{
    this.deleteClickEvent.emit("delete");
  }

}
