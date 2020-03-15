import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Form } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private storage: AngularFireStorage
    ) { }
    // Variables
  @ViewChild('imageUser', null) inputImageUser: ElementRef;
  public email = ''; // Se puede llamar con [(ngModel)]="email"
  public pass = ''; // Se puede llamar con [(ngModel)]="pass"
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

  onUpload(e) {
    console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.pass)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {
        if (user) {
          user.updateProfile({
            displayName: '',
            photoURL: this.inputImageUser.nativeElement.value
          }).then (() => {
            this.onLoginRedirect();
          }).catch((error) => console.log('error', error));
        }
      });
    }).catch(err => console.log('err', err.message));
  }

  onLoginRedirect(): void { // Cambiar el redirect para cuando se logee el usuario
    this.router.navigate(['admin/list-users']);
  }

}
