import React, { useContext } from 'react';
import { User, Eye } from 'lucide-react';
import { DenunciaContext } from '../context/DenunciaContext';

const BotaoEscolha = () => {
  const { updateDenunciaData, setCurrentStep } = useContext(DenunciaContext);

  const handleSelection = (tipo) => {
    updateDenunciaData({ tipoUsuario: tipo });
    setCurrentStep('modalidade');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Bem-vindo ao Sistema de Denúncias
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Primeiro, precisamos saber qual é a sua situação para personalizar o formulário
        </p>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
        <button
          onClick={() => handleSelection('vitima')}
          className="w-full bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 border-2 border-red-200 hover:border-red-300 rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
        >
          <User className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-800 mb-2 sm:mb-3">
            Sou Vítima
          </h3>
          <p className="text-sm sm:text-base text-red-600 leading-relaxed">
            Fui diretamente afetado(a) pela situação que desejo denunciar
          </p>
        </button>

        <button
          onClick={() => handleSelection('testemunha')}
          className="w-full bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 hover:border-blue-300 rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
        >
          <Eye className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-800 mb-2 sm:mb-3">
            Sou Testemunha
          </h3>
          <p className="text-sm sm:text-base text-blue-600 leading-relaxed">
            Presenciei ou tenho conhecimento de uma situação irregular
          </p>
        </button>
      </div>
    </div>
  );
};

export default BotaoEscolha;