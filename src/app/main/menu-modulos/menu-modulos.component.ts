import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main.component';

@Component({
  selector: 'app-menu-modulos',
  templateUrl: './menu-modulos.component.html',
  styleUrls: ['./menu-modulos.component.css']
})
export class MenuModulosComponent implements OnInit {

  constructor(
    private mainComponent:MainComponent
  ) { }

  cssMenuLateral = 'lateral'
  menuBotao = 'logoMenu'
  textoMenuBotao = 'Menu'
  cssMenuBotao = 'botao menuBotao'

  ngOnInit(): void {
  }

  openMenu(): void {
    if (this.cssMenuLateral == 'lateral') {
      this.cssMenuLateral = 'lateralFixo'
      this.menuBotao = 'logoMenuFixo'
      this.textoMenuBotao = 'Desafixar Menu'
      this.cssMenuBotao = 'botao menuBotaoSelecionado'
      this.mainComponent.changeConteudo()
    } else {
      this.cssMenuLateral = 'lateral'
      this.menuBotao = 'logoMenu'
      this.textoMenuBotao = 'Menu'
      this.cssMenuBotao = 'botao menuBotao'
      this.mainComponent.changeConteudo()
    }
  }

}
