import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/Login/Login.component';
import { RegistroComponent } from './auth/Registro/Registro.component';
import { AbaDashboardComponent } from './pages/adminPainel/aba-dashboard/aba-dashboard.component';
import { AbaTabelasComponent } from './pages/adminPainel/aba-tabelas/aba-tabelas.component';
import { AbaUsuariosComponent } from './pages/adminPainel/aba-usuarios/aba-usuarios.component';
import { AdminPainelComponent } from './pages/adminPainel/adminPainel.component';
import { EstatisticaComponent } from './pages/estatistica/estatistica.component';
import { HomeComponent } from './pages/Shared/home/home.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tabelas' },
  {
    path: '',
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
        path: 'admin',
        component: AdminPainelComponent,
        children:[
          {path: '', component: AbaDashboardComponent},
          {path: 'dashboard', component: AbaDashboardComponent},
          {path: 'usuarios', component: AbaUsuariosComponent},
          {path: "upload-download", component: AbaTabelasComponent}
        ]
      },
      {
        path: 'registro',
        pathMatch: 'full',
        component: AdminPainelComponent,
      },
      {
        path: 'admin',
        component: AdminPainelComponent,
        children:[
          {path: '', component: AbaDashboardComponent},
          {path: 'dashboard', component: AbaDashboardComponent},
          {path: 'usuarios', component: AbaUsuariosComponent},
          {path: "upload-download", component: AbaTabelasComponent}
        ]
      }
    ],
  },
  {
    path: 'registro',
    pathMatch: 'full',
    component: RegistroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
