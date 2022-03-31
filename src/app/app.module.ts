import { DownloadTabelaCBFApi } from './apis/downloadTabelaCBF.api';
import { ImportarCBFApi } from './apis/importarCBF.api';
import { DataService } from './Services/data.service';
import { MessageService } from './Services/messages.service';
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




registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService, DataService, ImportarCBFApi, DownloadTabelaCBFApi,{ provide: NZ_I18N, useValue: pt_PT },],

  bootstrap: [AppComponent],
})
export class AppModule {}
