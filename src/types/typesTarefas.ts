export enum DificuldadeType {
  FACIL = "facil",
  MEDIO = "medio",
  DIFICIL = "dificil",
}

export enum StatusType {
  PENDENTE = "Pendente",
  EM_ANDAMENTO = "Em andamento",
  CONCLUIDO = "Concluido",
}

export interface typesTarefas {
  id: number;
  descricao: string;
  dificuldade: DificuldadeType;
  status: StatusType;
  dataTarefa: string;
  horaTarefa: number;
}
export const Dificuldade = {
  FACIL: 10,
  MEDIO: 20,
  DIFICIL: 30,
} as const;