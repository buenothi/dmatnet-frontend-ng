import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  cssConteudo = 'conteudo'

  ngOnInit(): void {
  }

  changeConteudo(): void {
    if(this.cssConteudo == 'conteudo') {
      this.cssConteudo = 'conteudoFixo'
    } else {
      this.cssConteudo = 'conteudo'
    }
  }

}
