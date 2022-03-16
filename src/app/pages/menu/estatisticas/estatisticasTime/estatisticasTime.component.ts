import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticasTime',
  templateUrl: './estatisticasTime.component.html',
  styleUrls: ['./estatisticasTime.component.scss'],
})
export class EstatisticasTimeComponent {
  array = [1, 2, 3, 4];

  inputValue?: string;
  filteredOptions: string[] = [];
  options = [
    'America - MG',
    'America Fc - MG',
    'Athletico Paranaense - PR',
    'Atlético - GO',
    'Atlético - MG',
    'Atletico - PR',
    'Atlético Mineiro - MG',
    'Atlético Paranaense - PR',
    'Avaí - SC',
    'Bahia - BA',
    'Botafogo - RJ',
    'Ceará - CE',
    'Chapecoense - SC',
    'Corinthians - SP',
    'Coritiba - PR',
    'Criciuma - SC',
    'Cruzeiro - MG',
    'Csa - AL',
    'Cuiabá - MT',
    'Figueirense - SC',
    'Flamengo - RJ',
    'Fluminense - RJ',
    'Fortaleza - CE',
    'Goiás - GO',
    'Grêmio - RS',
    'Internacional - RS',
    'Joinville - SC',
    'Juventude - RS',
    'Náutico - PE',
    'Palmeiras - SP',
    'Paraná - PR',
    'Ponte Preta - SP',
    'Portuguesa - SP',
    'Red Bull Bragantino - SP',
    'Santa Cruz - PE',
    'Santos - SP',
    'São Paulo - SP',
    'Sport - PE',
    'Vasco da Gama - RJ',
    'Vitória - BA',
  ];

  constructor() {
    this.filteredOptions = this.options;
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}
