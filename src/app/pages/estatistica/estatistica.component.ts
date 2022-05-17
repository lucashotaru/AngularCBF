import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { EstatisticaService } from 'src/app/Services/estatistica.service';
import { Times } from 'src/app/models/times.model';
import { Temporada } from 'src/app/models/temporada.models';

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
  hidFirstTime!:Times;
  hidSecTime!:Times;

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

    $('#hid_temporada').change(function () {
      //Apagar hidFirstTime e hidSecTime
    });

  }

  showTimes(temporadaId:number|string, temporadaAno:string|number){

    this.hidTemporada = temporadaId;
    this.hidAno = temporadaAno;
    $('#hid_temporada').val(this.hidTemporada);

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
    } else if (that.hidSecTime == undefined || that.hidSecTime == null) {
      that.hidSecTime = time;
    }

  }

}

// export class EstatisticaComponent implements OnInit {

//   private listaTimes: Times[] = packageTimes.times;

//   constructor(private service:EstatisticaService) {}

//   getTimes(temporada: string) {

//     $('#temp-label').text('Temporada ' + temporada);

//     $('#img-time1').attr('src', '../../assets/img/prohibition-symbol.png');
//     $('#img-time1').attr('alt', '');
//     $('#img-time2').attr('src', '../../assets/img/prohibition-symbol.png');
//     $('#img-time2').attr('alt', '');

//     var timesTemporada: Times[] = [];

//     for(var i = 0; i < this.listaTimes.length; i++) {

//       for(var j = 0; j < this.listaTimes[i].temporadas.length; j++) {

//         if (this.listaTimes[i].temporadas[j] == temporada)
//           timesTemporada.push(this.listaTimes[i]);

//       }

//     }

//     timesTemporada.sort(function (a, b): number {

//       if (a.nome < b.nome)
//         return -1

//       if (a.nome > b.nome)
//         return 1

//       return 0;

//     });

//     this.bindTimesTemporada(timesTemporada);

//   }

//   bindTimesTemporada (timesTemporada: Times[]) {

//     if(timesTemporada.length < 20) {

//       for (var i = 0; i < 20; i++){
//         $('#btn-time' + (i+1)).find('img').remove()
//         $('#btn-time' + (i+1)).append(`<img src="../../assets/img/prohibition-symbol.png" alt="" style="max-width: 54px;">`)
//       }

//     } else {

//       for (var i = 0; i < timesTemporada.length; i++) {

//         $('#btn-time' + (i+1)).find('img').remove()
//         $('#btn-time' + (i+1)).append(`<img src="` + timesTemporada[i].brasao + `" alt="` + timesTemporada[i].nome +`" style="max-width: 54px;">`)

//       }

//     }

//   }

//   limpar () {

//     $('#div-img-time1').find('img').attr('src', '../../assets/img/prohibition-symbol.png');
//     $('#div-img-time1').find('img').attr('alt', '');

//     $('#div-img-time2').find('img').attr('src', '../../assets/img/prohibition-symbol.png');
//     $('#div-img-time2').find('img').attr('alt', '');

//   }

//   ngOnInit(): void {

//     var that = this;

//     $('.btn-time').click(function () {

//       if ($(this).find('img').attr('alt') != undefined || $(this).find('img').attr('alt') != null || $(this).find('img').attr('alt') != '') {

//         var imgTime1 = $('#div-img-time1').find('img');
//         var imgTime2 = $('#div-img-time2').find('img');
//         var timeSelecionado = $(this).find('img');

//         if(imgTime1.attr('alt') == undefined || imgTime1.attr('alt') == null || imgTime1.attr('alt') == '') {

//           imgTime1.remove();
//           $('#div-img-time1').append('<img id="img-time1">');
//           imgTime1 = $('#div-img-time1').find('img');
//           imgTime1.attr('src', String(timeSelecionado.attr('src')));
//           imgTime1.attr('alt', String(timeSelecionado.attr('alt')));
//           imgTime1.css('max-width', '180px');

//         } else if (imgTime2.attr('alt') == undefined || imgTime2.attr('alt') == null || imgTime2.attr('alt') == '') {

//           if (timeSelecionado.attr('alt') != imgTime1.attr('alt')) {

//             imgTime2.remove();
//             $('#div-img-time2').append('<img id="img-time2">');
//             imgTime2 = $('#div-img-time2').find('img');
//             imgTime2.attr('src', String(timeSelecionado.attr('src')));
//             imgTime2.attr('alt', String(timeSelecionado.attr('alt')));
//             imgTime2.css('max-width', '180px');

//           } else {

//             var errorTemplate = `<div id="mensagemErro" class="alert alert-danger alert-dismissible fade show" role="alert">
//                                   Os times selecionados devem ser diferentes
//                                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                   </button>
//                                 </div>`;

//             $('#mensagemErro').find('div').remove();
//             $('#mensagemErro').append(errorTemplate);

//           }

//         } else if (imgTime1.attr('alt') != 'undefined' || imgTime2.attr('alt') != 'undefined') {

//           var errorTemplate = `<div id="mensagemErro" class="alert alert-danger alert-dismissible fade show" role="alert">
//                                 Selecione apenas 2 times por vez
//                                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                   <span aria-hidden="true">&times;</span>
//                                 </button>
//                               </div>`;

//           $('#mensagemErro').find('div').remove();
//           $('#mensagemErro').append(errorTemplate);

//         }

//       }

//     })

//   }
// }
