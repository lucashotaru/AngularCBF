import { Component, OnInit } from '@angular/core';
import { TabelasAPI } from 'src/app/apis/tabelas.api';
import { TabelasModel } from 'src/app/models/Tabelas.model';
import { SeriesModel } from '../../models/SeriesModel';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SerieALista } from 'src/app/enum/SerieALista';
import { BrasaoTime } from 'src/app/models/brasaoTime';
import { BrasaoTimeLista } from 'src/app/enum/BrasaoTimeLista';


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
  TabelaPrincipalData!: TabelasModel [];
  TabelaPrincipal!: TabelasModel[];
  colecao = 20;
  brasaoTime: BrasaoTime[] = BrasaoTimeLista;


  tipo!: string;
  seriesLista!: SeriesModel [];
  serieSelecionada!: string;
  constructor(private api: TabelasAPI, private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tipo = "campeonato-brasileiro"
    this.serieSelecionada = "serie-a"
    this.filtroTipo();
    this.buscarTabela()
    console.log(this.brasaoTime)
  }

  filtroTipo()
  {
    if(this.tipo == "campeonato-brasileiro")
    {
      this.seriesLista = SerieALista;
    }
    if(this.tipo == "copa-brasil")
    {
      this.seriesLista = [];
    }
  }

  async buscarTabela()
  {
    this.TabelaPrincipalData  = await this.http.get<TabelasModel[]>(`https://localhost:7126/api/Tabelas/tabela-principal/${this.ano}/${this.serieSelecionada}`).toPromise<TabelasModel[]>()
    this.mudaPagina()
    this.colecao = this.TabelaPrincipalData.length
  }

  mudaPagina() {
    this.posicao = 10;
    this.TabelaPrincipal = this.TabelaPrincipalData
      .map((time, i) => ({id: i + 1, ...time}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
