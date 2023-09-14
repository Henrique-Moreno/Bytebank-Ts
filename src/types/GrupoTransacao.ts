import { Transacao } from "./transactions.js";

export type GrupoTransacao = {
  label: string;
  transacoes: Transacao[];
}