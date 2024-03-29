import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    LoginComponent,
    DialogLoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule
  ]
})
export class LoginModule { }
