import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';
import {HomeComponent} from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }