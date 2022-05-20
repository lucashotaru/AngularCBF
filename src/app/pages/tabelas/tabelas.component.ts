import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TabelasModel } from 'src/app/models/Tabelas.model';
import { SeriesModel } from '../../models/SeriesModel';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { CampeonatoBrasileiro } from 'dados/CampeonatoBrasileiro';
import { BrasaoTimeModel } from 'src/app/models/brasaoTime';
import { DataModel } from 'src/app/models/DataModel';
import { DataLista } from 'dados/DataLista';
import { CopadoBrasil } from 'dados/CopadoBrasil';
import { Supercopa } from 'dados/Supercopa';
import { TabelaJogosRecentesModel } from 'src/app/models/tabelaJogosRecentes';
import { BrasaoTimeLista } from 'dados/BrasaoTimeLista';
import { CardJogadorModel } from 'src/app/models/CardJogadorModel';
import { CardJogadorLista } from 'dados/CardJogadorLista';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss'],
  providers: [NgbCarouselConfig]
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
  cardJogadorLista: CardJogadorModel[] = CardJogadorLista;
  nomeJogadorAtualCard!: String;
  tipo!: string;
  serieSelecionada!: string;
  corTexto = "text-white";
  showNavigationIndicators = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.tipo = "campeonato-brasileiro"
    this.serieSelecionada = "serie-a"
    this.filtroTipo();''
    this.buscarTabela();
    this.tabelaRecentes();
  }

  async retorno(){

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
