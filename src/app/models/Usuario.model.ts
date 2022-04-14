export interface Usuario {
  id: number;
  login: string;
  senha: string;
  role: string;
  token?: string;
  primeiroNome: string;
  ultimoNome: string;
}
