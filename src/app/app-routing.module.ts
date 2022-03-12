import { CopaNordesteSub20Component } from './pages/menu/tabelas/copadonordeste/copaNordesteSub20/copaNordesteSub20.component';
import { CopanordesteMasculinoComponent } from './pages/menu/tabelas/copadonordeste/copanordesteMasculino/copanordesteMasculino.component';
import { CopaNodesteEliminatoriasComponent } from './pages/menu/tabelas/copadonordeste/copaNodesteEliminatorias/copaNodesteEliminatorias.component';
import { SuperCopaSub20Component } from './pages/menu/tabelas/supercopa/superCopaSub20/superCopaSub20.component';
import { SuperCopaSub17Component } from './pages/menu/tabelas/supercopa/superCopaSub17/superCopaSub17.component';
import { SuperCopaMasculinoComponent } from './pages/menu/tabelas/supercopa/superCopaMasculino/superCopaMasculino.component';
import { SuperCopaFemininaComponent } from './pages/menu/tabelas/supercopa/superCopaFeminina/superCopaFeminina.component';
import { Copabrasilsub20Component } from './pages/menu/tabelas/copa-do-brasil/copabrasilsub20/copabrasilsub20.component';
import { Copabrasilsub17Component } from './pages/menu/tabelas/copa-do-brasil/copabrasilsub17/copabrasilsub17.component';
import { CopabrasilMasculinoComponent } from './pages/menu/tabelas/copa-do-brasil/copabrasilMasculino/copabrasilMasculino.component';
import { CopabrasilFemininoComponent } from './pages/menu/tabelas/copa-do-brasil/copabrasilFeminino/copabrasilFeminino.component';
import { EstatisticasJogadoresComponent } from './pages/menu/estatisticas/estatisticasJogadores/estatisticasJogadores.component';
import { EstatisticasTimeComponent } from './pages/menu/estatisticas/estatisticasTime/estatisticasTime.component';
import { FemininoSub16Component } from './pages/menu/tabelas/campeonatobrasileiro/feminino-sub16/feminino-sub16.component';
import { FemininoSub18Component } from './pages/menu/tabelas/campeonatobrasileiro/feminino-sub18/feminino-sub18.component';
import { AspirantesComponent } from './pages/menu/tabelas/campeonatobrasileiro/aspirantes/aspirantes.component';
import { Sub17Component } from './pages/menu/tabelas/campeonatobrasileiro/sub-17/sub-17.component';
import { Sub20Component } from './pages/menu/tabelas/campeonatobrasileiro/sub-20/sub-20.component';
import { FemininoA2Component } from './pages/menu/tabelas/campeonatobrasileiro/femininoA2/femininoA2.component';
import { FemininoA1Component } from './pages/menu/tabelas/campeonatobrasileiro/FemininoA1/FemininoA1.component';
import { FemininoComponent } from './pages/menu/tabelas/campeonatobrasileiro/Feminino/Feminino.component';
import { SerieDComponent } from './pages/menu/tabelas/campeonatobrasileiro/serie-d/serie-d.component';
import { SerieCComponent } from './pages/menu/tabelas/campeonatobrasileiro/serie-c/serie-c.component';
import { SerieBComponent } from './pages/menu/tabelas/campeonatobrasileiro/serie-b/serie-b.component';
import { TransmissoesComponent } from './pages/menu/transmissoes/transmissoes.component';
import { NoticiasComponent } from './pages/menu/noticias/noticias.component';
import { CopadonordesteComponent } from './pages/menu/tabelas/copadonordeste/copadonordeste.component';
import { SupercopaComponent } from './pages/menu/tabelas/supercopa/supercopa.component';
import { CopaDoBrasilComponent } from './pages/menu/tabelas/copa-do-brasil/copa-do-brasil.component';
import { SerieAComponent } from './pages/menu/tabelas/campeonatobrasileiro/serie-a/serie-a.component';
import { CampeonatobrasileiroComponent } from './pages/menu/tabelas/campeonatobrasileiro/campeonatobrasileiro.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopaNordestePreCopaComponent } from './pages/menu/tabelas/copadonordeste/copaNordestePreCopa/copaNordestePreCopa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'campeonatobrasileiro/serieA' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'campeonatobrasileiro',
        component: CampeonatobrasileiroComponent,
        children: [
          { path: 'serieA', component: SerieAComponent },
          { path: 'serieB', component: SerieBComponent },
          { path: 'serieC', component: SerieCComponent },
          { path: 'serieD', component: SerieDComponent },
          { path: 'femininocb', component: FemininoComponent },
          { path: 'femininoA1', component: FemininoA1Component },
          { path: 'femininoA2', component: FemininoA2Component },
          { path: 'sub-20', component: Sub20Component },
          { path: 'sub-17', component: Sub17Component },
          { path: 'aspirantes', component: AspirantesComponent },
          { path: 'feminino-sub18', component: FemininoSub18Component },
          { path: 'feminino-sub16', component: FemininoSub16Component },
        ],
      },
      {
        path: 'copa-do-brasil',
        component: CopaDoBrasilComponent,
        children:[
          {path: 'copabrasilFeminino', component: CopabrasilFemininoComponent},
          {path: 'copabrasilMasculino', component: CopabrasilMasculinoComponent},
          {path: 'copabrasilSub17', component: Copabrasilsub17Component},
          {path: 'coprabrasilSub20', component: Copabrasilsub20Component},
        ]
      },
      {
        path: 'supercopa',
        component: SupercopaComponent,
        children:[
          {path: 'supercopaFeminina', component: SuperCopaFemininaComponent},
          {path: 'supercopaMasculino', component: SuperCopaMasculinoComponent},
          {path: 'supercopaSub17', component: SuperCopaSub17Component},
          {path: 'supercopaSub20', component: SuperCopaSub20Component},
        ]
      },
      {
        path: 'copadonordeste',
        component: CopadonordesteComponent,
        children:[
          {path: 'copanordesteEliminatorias', component: CopaNodesteEliminatoriasComponent},
          {path: 'copanordesteMasculino', component: CopanordesteMasculinoComponent},
          {path: 'copanordestePreCopa', component: CopaNordestePreCopaComponent},
          {path: 'copanordesteSub20', component: CopaNordesteSub20Component},
        ]
      },
      {
        path: 'estatisticasTime',
        component: EstatisticasTimeComponent,
      },
      {
        path: 'estatisticasJogadores',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
