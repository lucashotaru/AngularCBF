import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/Login/Login.component';
import { RegistroComponent } from './auth/Registro/Registro.component';
import { EstatisticaComponent } from './pages/estatistica/estatistica.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/Shared/home/home.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'tabelas', component: TabelasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'estatisticas', component: EstatisticaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
