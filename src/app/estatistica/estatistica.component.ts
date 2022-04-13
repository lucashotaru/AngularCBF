import { Observable } from 'rxjs';
import { Times } from './../models/times.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import packageTimes from '../../../dados/db.json';
import $ from 'jquery';

@Component({

  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss'],

})

export class EstatisticaComponent implements OnInit {

  private listaTimes: Times[] = packageTimes.times;

  constructor(private httpClient: HttpClient) {}

  getTimes(temporada: string) {

    $('#temp-label').text('Temporada ' + temporada);

    var timesTemporada: Times[] = [];

    for(var i = 0; i < this.listaTimes.length; i++) {

      for(var j = 0; j < this.listaTimes[i].temporadas.length; j++) {

        if (this.listaTimes[i].temporadas[j] == temporada)
          timesTemporada.push(this.listaTimes[i]);

      }

    }

    timesTemporada.sort(function (a, b): number {

      if (a.nome < b.nome)
        return -1

      if (a.nome > b.nome)
        return 1

      return 0;

    });

    this.bindTimesTemporada(timesTemporada);

    // for(var i = 0; i < this.listaTimes.length; i++){

    //   var time = this.listaTimes[i];
    //   $('#btn-time' + (i+1)).find('img').remove();

    //   for(var j = 0; j < time.temporadas.length; j++){

    //     if (time.temporadas[j] == temporada)
    //       $('#btn-time' + (i+1)).append(`<img src="` + time.brasao + `" alt="` + time.nome + `"/ style="max-width: 54px;">`);
    //     else
    //       $('#btn-time' + (i+1)).append(`<img src="../../assets/img/prohibition-symbol.png" style="max-width: 54px;">`)

    //   }
    // }
  }

  bindTimesTemporada (timesTemporada: Times[]) {

    if(timesTemporada.length < 20) {

      for (var i = 0; i < 20; i++){
        $('#btn-time' + (i+1)).find('img').remove()
        $('#btn-time' + (i+1)).append(`<img src="../../assets/img/prohibition-symbol.png" alt="" style="max-width: 54px;">`)
      }

    } else {

      for (var i = 0; i < timesTemporada.length; i++) {

        $('#btn-time' + (i+1)).find('img').remove()
        $('#btn-time' + (i+1)).append(`<img src="` + timesTemporada[i].brasao + `" alt="` + timesTemporada[i].nome +`" style="max-width: 54px;">`)

      }

    }

  }

  limpar () {
    debugger;
    $('#div-img-time1').find('img').attr('src', '../../assets/img/prohibition-symbol.png');
    $('#div-img-time1').find('img').attr('alt', '');

    $('#div-img-time2').find('img').attr('src', '../../assets/img/prohibition-symbol.png');
    $('#div-img-time2').find('img').attr('alt', '');

  }

  ngOnInit(): void {

    var that = this;

    $('.btn-time').click(function () {

      if ($(this).find('img').attr('alt') != undefined || $(this).find('img').attr('alt') != null || $(this).find('img').attr('alt') != '') {

        var imgTime1 = $('#div-img-time1').find('img');
        var imgTime2 = $('#div-img-time2').find('img');
        var timeSelecionado = $(this).find('img');

        if(imgTime1.attr('alt') == undefined || imgTime1.attr('alt') == null || imgTime1.attr('alt') == '') {

          imgTime1.remove();
          $('#div-img-time1').append('<img>');
          imgTime1 = $('#div-img-time1').find('img');
          imgTime1.attr('src', String(timeSelecionado.attr('src')));
          imgTime1.attr('alt', String(timeSelecionado.attr('alt')));
          imgTime1.css('max-width', '180px');

        } else if (imgTime2.attr('alt') == undefined || imgTime2.attr('alt') == null || imgTime2.attr('alt') == '') {

          imgTime2.remove();
          $('#div-img-time2').append('<img>');
          imgTime2 = $('#div-img-time2').find('img');
          imgTime2.attr('src', String(timeSelecionado.attr('src')));
          imgTime2.attr('alt', String(timeSelecionado.attr('alt')));
          imgTime2.css('max-width', '180px');

        }

      }

    })

  }
}
