// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ViewFriendsComponent } from './components/view-friends/view-friends.component';
import { NavComponent } from './components/nav/nav.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';
import { LoginComponent } from './components/login/login.component'; 
import { LogoutComponent } from './components/logout/logout.component'; 
import { ViewPostsComponent } from './components/view-posts/view-posts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'view-friends', component: ViewFriendsComponent },
  { path: 'create-post', component: CreatePostComponent},
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'search', component: SearchComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'update-cat', component: UpdateCatComponent},
  { path: 'friends-posts', component: ViewPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }