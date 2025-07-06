import React, { useContext } from 'react';
import { DenunciaContext } from './context/DenunciaContext';
import BotaoGenerico from './components/BotaoGenerico';
import { criarConfiguracoesTelas } from "./Configuracoes/BotoesConfig";
import { obterPerguntasOrdenadas } from './Configuracoes/obterPerguntasOrdenadas';
import FormularioDinamico from "./components/FormularioDinamico"
// import FormularioDinamico



const MainContent = () => {
  const { currentStep, denunciaData, updateDenunciaData, setCurrentStep } = useContext(DenunciaContext);
  

const renderStep = () => {

    switch (currentStep) {
      case "tipo":
      case "modalidade":
         return <Botoes />;
      case "formulario":
        return <Formulario/>
        break;

      default:
        break;
    }



  function Formulario () {
    const perguntas  = obterPerguntasOrdenadas(denunciaData.tipoUsuario, denunciaData.tipoDenuncia);

    return <FormularioDinamico perguntas={perguntas} />
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



