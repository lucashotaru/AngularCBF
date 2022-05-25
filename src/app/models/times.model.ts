import { Temporada } from './temporada.models';

export interface Times{
  id: number|string;
  nome: string;
  titulo: string,
  ataque: number;
  meioCampo: number;
  defesa: number;
  temporada: Temporada;
  temporadaId: number;
}
