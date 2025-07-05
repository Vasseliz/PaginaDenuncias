// src/context/DenunciaContext.jsx
import React, { createContext, useState } from 'react';

// Criação do contexto
export const DenunciaContext = createContext();

export const DenunciaProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState('tipo');
  const [denunciaData, setDenunciaData] = useState({
    tipoUsuario: '',
    tipoDenuncia: '',
    formData: {},
    termosAceitos: false
  });

  const updateDenunciaData = (newData) => {
    setDenunciaData(prev => ({ ...prev, ...newData }));
  };

  return (
    <DenunciaContext.Provider value={{
      currentStep,
      setCurrentStep,
      denunciaData,
      updateDenunciaData
    }}>
      {children}
    </DenunciaContext.Provider>
  );
};