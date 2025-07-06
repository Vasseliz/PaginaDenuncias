import { Eye, FileText, Lock, Shield, User } from "lucide-react";
import React from "react";

export const criarConfiguracoesTelas = (updateDenunciaData, setCurrentStep, denunciaData) => ({
  tipo: {
    titulo: "Bem-vindo ao Sistema de Denúncias",
    subtitulo: "Primeiro, precisamos saber qual é a sua situação para personalizar o formulário",
    opcoes: [
      {
        valor: "vitima",
        titulo: "Sou Vítima",
        descricao: "Fui diretamente afetado(a) pela situação que desejo denunciar",
        icone: <User className="w-full h-full" />,
        gradiente: "from-red-50 to-red-100",
        gradienteHover: "from-red-100 to-red-200",
        borda: "border-red-200",
        bordaHover: "border-red-300",
        corIcone: "text-red-600",
        corTitulo: "text-red-800",
        corTexto: "text-red-600",
      },
      {
        valor: "testemunha",
        titulo: "Sou Testemunha",
        descricao: "Presenciei ou tenho conhecimento de uma situação irregular",
        icone: <Eye className="w-full h-full" />,
        gradiente: "from-blue-50 to-blue-100",
        gradienteHover: "from-blue-100 to-blue-200",
        borda: "border-blue-200",
        bordaHover: "border-blue-300",
        corIcone: "text-blue-600",
        corTitulo: "text-blue-800",
        corTexto: "text-blue-600",
      },
    ],
    onSelecao: (tipo) => {
      updateDenunciaData({ tipoUsuario: tipo });
      setCurrentStep("modalidade");
    },
  },

  modalidade: {
    titulo: "Modalidade da Denúncia",
    subtitulo: `Como ${denunciaData.tipoUsuario === "vitima" ? "vítima" : "testemunha"}, escolha como deseja proceder`,
    iconeHeader: <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
    opcoes: [
      {
        valor: "aberta",
        titulo: "Denúncia Identificada",
        descricao: "Meus dados pessoais serão incluídos para possível contato durante a investigação",
        icone: <FileText className="w-full h-full" />,
        gradiente: "from-green-50 to-green-100",
        gradienteHover: "from-green-100 to-green-200",
        borda: "border-green-200",
        bordaHover: "border-green-300",
        corIcone: "text-green-600",
        corTitulo: "text-green-800",
        corTexto: "text-green-600",
        badge: {
          icone: <Shield className="w-4 h-4 mr-1" />,
          texto: "Dados protegidos",
          corTexto: "text-green-700",
          corFundo: "bg-green-200",
        },
      },
      {
        valor: "fechada",
        titulo: "Denúncia Anônima",
        descricao: "Minha identidade será mantida em sigilo absoluto durante todo o processo",
        icone: <Lock className="w-full h-full" />,
        gradiente: "from-purple-50 to-purple-100",
        gradienteHover: "from-purple-100 to-purple-200",
        borda: "border-purple-200",
        bordaHover: "border-purple-300",
        corIcone: "text-purple-600",
        corTitulo: "text-purple-800",
        corTexto: "text-purple-600",
        badge: {
          icone: <Lock className="w-4 h-4 mr-1" />,
          texto: "100% anônimo",
          corTexto: "text-purple-700",
          corFundo: "bg-purple-200",
        },
      },
    ],
    onSelecao: (tipo) => {
      updateDenunciaData({ tipoDenuncia: tipo });
      setCurrentStep("formulario");
    },
    showBackButton: true,
    onBack: () => setCurrentStep("tipo"),
  },
});