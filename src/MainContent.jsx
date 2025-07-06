import React, { useContext } from 'react';
import { User, Eye, FileText, Lock, Shield } from 'lucide-react';
import { DenunciaContext } from './context/DenunciaContext';
import BotaoGenerico from './components/BotaoGenerico';
// import configuracoesTelas from './ConfiguracoesTelas';  
import { criarConfiguracoesTelas } from "./Configuracoes/BotoesConfig";
import { obterPerguntasFormulario } from './Configuracoes/PerguntasConfig';



const MainContent = () => {
  const { currentStep, denunciaData, updateDenunciaData, setCurrentStep } = useContext(DenunciaContext);

const renderStep = () => {

    switch (currentStep) {
      case "tipo":
      case "modalidade":
         return <Botoes />;
      case "formulario":
        <FormularioDinamico/>
        break;

      default:
        break;
    }



    function Botoes () {
const configuracoesTelas = criarConfiguracoesTelas(updateDenunciaData, setCurrentStep, denunciaData);
const config = configuracoesTelas[currentStep]
    
    if (!config) {
      return <BotaoGenerico {...configuracoesTelas.tipo} />;
    }

    return <BotaoGenerico {...config} />;
    }

  };





  return renderStep();
};

export default MainContent;



