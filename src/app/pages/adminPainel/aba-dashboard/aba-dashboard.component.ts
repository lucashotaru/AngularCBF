import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-aba-dashboard',
  templateUrl: './aba-dashboard.component.html',
  styleUrls: ['./aba-dashboard.component.scss'],
})
export class AbaDashboardComponent implements OnInit {
  dataUltimaAtualizacao = '27/05/2022'
  @ViewChild('meuCanvas', { static: true }) elemento: ElementRef;

  constructor() {}

  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: '2021',
            data: [
              { x: 'janeiro', y: 20 },
              { x: 'janeiro', y: 10 },
              { x: '2017-01', y: 20 },
              { x: '2017-02', y: 10 },
              { x: '2017-03', y: 20 },
              { x: '2017-04', y: 10 },
            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
          },
          {
            label: '2020',
            data: [
              { x: '2016-11', y: 20 },
              { x: '2016-12', y: 10 },
              { x: '2017-01', y: 20 },
              { x: '2017-02', y: 10 },
              { x: '2017-03', y: 20 },
              { x: '2017-04', y: 10 },
            ],
            fill: true,
            backgroundColor: 'rgba(190, 200, 50, 0.2)',
            borderColor: 'rgb(190, 200, 132)',
            pointBackgroundColor: 'rgb(190, 200, 50)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(190, 200, 50)',
          },
        ],
      },
      options: {
        animation: false,
      },
    });
  }
}
