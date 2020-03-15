import { UserInterface } from './../../models/user';
import { FrasesInterface } from './../../models/frases';
import { BookInterface } from './../../models/books';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private authService: AuthService) { }

  book: BookInterface = {
    texto: '',
    creador: '',
    ts: '',
    tipo: '',
  };

  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: ''
  };

  public providerId = 'null';

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.providerData[0].displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    });
  }

  onGuardar(myForm: NgForm) {
    this.book.creador = this.user.email;
    const fechaNow = Date.now();
    this.book.ts = fechaNow;
    this.dataApiService.addBook(this.book);


  }



}
