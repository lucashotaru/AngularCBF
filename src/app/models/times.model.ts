import { Temporada } from './temporada.models';

export interface Times{
  id: number|string;
  nome: string;
  ataque: number;
  meioCampo: number;
  defesa: number;
  temporada: Temporada;
  temporadaId: number;
}
