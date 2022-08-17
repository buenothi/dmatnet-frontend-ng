import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnInit {

  display:any;
  dialog:any
  showDialogdisplay: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true
  }

  showDialog() {
      this.dialog = true;
  }

}
