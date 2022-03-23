import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabelas } from 'src/app/models/Tabelas.model';
import { CopaNordesteSub20Component } from '../../copadonordeste/copaNordesteSub20/copaNordesteSub20.component';
import { SeriaAService } from './seriaA.service';

interface Person {
  Posicao: number;
  NomeTime: string;
  Pontos: number;
  Vitorias: number;
  Derrotas: number;
}


@Component({
  selector: 'app-serie-a',
  templateUrl: './serie-a.component.html',
  styleUrls: ['./serie-a.component.scss']
})
export class SerieAComponent implements OnInit {
  title = 'Tabelas';
  listaTabelas: any

  constructor(private serieAService: SeriaAService, private httpClient: HttpClient) {

  }
  ngOnInit(){
    this.fetchData();
  }

  private async fetchData(){
    this.listaTabelas = await this.httpClient.get('https://localhost:7056/api/Cards').toPromise();
  }
}
