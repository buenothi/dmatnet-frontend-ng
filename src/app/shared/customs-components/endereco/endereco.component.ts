import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() isEditarForm:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
