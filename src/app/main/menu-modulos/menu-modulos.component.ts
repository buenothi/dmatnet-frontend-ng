import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-modulos',
  templateUrl: './menu-modulos.component.html',
  styleUrls: ['./menu-modulos.component.css']
})
export class MenuModulosComponent implements OnInit {

  constructor() { }

  cssMenuLateral = 'lateral';
  menuBotao = 'logoMenu'

  ngOnInit(): void {
  }

  openMenu(): void {
    if (this.cssMenuLateral == 'lateral') {
      this.cssMenuLateral = 'lateralFixo'
      this.menuBotao = 'logoMenuFixo'
    } else {
      this.cssMenuLateral = 'lateral'
      this.menuBotao = 'logoMenu'
    }
  }

}
