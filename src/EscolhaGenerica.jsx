import React, { useContext } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DenunciaContext } from './context/DenunciaContext';

const EscolhaGenerica = ({ 
  titulo, 
  subtitulo, 
  opcoes, 
  onSelecao, 
  showBackButton = false, 
  onBack,
  iconeHeader 
}) => {
  const { denunciaData } = useContext(DenunciaContext);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
      <div className="text-center mb-8 sm:mb-12">
        {iconeHeader && (
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4">
            {iconeHeader}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          {titulo}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitulo}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
        {opcoes.map((opcao, index) => (
          <button
            key={index}
            onClick={() => onSelecao(opcao.valor)}
            className={`w-full bg-gradient-to-br ${opcao.gradiente} hover:${opcao.gradienteHover} border-2 ${opcao.borda} hover:${opcao.bordaHover} rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${opcao.corIcone} mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              {opcao.icone}
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${opcao.corTitulo} mb-2 sm:mb-3`}>
              {opcao.titulo}
            </h3>
            <p className={`text-sm sm:text-base ${opcao.corTexto} leading-relaxed`}>
              {opcao.descricao}
            </p>
            {opcao.badge && (
              <div className={`mt-4 inline-flex items-center text-xs sm:text-sm ${opcao.badge.corTexto} ${opcao.badge.corFundo} px-3 py-1 rounded-full`}>
                {opcao.badge.icone}
                {opcao.badge.texto}
              </div>
            )}
          </button>
        ))}
      </div>

      {showBackButton && (
        <div className="flex justify-center">
          <button
            onClick={onBack}
            className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </button>
        </div>
      )}
    </div>
  );
};

export default EscolhaGenerica;
