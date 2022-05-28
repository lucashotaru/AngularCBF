import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset } from 'chart.js';
import { DataLista } from 'dados/DataLista';
import { UsuarioListagemLista } from 'dados/UsuarioListagemLista';
import { data } from 'jquery';
import { dataChartJS } from 'src/app/models/dataChartJS';
import { DataModel } from 'src/app/models/DataModel';
import { UsuarioListagemModel } from 'src/app/models/UsuarioListagem.model';

@Component({
  selector: 'app-aba-dashboard',
  templateUrl: './aba-dashboard.component.html',
  styleUrls: ['./aba-dashboard.component.scss'],
})
export class AbaDashboardComponent implements OnInit {
  quantidadeDeJogosRegistrados: any;
  dataUltimaAtualizacao: any;
  dataLista: DataModel[] = DataLista;
  dataChart: any;
  contadorUsuarios: any;
  usuarios: UsuarioListagemModel[] = UsuarioListagemLista;

  @ViewChild('meuCanvas', { static: true }) elemento: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.puxarDadosParaCharts();
    this.getUltimaAtualizacaoTabela();
    this.getNumeroUsuarios();
    this.getNumeroJogos();
  }

  async puxarDadosParaCharts(): Promise<any> {
    this.dataChart = await this.http
      .get(`https://localhost:7126/api/PainelAdmin/getChartsJSDados`)
      .toPromise();
    console.log(this.dataChart);
    this.criarChartsJs(this.dataChart);
  }

  async criarChartsJs(data: any): Promise<any> {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        datasets: data,
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Quantidade de jogos por mês',
          },
        },
      },
    });
  }

  async getNumeroJogos(): Promise<any> {
    this.quantidadeDeJogosRegistrados = await this.http
      .get(`https://localhost:7126/api/PainelAdmin/getNumeroJogos`)
      .toPromise();
  }

  async getNumeroUsuarios(): Promise<any> {
    this.contadorUsuarios = await this.http
      .get(`https://localhost:7126/api/PainelAdmin/getNumeroUsuarios`)
      .toPromise();
  }
  async getUltimaAtualizacaoTabela() {
    this.dataUltimaAtualizacao = await this.http
      .get(
        `https://localhost:7126/api/PainelAdmin/getUltimaAtualizacaoTabela`,
        { responseType: 'text' }
      )
      .toPromise();
  }
}
