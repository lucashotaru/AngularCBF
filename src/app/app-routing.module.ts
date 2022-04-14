import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/Login/Login.component';
import { PerfilComponent } from './auth/Perfil/Perfil.component';
import { RegistroComponent } from './auth/Registro/Registro.component';
import { HeaderComponent } from './pages/Shared/Header/Header.component';
import { HomeComponent } from './pages/Shared/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'header', component:  HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
