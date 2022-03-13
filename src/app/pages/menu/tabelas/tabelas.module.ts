import { TabelasComponent } from './tabelas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelasRoutingModule } from './tabelas-routing.module';
import { SerieCComponent } from './campeonatobrasileiro/serie-c/serie-c.component';

@NgModule({
  declarations: [
    SerieCComponent,
  ],
  imports: [CommonModule, TabelasRoutingModule],
})
export class TabelasModule {}
