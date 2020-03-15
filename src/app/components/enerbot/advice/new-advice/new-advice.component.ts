import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AdviceInterface } from 'src/app/models/advice';
import { UserInterface } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-advice',
  templateUrl: './new-advice.component.html',
  styleUrls: ['./new-advice.component.scss']
})
export class NewAdviceComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private authService: AuthService) { }

  book: AdviceInterface = {
    texto: '',
    creador: '',
    ts: '',
    tipo: ''
  };

  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: ''
  };

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.providerData[0].displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.book.tipo = 'Advice';
      }
    });
  }

  onGuardar(myForm: NgForm) {
    this.book.creador = this.user.email;
    const fechaNow = Date.now();
    this.book.ts = fechaNow;
    this.dataApiService.addadvice(this.book);


  }

}
