import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnInit {

  display:any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true
  }

  handleClick() {
    //execute action
}

}
