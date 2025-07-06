import { todasAsPerguntas } from "./Perguntas";
import { sequenciaPerguntas } from "./sequenciaPerguntas";

export const obterPerguntasOrdenadas = (tipoUsuario, tipoDenuncia) => {

const todasPerguntas = todasAsPerguntas
  const ordem = sequenciaPerguntas[tipoUsuario]?.[tipoDenuncia] || [];

  return ordem
    .map((id) => todasPerguntas[id])
    .filter(Boolean); // remove nulos
};
