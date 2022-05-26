import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbaDashboardComponent } from './aba-dashboard/aba-dashboard.component';
import { AbaTabelasComponent } from './aba-tabelas/aba-tabelas.component';
import { AbaUsuariosComponent } from './aba-usuarios/aba-usuarios.component';
import { AdminPainelComponent } from './adminPainel.component';

const adminRotas: Routes = [
  { path: "dashboard", component: AbaDashboardComponent },
  { path: "tabelas", component: AbaTabelasComponent },
  { path: "usuarios", component: AbaUsuariosComponent },
];


@NgModule({
  imports: [RouterModule.forChild(adminRotas)],
  exports: [RouterModule],
})
export class AdminPainelRoutingModule {}
