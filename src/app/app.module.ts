import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

// Componentes
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';

import { FormsModule } from '@angular/forms';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { AdviceComponent } from './components/enerbot/advice/advice.component';
import { BenefitComponent } from './components/enerbot/benefit/benefit.component';
import { BronzeComponent } from './components/enerbot/bronze/bronze.component';
import { ExcuseComponent } from './components/enerbot/excuse/excuse.component';
import { FeedbackComponent } from './components/enerbot/feedback/feedback.component';
import { NewAdviceComponent } from './components/enerbot/advice/new-advice/new-advice.component';
import { NewBenefitComponent } from './components/enerbot/benefit/new-benefit/new-benefit.component';
import { NewBronzeComponent } from './components/enerbot/bronze/new-bronze/new-bronze.component';
import { NewExcuseComponent } from './components/enerbot/excuse/new-excuse/new-excuse.component';
import { NewFeedbackComponent } from './components/enerbot/feedback/new-feedback/new-feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    AddQuoteComponent,
    AdviceComponent,
    BenefitComponent,
    BronzeComponent,
    ExcuseComponent,
    FeedbackComponent,
    NewAdviceComponent,
    NewBenefitComponent,
    NewBronzeComponent,
    NewExcuseComponent,
    NewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
