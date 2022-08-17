import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  editarDisabled = true;
  cancelarDisabled = true;
  salvarDisabled = true;
  novoDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
