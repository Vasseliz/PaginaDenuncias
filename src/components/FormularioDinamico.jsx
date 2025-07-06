import React, { useContext, useState } from "react";
import { ArrowLeft } from 'lucide-react';
import { DenunciaContext } from '../context/DenunciaContext';

const FormularioDinamico = ({ 
  perguntas, 
  titulo = "Formulário de Denúncia",
}) => {
  const { setCurrentStep } = useContext(DenunciaContext);
  const [respostas, setRespostas] = useState({});
  const [erros, setErros] = useState({});
  const onBack = () => setCurrentStep("modalidade");
  // const onSubmit = (respostas) {
  // updateDenunciaData
  //   fetch
  // }
  const handleInputChange = (id, valor) => {
    setRespostas(prev => ({
      ...prev,
      [id]: valor
    }));
    
    // Remove erro quando campo é preenchido
    if (erros[id]) {
      setErros(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };

  const validarFormulario = () => {
    const novosErros = {};
    
    perguntas.forEach(pergunta => {
      if (pergunta.required && !respostas[pergunta.id]) {
        novosErros[pergunta.id] = 'Este campo é obrigatório';
      }
    });
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = () => {
    if (validarFormulario()) {
      // Atualiza o context com os dados do formulário
      setDenunciaData(prev => ({
        ...prev,
        formData: respostas
      }));
      
      // Avança para a próxima etapa (termos)
      setCurrentStep('termos');
      
      // Chama callback adicional se fornecido
      // if (onSubmit) {
      //   onSubmit(respostas);
      // }
    }
  };

  const renderCampo = (pergunta) => {
    const { id, label, type, options, required } = pergunta;
    const valor = respostas[id] || '';
    const temErro = erros[id];

    const classesComuns = `w-full p-3 border rounded-lg transition-colors duration-200 ${
      temErro 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
    } focus:outline-none focus:ring-2`;

    switch (type) {
      case 'text':
        return (
          <div key={id} className="mb-6">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              id={id}
              type="text"
              value={valor}
              onChange={(e) => handleInputChange(id, e.target.value)}
              className={classesComuns}
              placeholder={`Digite ${label.toLowerCase()}`}
            />
            {temErro && (
              <p className="mt-1 text-sm text-red-600">{temErro}</p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={id} className="mb-6">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
              id={id}
              value={valor}
              onChange={(e) => handleInputChange(id, e.target.value)}
              className={`${classesComuns} resize-vertical min-h-[100px]`}
              placeholder={`Digite ${label.toLowerCase()}`}
              rows="4"
            />
            {temErro && (
              <p className="mt-1 text-sm text-red-600">{temErro}</p>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div key={id} className="mb-6">
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-3">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </legend>
              <div className="space-y-2">
                {options.map((opcao, index) => (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={id}
                      value={opcao}
                      checked={Array.isArray(valor) ? valor.includes(opcao) : valor === opcao}
                      onChange={(e) => {
                        if (e.target.checked) {
                          // Se for múltipla escolha, adiciona à array
                          if (Array.isArray(valor)) {
                            handleInputChange(id, [...valor, opcao]);
                          } else {
                            handleInputChange(id, [opcao]);
                          }
                        } else {
                          // Remove da seleção
                          if (Array.isArray(valor)) {
                            handleInputChange(id, valor.filter(v => v !== opcao));
                          } else {
                            handleInputChange(id, '');
                          }
                        }
                      }}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-gray-700">{opcao}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            {temErro && (
              <p className="mt-1 text-sm text-red-600">{temErro}</p>
            )}
          </div>
        );

      default:
        return (
          <div key={id} className="mb-6">
            <p className="text-red-500">Tipo de campo não suportado: {type}</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          {titulo}
        </h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {perguntas.map((pergunta) => (
              <div key={pergunta.id} className={pergunta.type === 'textarea' ? 'lg:col-span-2' : ''}>
                {renderCampo(pergunta)}
              </div>
            ))}
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Continuar
              </button>
              <button
                onClick={() => {
                  setRespostas({});
                  setErros({});
                }}
                className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Limpar
              </button>
            </div>
          </div>
        </div>
        
        { (
          <div className="flex justify-center mt-6">
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
    </div>
  );
};
export default FormularioDinamico



