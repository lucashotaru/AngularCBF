import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import $, { data } from 'jquery';
import { EstatisticaService } from 'src/app/Services/estatistica.service';
import { Times } from 'src/app/models/times.model';
import { Temporada } from 'src/app/models/temporada.models';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({

  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss'],

})

export class EstatisticaComponent implements OnInit {

  temporadaList$!:Observable<Temporada[]>;
  timeList$!:Observable<Times[]>;
  temporadaList!:Temporada[];
  timeList!:Times[];
  timesTemporada!:Times[];
  hidTemporada!:string|number;
  hidAno!:string|number;
  hidFirstTime?:Times;
  hidSecTime?:Times;

  //Map
  temporadaMap:Map<number, string> = new Map();

  constructor(private estatisticaService:EstatisticaService) {}

  ngOnInit(): void {

    var that = this

    that.temporadaList$ = that.estatisticaService.getTemporadasList();
    that.timeList$ = that.estatisticaService.getTimesList();

    that.temporadaList$.subscribe(temporadaList => {
      that.temporadaList = temporadaList
    });

    that.timeList$.subscribe(timeList => {
      that.timeList = timeList
    });

  }

  showTimes(temporadaId:number|string, temporadaAno:string|number){

    var that = this;

    that.hidTemporada = temporadaId;
    that.hidAno = temporadaAno;
    var temporadaAux:any = $('#hid_temporada').val();
    $('#hid_temporada').val(that.hidTemporada);

    if (temporadaAux != temporadaId) {
      that.limparTimes();
    }

    var timesTemporadaAux:Times[] = [];

    for (var i = 0; i < this.timeList.length; i++) {
      var time = this.timeList[i];
      if (time.temporadaId == temporadaId){
        timesTemporadaAux.push(time);
      }
    }

    timesTemporadaAux.sort(function (a, b):any {

      if (a.nome < b.nome)
        return -1

      if (a.nome > b.nome)
        return 1

      return 0;

    });

    this.timesTemporada = timesTemporadaAux;

  }

  selectTime (time:Times) {

    var that = this;

    if (that.hidFirstTime == undefined || that.hidFirstTime == null){

      that.hidFirstTime = time;

      that.showChart();

    } else if (that.hidSecTime == undefined || that.hidSecTime == null) {

      if (time == that.hidFirstTime) {
        that.sameTimeError();
        return;
      }

      that.hidSecTime = time;

      that.showChart();

    } else {

      that.exceedTeamError();

    }

  }

  showChart () {

    var that = this;

    if (that.hidFirstTime != undefined && that.hidFirstTime != null && that.hidSecTime != undefined && that.hidSecTime != null) {

      const canvas = <HTMLCanvasElement>document.getElementById('myChart')!;
      canvas.height = 250;
      const ctx = canvas.getContext('2d')!;

      const data = {
        labels: [
          'Ataque',
          'Meio Campo',
          'Defesa'
        ],
        datasets: [{
          label: that.hidFirstTime.titulo,
          data: [that.hidFirstTime.ataque, that.hidFirstTime.meioCampo, that.hidFirstTime.defesa],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: that.hidSecTime.titulo,
          data: [that.hidSecTime.ataque, that.hidSecTime.meioCampo, that.hidSecTime.defesa],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };

      const myChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            r: {
              suggestedMin: 60,
              pointLabels: {
                color: '#fff'
              },
              grid: {
                color: '#808080',
                borderColor: '#808080',
              },
              ticks: {
                color: '#808080',
                backdropColor: '#0F1014'
              }
            }
          },
          elements: {
            line: {
              borderWidth: 3
            }
          },
        }
      })

    }

  }

  limparTimes ():void {

    var that = this;

    that.hidFirstTime = undefined;
    that.hidSecTime = undefined;

  }

  sameTimeError () {

    var that = this;

    var template = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Seleção inválida!</strong>Os times selecionados não podem ser iguais.
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`

    $('#errorMessage').find('div').remove();
    $('#errorMessage').append(template);

  }

  exceedTeamError () {

    var that = this;

    var template = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Seleção inválida!</strong>Apenas dois times podem ser selecionados por vez.
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`

    $('#errorMessage').find('div').remove();
    $('#errorMessage').append(template);

  }

}
