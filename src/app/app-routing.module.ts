import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        path: 'registro',
        pathMatch: 'full',
        component: AdminPainelComponent,
      },
      {
        path: 'admin',
        component: AdminPainelComponent,
        children: [
          {
            path: "",
            loadChildren: () => import ("./pages/adminPainel/adminPainel.module").then(m => m.AdminPainelModule)
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
