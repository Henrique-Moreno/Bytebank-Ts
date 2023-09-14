import { TipoTransacao } from "./type-transactions.js";

export type Transacao = {
  tipoTransacao: TipoTransacao;
  valor: number;
  data: Date;
}