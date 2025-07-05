import React, { useState } from 'react';
import { FileText, User, Eye, Lock, ArrowLeft, ArrowRight, Shield, Upload, X } from 'lucide-react';

// Terceira página - Formulário completo responsivo
const FormularioCompleto = () => {
  const [formData, setFormData] = useState({});
  const [arquivos, setArquivos] = useState([]);
  const [denunciaData] = useState({
    tipoUsuario: 'vitima', // ou 'testemunha'
    tipoDenuncia: 'aberta' // ou 'fechada'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));
    setArquivos(prev => [...prev, ...newFiles]);
  };

  const removeFile = (id) => {
    setArquivos(prev => prev.filter(file => file.id !== id));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = () => {
    // Aqui você salvaria os dados e prosseguiria
    console.log('Dados do formulário:', formData);
    console.log('Arquivos:', arquivos);
    alert('Formulário enviado com sucesso!');
  };

  const handleBack = () => {
    // Voltar para a página anterior
    console.log('Voltando para modalidade');
  };

  const isVitima = denunciaData.tipoUsuario === 'vitima';
  const isAberta = denunciaData.tipoDenuncia === 'aberta';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Formulário de Denúncia
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">
            {isVitima ? 'Vítima' : 'Testemunha'}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
            {isAberta ? 'Identificada' : 'Anônima'}
          </span>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Dados pessoais - apenas para denúncias abertas */}
        {isAberta && (
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4 sm:mb-6 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Dados Pessoais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo *</label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.nome || ''}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.telefone || ''}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CPF</label>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.cpf || ''}
                  onChange={(e) => handleInputChange('cpf', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data de nascimento</label>
                <input
                  type="date"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.dataNascimento || ''}
                  onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Informações da denúncia */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-red-200">
          <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-4 sm:mb-6 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Informações da Denúncia
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título da denúncia *</label>
              <input
                type="text"
                placeholder="Resuma brevemente o que deseja denunciar"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                value={formData.titulo || ''}
                onChange={(e) => handleInputChange('titulo', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoria *</label>
              <select
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                value={formData.categoria || ''}
                onChange={(e) => handleInputChange('categoria', e.target.value)}
              >
                <option value="">Selecione uma categoria</option>
                <option value="corrupcao">Corrupção</option>
                <option value="assedio">Assédio</option>
                <option value="discriminacao">Discriminação</option>
                <option value="violencia">Violência</option>
                <option value="fraude">Fraude</option>
                <option value="negligencia">Negligência</option>
                <option value="abuso-poder">Abuso de Poder</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição detalhada *</label>
              <textarea
                placeholder="Descreva detalhadamente a situação, incluindo datas, locais e pessoas envolvidas..."
                rows="6"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                value={formData.descricao || ''}
                onChange={(e) => handleInputChange('descricao', e.target.value)}
              />
              <div className="mt-1 text-xs text-gray-500">
                {formData.descricao ? formData.descricao.length : 0} caracteres
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Local onde ocorreu</label>
                <input
                  type="text"
                  placeholder="Endereço ou descrição do local"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.local || ''}
                  onChange={(e) => handleInputChange('local', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data e hora</label>
                <input
                  type="datetime-local"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                  value={formData.dataOcorrencia || ''}
                  onChange={(e) => handleInputChange('dataOcorrencia', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pessoas envolvidas</label>
              <textarea
                placeholder="Informe nomes, cargos ou descrições das pessoas envolvidas na situação..."
                rows="3"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                value={formData.pessoasEnvolvidas || ''}
                onChange={(e) => handleInputChange('pessoasEnvolvidas', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Perguntas específicas para vítimas */}
        {isVitima && (
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 sm:p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-4 sm:mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Informações Específicas para Vítimas
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Já procurou ajuda anteriormente?
                </label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="procurouAjuda"
                      value="sim"
                      checked={formData.procurouAjuda === 'sim'}
                      onChange={(e) => handleInputChange('procurouAjuda', e.target.value)}
                      className="mr-2 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="text-sm sm:text-base">Sim</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="procurouAjuda"
                      value="nao"
                      checked={formData.procurouAjuda === 'nao'}
                      onChange={(e) => handleInputChange('procurouAjuda', e.target.value)}
                      className="mr-2 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="text-sm sm:text-base">Não</span>
                  </label>
                </div>
              </div>

              {formData.procurouAjuda === 'sim' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Onde procurou ajuda anteriormente?
                  </label>
                  <textarea
                    placeholder="Descreva onde e quando procurou ajuda..."
                    rows="3"
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                    value={formData.ondeProcurouAjuda || ''}
                    onChange={(e) => handleInputChange('ondeProcurouAjuda', e.target.value)}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Testemunhas</label>
                <textarea
                  placeholder="Há testemunhas? Se sim, descreva quem são e como podem ser contatadas..."
                  rows="4"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                  value={formData.testemunhas || ''}
                  onChange={(e) => handleInputChange('testemunhas', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Há risco de retaliação?
                </label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riscoRetaliacao"
                      value="sim"
                      checked={formData.riscoRetaliacao === 'sim'}
                      onChange={(e) => handleInputChange('riscoRetaliacao', e.target.value)}
                      className="mr-2 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="text-sm sm:text-base">Sim</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riscoRetaliacao"
                      value="nao"
                      checked={formData.riscoRetaliacao === 'nao'}
                      onChange={(e) => handleInputChange('riscoRetaliacao', e.target.value)}
                      className="mr-2 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="text-sm sm:text-base">Não</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riscoRetaliacao"
                      value="nao-sei"
                      checked={formData.riscoRetaliacao === 'nao-sei'}
                      onChange={(e) => handleInputChange('riscoRetaliacao', e.target.value)}
                      className="mr-2 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="text-sm sm:text-base">Não sei</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload de arquivos */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border border-green-200">
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-4 sm:mb-6 flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Anexar Evidências (Opcional)
          </h3>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center">
              <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-sm text-green-700 mb-2">
                Arraste arquivos aqui ou clique para selecionar
              </p>
              <p className="text-xs text-green-600 mb-4">
                Aceitos: PDF, DOC, DOCX, JPG, PNG, MP4, MP3 (máx. 10MB cada)
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mp3"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4 mr-2" />
                Selecionar Arquivos
              </label>
            </div>

            {arquivos.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-green-800">Arquivos selecionados:</h4>
                {arquivos.map((arquivo) => (
                  <div key={arquivo.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{arquivo.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(arquivo.size)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(arquivo.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 sm:p-6 rounded-xl border border-purple-200">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-4 sm:mb-6">
            Informações Adicionais
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Consequências ou danos sofridos
              </label>
              <textarea
                placeholder="Descreva as consequências ou danos que a situação causou..."
                rows="4"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                value={formData.consequencias || ''}
                onChange={(e) => handleInputChange('consequencias', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Outras observações
              </label>
              <textarea
                placeholder="Alguma informação adicional que considere relevante..."
                rows="3"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                value={formData.observacoes || ''}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Qual resolução você espera?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Investigação completa',
                  'Medidas disciplinares',
                  'Reparação/indenização',
                  'Mudança de políticas',
                  'Proteção/segurança',
                  'Apenas registro'
                ].map((opcao) => (
                  <label key={opcao} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.resolucaoEsperada?.includes(opcao) || false}
                      onChange={(e) => {
                        const current = formData.resolucaoEsperada || [];
                        const updated = e.target.checked
                          ? [...current, opcao]
                          : current.filter(item => item !== opcao);
                        handleInputChange('resolucaoEsperada', updated);
                      }}
                      className="mr-2 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm sm:text-base">{opcao}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Confirmação final */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl border border-gray-200">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="confirmacao"
              checked={formData.confirmacao || false}
              onChange={(e) => handleInputChange('confirmacao', e.target.checked)}
              className="mt-1 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="confirmacao" className="text-sm sm:text-base text-gray-700">
              <span className="font-medium">Confirmo que:</span> Todas as informações fornecidas são verdadeiras e 
              estou ciente de que fornecer informações falsas pode ter consequências legais. 
              Entendo que esta denúncia será investigada de acordo com os procedimentos internos.
            </label>
          </div>
        </div>

        {/* Botões responsivos */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium order-2 sm:order-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.confirmacao}
            className={`flex items-center justify-center px-8 py-3 rounded-lg transition-colors font-medium order-1 sm:order-2 ${
              formData.confirmacao
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioCompleto;