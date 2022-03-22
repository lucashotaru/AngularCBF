import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  listOfData = [
    {
      posicao: 1,
      nome: 'Bragantino',
      Pontos: 32,
      Vitorias: 5,
      Derrotas: 4,
      Empates: 1,
    },
  ];

}
