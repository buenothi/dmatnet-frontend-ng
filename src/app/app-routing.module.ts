import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
