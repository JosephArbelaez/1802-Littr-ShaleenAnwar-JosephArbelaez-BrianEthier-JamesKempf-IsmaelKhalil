// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ViewFriendsComponent } from './components/view-friends/view-friends.component';
import { NavComponent } from './components/nav/nav.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';
import { LoginComponent } from './components/login/login.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'view-friends', component: ViewFriendsComponent },
  { path: 'create-post', component: CreatePostComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'update-cat', component: UpdateCatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }