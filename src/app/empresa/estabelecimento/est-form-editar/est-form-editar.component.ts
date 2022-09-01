import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est-form-editar',
  templateUrl: './est-form-editar.component.html',
  styleUrls: ['./est-form-editar.component.css']
})
export class EstFormEditarComponent implements OnInit {

  dialogSetor:any
  dialogFuncao:any
  showDialogdisplay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialogSetor() {
    this.dialogSetor = true;
}
  showDialogFuncao() {
    this.dialogFuncao = true;
}

}
