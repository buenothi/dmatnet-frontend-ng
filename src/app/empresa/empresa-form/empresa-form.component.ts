import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  disableTabCadastro = false;
  disableTabEndereco = false;
  disableTabContato = false;
  disableTabEstabelecimento= false;

  constructor() { }

  ngOnInit(): void {
  }

}
