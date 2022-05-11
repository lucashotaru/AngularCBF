import { Times } from './times.model';

export interface Temporada{
  id: number|string;
  ano: string;
  times: Times[];
}
