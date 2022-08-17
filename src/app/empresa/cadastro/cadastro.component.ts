import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  isEditarForm = true;

  constructor() { }

  ngOnInit(): void {
  }

  editarCadastro(): void {
    this.isEditarForm ? this.isEditarForm = false : this.isEditarForm = true;
  }

}
