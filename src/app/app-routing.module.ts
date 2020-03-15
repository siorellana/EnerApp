import { AdviceComponent } from './components/enerbot/advice/advice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { BenefitComponent } from './components/enerbot/benefit/benefit.component';
import { BronzeComponent } from './components/enerbot/bronze/bronze.component';
import { ExcuseComponent } from './components/enerbot/excuse/excuse.component';
import { FeedbackComponent } from './components/enerbot/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'offers', component: OffersComponent}, // TODO: only user auth.
  // { path: 'user/:id', component: DetailsUserComponent},
  { path: 'admin/list-users', component: ListUsersComponent}, // TODO: only user auth.
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent}, // TODO: only user auth.
  { path: 'enerbot/advice', component: AdviceComponent},
  { path: 'enerbot/benefit', component: BenefitComponent},
  { path: 'enerbot/bronze', component: BronzeComponent},
  { path: 'enerbot/excuse', component: ExcuseComponent},
  { path: 'enerbot/feedback', component: FeedbackComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
