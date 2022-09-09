import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css']
})
export class DataSelectorComponent implements OnInit {

  @Input() tamanho:any = "26";
  @Input() linhas:any = "10";


  constructor() { }

  ngOnInit(): void {
  }

}
