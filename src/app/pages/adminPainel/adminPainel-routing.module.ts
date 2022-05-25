import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbaTabelasComponent } from './aba-tabelas/aba-tabelas.component';
import { AdminPainelComponent } from './adminPainel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'painel-admin' },
  {
    path: 'painel-admin',
    component: AbaTabelasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPainelRoutingModule {}
