import { CopaDoBrasilComponent } from './copa-do-brasil/copa-do-brasil.component';
import { AppComponent } from './../../../app.component';
import { CopaNordesteSub20Component } from './copadonordeste/copaNordesteSub20/copaNordesteSub20.component';
import { CopaNordestePreCopaComponent } from './copadonordeste/copaNordestePreCopa/copaNordestePreCopa.component';
import { CopanordesteMasculinoComponent } from './copadonordeste/copanordesteMasculino/copanordesteMasculino.component';
import { CopaNodesteEliminatoriasComponent } from './copadonordeste/copaNodesteEliminatorias/copaNodesteEliminatorias.component';
import { CopadonordesteComponent } from './copadonordeste/copadonordeste.component';
import { SuperCopaSub20Component } from './supercopa/superCopaSub20/superCopaSub20.component';
import { SuperCopaSub17Component } from './supercopa/superCopaSub17/superCopaSub17.component';
import { SuperCopaMasculinoComponent } from './supercopa/superCopaMasculino/superCopaMasculino.component';
import { SuperCopaFemininaComponent } from './supercopa/superCopaFeminina/superCopaFeminina.component';
import { SupercopaComponent } from './supercopa/supercopa.component';
import { Copabrasilsub20Component } from './copa-do-brasil/copabrasilsub20/copabrasilsub20.component';
import { Copabrasilsub17Component } from './copa-do-brasil/copabrasilsub17/copabrasilsub17.component';
import { CopabrasilMasculinoComponent } from './copa-do-brasil/copabrasilMasculino/copabrasilMasculino.component';
import { CopabrasilFemininoComponent } from './copa-do-brasil/copabrasilFeminino/copabrasilFeminino.component';
import { FemininoSub16Component } from './campeonatobrasileiro/feminino-sub16/feminino-sub16.component';
import { FemininoSub18Component } from './campeonatobrasileiro/feminino-sub18/feminino-sub18.component';
import { AspirantesComponent } from './campeonatobrasileiro/aspirantes/aspirantes.component';
import { Sub17Component } from './campeonatobrasileiro/sub-17/sub-17.component';
import { Sub20Component } from './campeonatobrasileiro/sub-20/sub-20.component';
import { FemininoA2Component } from './campeonatobrasileiro/femininoA2/femininoA2.component';
import { FemininoA1Component } from './campeonatobrasileiro/FemininoA1/FemininoA1.component';
import { FemininoComponent } from './campeonatobrasileiro/Feminino/Feminino.component';
import { SerieDComponent } from './campeonatobrasileiro/serie-d/serie-d.component';
import { SerieCComponent } from './campeonatobrasileiro/serie-c/serie-c.component';
import { SerieBComponent } from './campeonatobrasileiro/serie-b/serie-b.component';
import { SerieAComponent } from './campeonatobrasileiro/serie-a/serie-a.component';
import { CampeonatobrasileiroComponent } from './campeonatobrasileiro/campeonatobrasileiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
        children: [
          {
            path: 'copabrasilFeminino',
            component: CopabrasilFemininoComponent,
          },
          {
            path: 'copabrasilMasculino',
            component: CopabrasilMasculinoComponent,
          },
          { path: 'copabrasilSub17', component: Copabrasilsub17Component },
          { path: 'coprabrasilSub20', component: Copabrasilsub20Component },
        ],
      },
      {
        path: 'supercopa',
        component: SupercopaComponent,
        children: [
          { path: 'supercopaFeminina', component: SuperCopaFemininaComponent },
          {
            path: 'supercopaMasculino',
            component: SuperCopaMasculinoComponent,
          },
          { path: 'supercopaSub17', component: SuperCopaSub17Component },
          { path: 'supercopaSub20', component: SuperCopaSub20Component },
        ],
      },
      {
        path: 'copadonordeste',
        component: CopadonordesteComponent,
        children: [
          {
            path: 'copanordesteEliminatorias',
            component: CopaNodesteEliminatoriasComponent,
          },
          {
            path: 'copanordesteMasculino',
            component: CopanordesteMasculinoComponent,
          },
          {
            path: 'copanordestePreCopa',
            component: CopaNordestePreCopaComponent,
          },
          { path: 'copanordesteSub20', component: CopaNordesteSub20Component },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabelasRoutingModule {}
