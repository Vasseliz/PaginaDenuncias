import React, { useContext } from 'react';
import { DenunciaContext } from '../context/DenunciaContext';

const ProgressBar = () => {
  const { currentStep } = useContext(DenunciaContext);

  const steps = [
    { id: 'tipo', label: 'Tipo', fullLabel: 'Tipo de Usuário' },
    { id: 'modalidade', label: 'Modo', fullLabel: 'Modalidade' },
    { id: 'formulario', label: 'Form', fullLabel: 'Formulário' },
    { id: 'termos', label: 'Termos', fullLabel: 'Termos' },
    { id: 'finalizar', label: 'Fim', fullLabel: 'Finalizar' }
  ];

  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="mb-6 sm:mb-8">
      <div className="sm:hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Etapa {currentIndex + 1} de {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {steps[currentIndex]?.fullLabel}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm lg:text-base font-bold transition-all duration-300 ${index <= currentIndex ? 'bg-blue-600 text-white shadow-lg transform scale-110' : 'bg-gray-200 text-gray-500'}`}>
                  {index + 1}
                </div>
                <span className={`mt-2 text-xs lg:text-sm font-medium transition-colors ${index <= currentIndex ? 'text-blue-600' : 'text-gray-500'}`}>
                  <span className="sm:hidden">{step.label}</span>
                  <span className="hidden sm:inline">{step.fullLabel}</span>
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 lg:mx-4 transition-all duration-500 ${index < currentIndex ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;