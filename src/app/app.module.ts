import { DownloadTabelaCBFApi } from './apis/downloadTabelaCBF.api';
import { MessageService } from './Services/messages.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EstatisticaComponent } from './pages/estatistica/estatistica.component';
import { LoginComponent } from './auth/Login/Login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/Shared/home/home.component';
import { HeaderComponent } from './pages/Shared/Header/Header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { DataService } from './Services/data.service';
import { AuthAPI } from './apis/auth.api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './auth/auth.interceptor';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { TabelasAPI } from './apis/tabelas.api';
import { CarouselModule } from 'ngx-bootstrap/carousel';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EstatisticaComponent,
    LoginComponent,
    TabelasComponent
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
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [
    MessageService,
    DataService,
    DownloadTabelaCBFApi,
    AuthAPI,
    TabelasAPI,
    { provide: NZ_I18N, useValue: pt_PT },
    authInterceptorProviders
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
