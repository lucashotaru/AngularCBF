import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/Login/Login.component';
import { RegistroComponent } from './auth/Registro/Registro.component';
import { AdminPainelComponent } from './pages/adminPainel/adminPainel.component';
import { EstatisticaComponent } from './pages/estatistica/estatistica.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/Shared/home/home.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/tabelas' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'estatisticas',
        pathMatch: 'full',
        component: EstatisticaComponent,
      },
      {
        path: 'tabelas',
        pathMatch: 'full',
        component: TabelasComponent,
      },
      {
        path: 'noticias',
        pathMatch: 'full',
        component: TabelasComponent,
      },
      {
        path: 'transmissoes',
        pathMatch: 'full',
        component: TabelasComponent,
      },
      {
        path: 'registro',
        pathMatch: 'full',
        component: AdminPainelComponent,
      },
      {
          path: "painel-admin",
          loadChildren: () =>import("./pages/adminPainel/adminPainel.module").then((m) => m.AdminPainelModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
