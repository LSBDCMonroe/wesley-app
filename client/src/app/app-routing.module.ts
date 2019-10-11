import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  {path: 'signup', component: SignupComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }