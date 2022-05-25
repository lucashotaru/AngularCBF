import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UploadDownloadService } from 'src/app/Services/upload.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TabelasModel } from 'src/app/models/Tabelas.model';
import { TabelaJogosRecentesModel } from 'src/app/models/tabelaJogosRecentes';
import { BrasaoTimeLista } from 'dados/BrasaoTimeLista';
import { BrasaoTimeModel } from 'src/app/models/brasaoTime';
import { DataModel } from 'src/app/models/DataModel';
import { SeriesModel } from 'src/app/models/SeriesModel';
import { DataLista } from 'dados/DataLista';
import { CardJogadorModel } from 'src/app/models/CardJogadorModel';
import { CardJogadorLista } from 'dados/CardJogadorLista';
import { CampeonatoBrasileiro } from 'dados/CampeonatoBrasileiro';
import { CopadoBrasil } from 'dados/CopadoBrasil';
import { Supercopa } from 'dados/Supercopa';


export interface ProgressStatus {
  status: ProgressStatusEnum;
  percentage?: number;
}

export enum ProgressStatusEnum {
  START,
  COMPLETE,
  IN_PROGRESS,
  ERROR,
}
@Component({
  selector: 'app-aba-tabelas',
  templateUrl: './aba-tabelas.component.html',
  styleUrls: ['./aba-tabelas.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AbaTabelasComponent implements OnInit{
  tipo: string;
  serie: string;

  tipoSelecionado: string;
  serieSelecionada: string;

  seriesLista!: SeriesModel [];
  nomeJogadorAtualCard!: String;
  corTexto = "text-white";


  @Input() public disabled: boolean;
  @Output() public uploadStatus: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;

  ngOnInit(): void {
  }


  constructor(private service: UploadDownloadService, config: NgbModalConfig, private modalService: NgbModal) {
    this.uploadStatus = new EventEmitter<ProgressStatus>();
    config.backdrop = 'static';
    config.keyboard = false;
  }

  public upload(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadStatus.emit({status: ProgressStatusEnum.START});
      this.service.uploadFile(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                this.uploadStatus.emit( {status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100)});
                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                this.uploadStatus.emit( {status: ProgressStatusEnum.COMPLETE});
                break;
            }
          }
        },
        error => {
          this.inputFile.nativeElement.value = '';
          this.uploadStatus.emit({status: ProgressStatusEnum.ERROR});
        }
      );
    }
  }

  open(content) {
    this.modalService.open(content);
  }

  filtroTipo(): void
  {
    if(this.tipo == "campeonato-brasileiro")
    {
      this.seriesLista = CampeonatoBrasileiro;
    }
    if(this.tipo == "copa-brasil")
    {
      this.seriesLista = CopadoBrasil;
    }
    if(this.tipo == "supercopa")
    {
      this.seriesLista = Supercopa;
    }
  }

  filtroSerie(): void{
    this.tipoSelecionado = "/"+this.tipo;
    this.serieSelecionada = "/"+this.serie;
  }
}
