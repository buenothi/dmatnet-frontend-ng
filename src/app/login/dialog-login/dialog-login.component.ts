import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/model/login.model';
import { AuthServiceService } from 'src/app/shared/service/auth-service.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  login: Login;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.login = new Login();
  }

  ngOnInit(): void {
  }

  public auth(formLogin: NgForm) {
    this.login.login = formLogin.value.login;
    this.login.senha = formLogin.value.senha;
    this.authService.postLogin(this.login).subscribe(result => { console.log(result.token) });
    this.goToMain();
  };

  public goToMain(): void {
    this.router.navigate(['/main']);
  }

}
