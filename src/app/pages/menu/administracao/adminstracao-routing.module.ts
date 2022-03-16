import { DownloadTabelasComponent } from './downloadTabelas/downloadTabelas.component';
import { UploadTabelasComponent } from './uploadTabelas/uploadTabelas.component';
import { AppComponent } from './../../../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin/uploadTabelas' },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'uploadTabelas',
        component: UploadTabelasComponent,
      },
      {
        path: 'downloadTabelas',
        component: DownloadTabelasComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracaoRoutingModule {}