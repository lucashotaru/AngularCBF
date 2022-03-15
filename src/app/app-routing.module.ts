import { AdministracaoComponent } from './pages/menu/administracao/administracao.component';
import { EstatisticasJogadoresComponent } from './pages/menu/estatisticas/estatisticasJogadores/estatisticasJogadores.component';
import { EstatisticasTimeComponent } from './pages/menu/estatisticas/estatisticasTime/estatisticasTime.component';
import { TransmissoesComponent } from './pages/menu/transmissoes/transmissoes.component';
import { NoticiasComponent } from './pages/menu/noticias/noticias.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tabelas/campeonatobrasileiro/serieA' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'tabelas', loadChildren: () => import('./pages/menu/tabelas/tabelas.module').then(m => m.TabelasModule)
      },
      {
        path: 'estatisticas/Time',
        component: EstatisticasTimeComponent,
      },
      {
        path: 'estatisticas/Jogadores',
        component: EstatisticasJogadoresComponent,
      },
      {
        path: 'noticias',
        component: NoticiasComponent,
      },
      {
        path: 'transmissoes',
        component: TransmissoesComponent,
      },
      {
        path: 'admin', component:AdministracaoComponent , loadChildren: () => import('./pages/menu/administracao/administracao.module').then(m => m.AdministracaoModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
