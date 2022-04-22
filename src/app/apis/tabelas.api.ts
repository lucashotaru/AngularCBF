import { Injectable } from '@angular/core';
import { TabelasModel } from '../models/Tabelas.model';
import { DataService } from '../Services/data.service';

@Injectable()
export class TabelasAPI {
  constructor(private data: DataService) {}


  public buscaTabela(ano: number, serie: string): Promise<TabelasModel[]> {
    return this.data.get<TabelasModel[]>(`api/Tabelas/tabela-principal/${ano}/${serie}`);
  }

}
