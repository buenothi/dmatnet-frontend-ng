import { Component } from '@angular/core';
import { Login } from '../shared/model/login.model';
import { AuthServiceService } from '../shared/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login;

  constructor(
    private authService: AuthServiceService,
  ) {
    this.login = new Login();
    this.login.login = 'thiago_bueno';
    this.login.senha = 'Tgb#6878';

  }

  public auth() {
    this.authService.postLogin(this.login).subscribe(result => {console.log(result.token)});
  };
}
