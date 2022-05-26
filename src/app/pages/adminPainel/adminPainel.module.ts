import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AbaDashboardComponent } from "./aba-dashboard/aba-dashboard.component";
import { AbaTabelasComponent } from "./aba-tabelas/aba-tabelas.component";
import { AbaUsuariosComponent } from "./aba-usuarios/aba-usuarios.component";
import { AdminPainelRoutingModule } from "./adminPainel-routing.module";
import { AdminPainelComponent } from "./adminPainel.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AdminPainelRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  declarations: [
  ]
})
export class AdminPainelModule { }
