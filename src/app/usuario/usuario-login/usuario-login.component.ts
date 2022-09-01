import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  list1: any[] = [];
  list2: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list1 = []//initialize list 1
    this.list2 = []//initialize list 2
  }

}
