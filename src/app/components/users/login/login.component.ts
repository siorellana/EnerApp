import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email = ''; // Se puede llamar con [(ngModel)]="email"
  public pass = ''; // Se puede llamar con [(ngModel)]="pass"

  ngOnInit() {
  }

  onLogin(): void { // Hace el login con mail y pass en el servicio auth
    this.authService.loginEmailUser(this.email, this.pass)
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void { // Hace el login con Google en el servicio auth
    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLogout() { // Log Out del usuario
    this.authService.logoutUser();
  }

  onLoginRedirect(): void { // Cambiar el redirect para cuando se logee el usuario
    this.router.navigate(['admin/list-users']);
  }

}
