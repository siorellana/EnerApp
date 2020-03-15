import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { BenefitInterface } from 'src/app/models/benefit';
import { UserInterface } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { BronzeInterface } from 'src/app/models/bronze';

@Component({
  selector: 'app-new-bronze',
  templateUrl: './new-bronze.component.html',
  styleUrls: ['./new-bronze.component.scss']
})
export class NewBronzeComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private authService: AuthService) { }

  book: BronzeInterface = {
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
      }
    });
  }

  onGuardar(myForm: NgForm) {
    this.book.creador = this.user.email;
    const fechaNow = Date.now();
    this.book.ts = fechaNow;
    this.dataApiService.addbronze(this.book);
    this.book.tipo = 'Bronze';


  }

}