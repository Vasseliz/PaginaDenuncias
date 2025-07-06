
export const perguntasComuns = {
  tituloDenuncia: {
    id: "tituloDenuncia",
    label: "Título da denúncia",
    type: "text",
    placeholder: "Descreva brevemente o motivo da denúncia",
    required: true,
  },
  resumoOcorrencia: {
    id: "resumoOcorrencia",
    label: "Resumo da Ocorrência",
    type: "textarea",
    placeholder: "Descreva os fatos com detalhes",
    required: true,
  },
  fazParteEmpresa: {
    id: "fazParteEmpresa",
    label: "Faz parte da empresa?",
    type: "checkbox",
    options: ["Sim", "Não"],
    required: true,
  },
};


export const perguntasEspecificas = {
    Vitima: {
    aberta: {
        nomeVitima: {
        id: "nomeVitima",
        label: "Nome da Vítima",
        type: "text",
        placeholder: "Digite seu nome",
        required: true,
        },
      emailVitima: {
        id: "emailVitima",
        label: "E-mail da Vítima",
        type: "email",
        placeholder: "seu.email@exemplo.com",
        required: true,
      },
      nomeDenunciado: {
        id: "nomeDenunciado",
        label: "Nome do Denunciado",
        type: "text",
        placeholder: "Digite o nome da pessoa denunciada",
        required: true,
      },
    },
    fechada: {
      nomeDenunciado: {
        id: "nomeDenunciado",
        label: "Nome do Denunciado",
        type: "text",
        placeholder: "Digite o nome da pessoa denunciada",
        required: true,
      },
    },
  },
  Testemunha: {
    aberta: {
      nomeTestemunha: {
        id: "nomeTestemunha",
        label: "Nome da Testemunha",
        type: "text",
        placeholder: "Digite seu nome",
        required: true,
      },
      emailTestemunha: {
        id: "emailTestemunha",
        label: "E-mail da Testemunha",
        type: "email",
        placeholder: "seu.email@exemplo.com",
        required: true,
      },
      nomeVitima: {
        id: "nomeVitima",
        label: "Nome da Vítima",
        type: "text",
        placeholder: "Digite o nome da vítima",
        required: true,
      },
      nomeDenunciado: {
        id: "nomeDenunciado",
        label: "Nome do Denunciado",
        type: "text",
        placeholder: "Digite o nome da pessoa denunciada",
        required: true,
      },
      ehTestemunha: {
        id: "ehTestemunha",
        label: "Testemunha?",
        type: "checkbox",
        options: ["Sim", "Não"],
        required: true,
      },
    },
    fechada: {
      ehTestemunha: {
        id: "ehTestemunha",
        label: "Testemunha?",
        type: "checkbox",
        options: ["Sim", "Não"],
        required: true,
      },
    },
  },
};

export const obterPerguntasFormulario = (tipoUsuario, tipoDenuncia) => {
  const perguntasEspecificasUsuario = perguntasEspecificas[tipoUsuario]?.[tipoDenuncia] || {};
  
  return {
    ...perguntasComuns,
    ...perguntasEspecificasUsuario,
  };
};