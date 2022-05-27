import { EstatisticaService } from './Services/estatistica.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './auth/auth.interceptor';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdminPainelComponent } from './pages/adminPainel/adminPainel.component';
import { AbaTabelasComponent } from './pages/adminPainel/aba-tabelas/aba-tabelas.component';
import { UploadDownloadService } from './Services/upload.service';
import { AbaDashboardComponent } from './pages/adminPainel/aba-dashboard/aba-dashboard.component';
import { AbaUsuariosComponent } from './pages/adminPainel/aba-usuarios/aba-usuarios.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';





registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EstatisticaComponent,
    LoginComponent,
    TabelasComponent,
    AdminPainelComponent,
    AbaTabelasComponent,
    AbaDashboardComponent,
    AbaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    MessageService,
    { provide: NZ_I18N, useValue: pt_PT },
    authInterceptorProviders,
    EstatisticaService,
    MessageService,
    UploadDownloadService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
