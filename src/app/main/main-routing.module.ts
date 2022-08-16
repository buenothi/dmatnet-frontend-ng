import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaFormComponent } from '../empresa/empresa-form/empresa-form.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [{
      path: 'empresa',
      loadChildren: () => import('../empresa/empresa.module').then(m => m.EmpresaModule),
      component: EmpresaFormComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
