import { DownloadTabelaCBFApi } from './apis/downloadTabelaCBF.api';
import { ImportarCBFApi } from './apis/importarCBF.api';
import { DataService } from './Services/data.service';
import { MessageService } from './Services/messages.service';
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
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { LoginComponent } from './pages/Shared/Login/Login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/Shared/home/home.component';
import { HeaderComponent } from './pages/Shared/Header/Header.component';
import { RegistroComponent } from './pages/Shared/Registro/Registro.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { TabsModule } from 'ngx-bootstrap/tabs';





registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EstatisticaComponent,
    LoginComponent,
    RegistroComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgbModule,
    NgxNavbarModule,
    TabsModule
  ],
  providers: [MessageService, DataService, ImportarCBFApi, DownloadTabelaCBFApi,{ provide: NZ_I18N, useValue: pt_PT },],

  bootstrap: [AppComponent],
})
export class AppModule {}
