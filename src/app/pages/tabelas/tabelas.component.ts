import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TabelasAPI } from 'src/app/apis/tabelas.api';
import { TabelasModel } from 'src/app/models/Tabelas.model';
import { SeriesModel } from '../../models/SeriesModel';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CampeonatoBrasileiro } from 'src/app/enum/CampeonatoBrasileiro';
import { BrasaoTimeModel } from 'src/app/models/brasaoTime';
import { BrasaoTimeLista } from 'src/app/enum/BrasaoTimeLista';
import { DataModel } from 'src/app/models/DataModel';
import { DataLista } from 'src/app/enum/DataLista';
import { CopadoBrasil } from 'src/app/enum/CopadoBrasil';
import { Supercopa } from 'src/app/enum/Supercopa';
import { TabelaJogosRecentesModel } from 'src/app/models/tabelaJogosRecentes';


@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent implements OnInit {
  ano = 2021;
  posicao = 0;
  page = 1;
  pageSize = 10;
  colecao = 20;
  TabelaPrincipalData!: TabelasModel [];
  TabelaPrincipal!: TabelasModel[];
  tabelaJogosRecentes!: TabelaJogosRecentesModel[];
  brasaoTime: BrasaoTimeModel[] = BrasaoTimeLista;
  botaoDataLista: DataModel[] = DataLista;
  seriesLista!: SeriesModel [];
  tipo!: string;
  serieSelecionada!: string;
  @HostBinding("style.--nomeJogador") nomeJogador = 'red';
  corTexto = "text-white";


  constructor(private api: TabelasAPI, private http: HttpClient, private formBuilder: FormBuilder, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.tipo = "campeonato-brasileiro"
    this.serieSelecionada = "serie-a"
    this.filtroTipo();
    this.buscarTabela();
    this.tabelaRecentes();
    document.documentElement.style.setProperty("--jogador", "'hgdfifg'");
  }

  filtroTipo()
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

  async buscarTabela()
  {
    this.page = 1;
    this.TabelaPrincipalData  = await this.http.get<TabelasModel[]>(`https://localhost:7126/api/Tabelas/tabela-principal/${this.ano}/${this.serieSelecionada}`).toPromise<TabelasModel[]>()
    this.mudaPagina()
    this.colecao = this.TabelaPrincipalData.length
  }

  async tabelaRecentes(){
    this.tabelaJogosRecentes = await this.http.get<TabelaJogosRecentesModel[]>(`https://localhost:7126/api/Tabelas/tabela-jogos-recentes`).toPromise<TabelaJogosRecentesModel[]>();
  }

  mudaPagina() {
    this.posicao = 10;
    this.TabelaPrincipal = this.TabelaPrincipalData
      .map((time, i) => ({id: i + 1, ...time}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}

