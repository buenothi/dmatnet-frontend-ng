import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main.component';

@Component({
  selector: 'app-menu-modulos',
  templateUrl: './menu-modulos.component.html',
  styleUrls: ['./menu-modulos.component.css']
})
export class MenuModulosComponent implements OnInit {

  constructor(
    private mainComponent: MainComponent
  ) { }

  cssMenuLateral = 'lateral'
  menuBotao = 'logoMenu'
  textoMenuBotao = 'Menu'

  cssBtnMenu = 'botao menuBotao'
  cssBtnHome = 'botao menuBotao'
  cssBtnEmpresa = 'botao menuBotao'
  cssBtnUsuario = 'botao menuBotao'
  cssBtnRegAmbiental = 'botao menuBotao'
  cssBtnSaudeTrabalho = 'botao menuBotao'
  cssBtnDocLegais = 'botao menuBotao'
  cssBtnAcidentes = 'botao menuBotao'
  cssBtnEqProtecao = 'botao menuBotao'
  cssBtnFerramentas = 'botao menuBotao'
  cssBtnTreinamento = 'botao menuBotao'

  ngOnInit(): void {
    this.cssBtnHome = 'botao menuBotao'
    this.cssBtnEmpresa = 'botao menuBotao'
    this.cssBtnUsuario = 'botao menuBotao'
    this.cssBtnRegAmbiental = 'botao menuBotao'
    this.cssBtnSaudeTrabalho = 'botao menuBotao'
    this.cssBtnDocLegais = 'botao menuBotao'
    this.cssBtnAcidentes = 'botao menuBotao'
    this.cssBtnEqProtecao = 'botao menuBotao'
    this.cssBtnFerramentas = 'botao menuBotao'
    this.cssBtnTreinamento = 'botao menuBotao'
  }

  openMenu(): void {
    if (this.cssMenuLateral == 'lateral') {
      this.cssMenuLateral = 'lateralFixo'
      this.menuBotao = 'logoMenuFixo'
      this.textoMenuBotao = 'Desafixar Menu'
      this.cssBtnMenu = 'botao menuBotaoSelecionado'
      this.mainComponent.changeConteudo()
    } else {
      this.cssMenuLateral = 'lateral'
      this.menuBotao = 'logoMenu'
      this.textoMenuBotao = 'Menu'
      this.cssBtnMenu = 'botao menuBotao'
      this.mainComponent.changeConteudo()
    }
  }

  onClickBtn(moduloNome:string):void {
    switch (moduloNome) {
      case 'home':
        this.ngOnInit();
        this.cssBtnHome = 'botao menuBotaoSelecionado';
        break;
      case 'empresa':
        this.ngOnInit();
        this.cssBtnEmpresa = 'botao menuBotaoSelecionado';
        break;
      case 'usuario':
        this.ngOnInit();
        this.cssBtnUsuario = 'botao menuBotaoSelecionado';
        break;
      case 'ambiental':
        this.ngOnInit();
        this.cssBtnRegAmbiental = 'botao menuBotaoSelecionado';
        break;
      case 'saude':
        this.ngOnInit();
        this.cssBtnSaudeTrabalho = 'botao menuBotaoSelecionado';
        break;
      case 'documentos':
        this.ngOnInit();
        this.cssBtnDocLegais = 'botao menuBotaoSelecionado';
        break;
      case 'acidente':
        this.ngOnInit();
        this.cssBtnAcidentes = 'botao menuBotaoSelecionado';
        break;
      case 'eqpto':
        this.ngOnInit();
        this.cssBtnEqProtecao = 'botao menuBotaoSelecionado';
        break;
      case 'ferramentas':
        this.ngOnInit();
        this.cssBtnFerramentas = 'botao menuBotaoSelecionado';
        break;
      case 'treinamento':
        this.ngOnInit();
        this.cssBtnTreinamento = 'botao menuBotaoSelecionado';
        break;
    }
  }

}
