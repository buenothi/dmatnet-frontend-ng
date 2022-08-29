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

  ngOnInit(): void {
    console.log("Menu carregado")
  }

  openMenu(): void {
    if (this.cssMenuLateral == 'lateral') {
      this.cssMenuLateral = 'lateralFixo'
      this.menuBotao = 'logoMenuFixo'
      this.textoMenuBotao = 'Desafixar Menu'
      this.cssBtnMenu = 'botao menuBotaoMenuSelecionado'
      this.mainComponent.changeConteudo()
    } else {
      this.cssMenuLateral = 'lateral'
      this.menuBotao = 'logoMenu'
      this.textoMenuBotao = 'Menu'
      this.cssBtnMenu = 'botao menuBotao'
      this.mainComponent.changeConteudo()
    }
  }

}
