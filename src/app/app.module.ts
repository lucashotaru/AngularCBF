import { SupercopaComponent } from './pages/menu/tabelas/supercopa/supercopa.component';
import { CopadonordesteComponent } from './pages/menu/tabelas/copadonordeste/copadonordeste.component';
import { CopaDoBrasilComponent } from './pages/menu/tabelas/copa-do-brasil/copa-do-brasil.component';
import { TabelasComponent } from './pages/menu/tabelas/tabelas.component';
import { CampeonatobrasileiroComponent } from './pages/menu/tabelas/campeonatobrasileiro/campeonatobrasileiro.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampeonatobrasileiroComponent,
    TabelasComponent,
    CopaDoBrasilComponent,
    CopadonordesteComponent,
    SupercopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_PT }],
  bootstrap: [AppComponent],
})
export class AppModule {}
