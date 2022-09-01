import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont-form-editar',
  templateUrl: './cont-form-editar.component.html',
  styleUrls: ['./cont-form-editar.component.css']
})
export class ContFormEditarComponent implements OnInit {


  list1: any[] = [];
  list2: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list1 = []//initialize list 1
    this.list2 = []//initialize list 2
  }

}
