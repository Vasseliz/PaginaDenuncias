import React, { useContext } from 'react';
import { FileText, Lock, Shield, ArrowLeft } from 'lucide-react';
import { DenunciaContext } from '../context/DenunciaContext';

const FormularioDinamico = () => {
  const { denunciaData, updateDenunciaData, setCurrentStep } = useContext(DenunciaContext);

  const handleSelection = (tipo) => {
    updateDenunciaData({ tipoDenuncia: tipo });
    setCurrentStep('formulario');
  };

  const handleBack = () => {
    setCurrentStep('tipo');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4">
          <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Modalidade da Denúncia
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Como <span className="font-semibold text-blue-600">
            {denunciaData.tipoUsuario === 'vitima' ? 'vítima' : 'testemunha'}
          </span>, escolha como deseja proceder
        </p>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
        <button
          onClick={() => handleSelection('aberta')}
          className="w-full bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-2 border-green-200 hover:border-green-300 rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
        >
          <FileText className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-800 mb-2 sm:mb-3">
            Denúncia Identificada
          </h3>
          <p className="text-sm sm:text-base text-green-600 leading-relaxed">
            Meus dados pessoais serão incluídos para possível contato durante a investigação
          </p>
          <div className="mt-4 inline-flex items-center text-xs sm:text-sm text-green-700 bg-green-200 px-3 py-1 rounded-full">
            <Shield className="w-4 h-4 mr-1" />
            Dados protegidos
          </div>
        </button>

        <button
          onClick={() => handleSelection('fechada')}
          className="w-full bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-2 border-purple-200 hover:border-purple-300 rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
        >
          <Lock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-800 mb-2 sm:mb-3">
            Denúncia Anônima
          </h3>
          <p className="text-sm sm:text-base text-purple-600 leading-relaxed">
            Minha identidade será mantida em sigilo absoluto durante todo o processo
          </p>
          <div className="mt-4 inline-flex items-center text-xs sm:text-sm text-purple-700 bg-purple-200 px-3 py-1 rounded-full">
            <Lock className="w-4 h-4 mr-1" />
            100% anônimo
          </div>
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleBack}
          className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </button>
      </div>
    </div>
  );
};

export default FormularioDinamico;