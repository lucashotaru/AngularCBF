import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset } from 'chart.js';
import { DataLista } from 'dados/DataLista';
import { UsuarioListagemLista } from 'dados/UsuarioListagemLista';
import { DataModel } from 'src/app/models/DataModel';
import { UsuarioListagemModel } from 'src/app/models/UsuarioListagem.model';
import { EstatisticaService } from 'src/app/Services/estatistica.service';

@Component({
  selector: 'app-aba-dashboard',
  templateUrl: './aba-dashboard.component.html',
  styleUrls: ['./aba-dashboard.component.scss'],
})
export class AbaDashboardComponent implements OnInit {
  dataUltimaAtualizacao: any;
  contadorUsuarios: any;
  temporada: DataModel[] = DataLista;
  data: any;
  ano = 2021;
  usuarios: UsuarioListagemModel[] = UsuarioListagemLista;



  @ViewChild('meuCanvas', { static: true }) elemento: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.puxarDadosParaCharts();
    this.criarChartsJs();
    this.getUltimaAtualizacaoTabela();
    this.getNumeroUsuarios();
  }

  private puxarDadosParaCharts(): void {
    this.data = [
      {
        label: this.ano,
        data: [
          { x: 'janeiro', y: 20 },
          { x: 'fevereiro ', y: 10 },
          { x: 'março', y: 20 },
          { x: 'abril', y: 10 },
          { x: 'maio', y: 20 },
          { x: 'junho', y: 10 },
          { x: 'julho', y: 20 },
          { x: 'agosto', y: 10 },
          { x: 'setembro', y: 20 },
          { x: 'outubro', y: 10 },
          { x: 'novembro', y: 20 },
          { x: 'dezembro', y: 10 },
        ],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ]
  }

  private criarChartsJs(): void {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        datasets: [this.data[0]],
      },
      options: {
        animation: false,
      },
    });
  }

  async getNumeroUsuarios(): Promise<any>{
    this.contadorUsuarios = await this.http.get(`https://localhost:7126/api/PainelAdmin/getNumeroUsuarios`).toPromise();
  }
  async getUltimaAtualizacaoTabela() {
    this.dataUltimaAtualizacao = await this.http.get(`https://localhost:7126/api/PainelAdmin/getUltimaAtualizacaoTabela`, {responseType: 'text'}).toPromise();
  }
}
