import React from 'react';

// Função principal para renderizar campos
export const renderizarCampos = (perguntas, formData, handleInputChange) => {
  return Object.entries(perguntas).map(([key, config]) => {
    return renderizarCampo(key, config, formData, handleInputChange);
  });
};

// Função para renderizar um campo específico
const renderizarCampo = (key, config, formData, handleInputChange) => {
  const { id, label, type, placeholder, required, options } = config;
  const value = formData[id] || '';

  // Classe CSS base para os campos
  const baseInputClass = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";
  const containerClass = "mb-4";

  switch (type) {
    case 'text':
    case 'email':
      return (
        <div key={id} className={containerClass}>
          <label htmlFor={id} className={labelClass}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={(e) => handleInputChange(id, e.target.value)}
            placeholder={placeholder}
            required={required}
            className={baseInputClass}
          />
        </div>
      );

    case 'textarea':
      return (
        <div key={id} className={containerClass}>
          <label htmlFor={id} className={labelClass}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={(e) => handleInputChange(id, e.target.value)}
            placeholder={placeholder}
            required={required}
            rows={4}
            className={`${baseInputClass} resize-vertical`}
          />
        </div>
      );

    case 'checkbox':
      return (
        <div key={id} className={containerClass}>
          <label className={labelClass}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name={id}
                  value={option}
                  checked={Array.isArray(value) ? value.includes(option) : value === option}
                  onChange={(e) => handleCheckboxChange(id, option, e.target.checked, formData, handleInputChange)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      );

    case 'radio':
      return (
        <div key={id} className={containerClass}>
          <label className={labelClass}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name={id}
                  value={option}
                  checked={value === option}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      );

    case 'select':
      return (
        <div key={id} className={containerClass}>
          <label htmlFor={id} className={labelClass}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <select
            id={id}
            name={id}
            value={value}
            onChange={(e) => handleInputChange(id, e.target.value)}
            required={required}
            className={baseInputClass}
          >
            <option value="">Selecione uma opção</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
};

// Função auxiliar para lidar com checkboxes
const handleCheckboxChange = (fieldId, option, checked, formData, handleInputChange) => {
  const currentValue = formData[fieldId] || [];
  
  if (Array.isArray(currentValue)) {
    // Multiple checkbox handling
    const newValue = checked
      ? [...currentValue, option]
      : currentValue.filter(item => item !== option);
    handleInputChange(fieldId, newValue);
  } else {
    // Single checkbox handling (like radio)
    handleInputChange(fieldId, checked ? option : '');
  }
};

// Exemplo de componente usando a função
export const FormularioDinamico = ({ perguntas, formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      {renderizarCampos(perguntas, formData, handleInputChange)}
    </div>
  );
};

// Exemplo de uso no componente principal
/*
const MeuComponente = () => {
  const [formData, setFormData] = useState({});
  const [denunciaData, setDenunciaData] = useState({
    tipoUsuario: 'Vitima',
    tipoDenuncia: 'aberta',
    formData: {},
    termosAceitos: false,
  });

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const perguntas = obterPerguntasFormulario(denunciaData.tipoUsuario, denunciaData.tipoDenuncia);

  return (
    <form>
      <FormularioDinamico 
        perguntas={perguntas}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </form>
  );
};
*/