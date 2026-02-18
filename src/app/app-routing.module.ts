import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

import { RegisterComponent } from './component/register/register.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserlistComponent },
  { path: 'users/:id', component: UserdetailComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
