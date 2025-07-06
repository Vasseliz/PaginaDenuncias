export const sequenciaPerguntas = {
  vitima: {
    aberta: [
      "tituloDenuncia",
      "nomeVitima",
      "emailVitima",
      "nomeDenunciado",
      "fazParteEmpresa",
      "temTestemunha",
      "resumoOcorrencia"
    ],
    fechada: [
      "tituloDenuncia",
      "nomeDenunciado",
      "fazParteEmpresa",
      "temTestemunha",
      "resumoOcorrencia"
    ]
  },
  testemunha: {
    aberta: [
      "tituloDenuncia",
      "nomeTestemunha",
      "emailTestemunha",
      "nomeVitima",
      "nomeDenunciado",
      "fazParteEmpresa",
      "resumoOcorrencia"
    ],
    fechada: [
      "tituloDenuncia",
      "nomeDenunciado",
      "fazParteEmpresa",
      "resumoOcorrencia"
    ]
  }
};
