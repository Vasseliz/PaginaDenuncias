import React, { createContext, useState } from 'react';

export const DenunciaContext = createContext();

export const DenunciaProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState('tipo');
  const [denunciaData, setDenunciaData] = useState({
    tipoUsuario: '',
    tipoDenuncia: '',
    formData: {},
    termosAceitos: false,
  });

  const updateDenunciaData = (newData) => {
    setDenunciaData((prev) => ({ ...prev, ...newData }));
  };

  const contextValue = {
    currentStep,
    setCurrentStep,
    denunciaData,
    updateDenunciaData,
  };

  return (
    <DenunciaContext.Provider value={contextValue}>
      {children}
    </DenunciaContext.Provider>
  );
};