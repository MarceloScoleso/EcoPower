'use client';  // Diretiva para indicar que este componente deve ser renderizado no lado do cliente

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'; // Importe o Header do seu componente
import Footer from '../../components/Footer'; // Importe o Footer do seu componente
import Image from 'next/image';  // Importando o componente Image do Next.js

const ReciclagemPage = () => {
  const [pontosEstimativa, setPontosEstimativa] = useState<number>(0);
  const [quantidade, setQuantidade] = useState<string>('');
  const [tipoLixo, setTipoLixo] = useState<string>('bateria-celular');
  const [foto, setFoto] = useState<File | null>(null);
  const [enviado, setEnviado] = useState<boolean>(false);

  // Tabela de pontos
  const tabelaPontos: { [key: string]: number } = {
    'bateria-celular': 50,
    'placa-circuito-eletronico': 100,
    'fonte-computador': 150,
    'monitor-computador': 200,
    'teclado': 30,
    'mouse': 20,
    'plastico-eletronico': 10,
    'cabo-energia': 25,
    'disco-rigido': 75,
    'bateria-notebook': 100,
    'processador': 200,
    'memoria-ram': 150,
    'cartucho-impressora': 20,
  };

  // Função para calcular os pontos estimados
  const calcularPontos = (quantidade: string, tipoLixo: string) => {
    if (quantidade && !isNaN(Number(quantidade)) && Number(quantidade) > 0) {
      const pontos = tabelaPontos[tipoLixo] * parseInt(quantidade);
      setPontosEstimativa(pontos);
    } else {
      setPontosEstimativa(0); // Caso a quantidade seja inválida, retorna 0 pontos
    }
  };

  const handleTipoLixoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoLixo(e.target.value);
    calcularPontos(quantidade, e.target.value); // Recalcula os pontos ao mudar o tipo de lixo
  };

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !isNaN(Number(value)) && Number(value) >= 0) {
      setQuantidade(value);
      calcularPontos(value, tipoLixo); // Recalcula os pontos ao mudar a quantidade
    }
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFoto(e.target.files[0]); // Armazena a foto para enviar posteriormente
    }
  };

  const handleEnviar = () => {
    if (foto) {
      // Simulando o envio da foto (aqui você pode integrar com a API de upload)
      console.log('Foto enviada:', foto);
      setEnviado(true); // Marca que a foto foi enviada

      // Limpa os campos após o envio
      setQuantidade('');
      setTipoLixo('bateria-celular');
      setFoto(null);
      setPontosEstimativa(0);
    }
  };

  useEffect(() => {
    calcularPontos(quantidade, tipoLixo);
  }, [quantidade, tipoLixo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-500 flex flex-col">
      {/* Header vai ocupar toda a largura */}
      <Header /> {/* Coloque o seu Header aqui */}

      <div className="flex-grow max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Troque suas ações sustentáveis por pontos!</h1>

        <div className="mb-4">
          <label htmlFor="quantidade" className="block text-lg font-medium text-gray-700 mb-2">
            Quantidade de lixo reciclado:
          </label>
          <input
            type="number"
            id="quantidade"
            placeholder="Digite a quantidade"
            value={quantidade}
            onChange={handleQuantidadeChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tipoLixo" className="block text-lg font-medium text-gray-700 mb-2">
            Tipo de objeto reciclado:
          </label>
          <select
            id="tipoLixo"
            value={tipoLixo}
            onChange={handleTipoLixoChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-800"
          >
            <option value="bateria-celular">Bateria de celular</option>
            <option value="placa-circuito-eletronico">Placa de circuito eletrônico</option>
            <option value="fonte-computador">Fonte de computador</option>
            <option value="monitor-computador">Monitor de computador</option>
            <option value="teclado">Teclado</option>
            <option value="mouse">Mouse</option>
            <option value="plastico-eletronico">Plástico de eletrônicos</option>
            <option value="cabo-energia">Cabo de energia</option>
            <option value="disco-rigido">Disco rígido (HD)</option>
            <option value="bateria-notebook">Bateria de notebook</option>
            <option value="processador">Processador</option>
            <option value="memoria-ram">Memória RAM</option>
            <option value="cartucho-impressora">Cartucho de impressora</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="foto" className="block text-lg font-medium text-gray-700 mb-2">
            Envie uma foto do item reciclado:
          </label>
          <input
            type="file"
            id="foto"
            onChange={handleFotoChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-800"
          />
        </div>

        {foto && (
          <div className="mb-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Foto Selecionada:</h3>
            <Image
              src={URL.createObjectURL(foto)} // Usando o componente Image do Next.js
              alt="Imagem do item reciclado"
              className="mt-2 max-w-full rounded-lg"
              width={300} // Largura fixa
              height={200} // Altura fixa
            />
          </div>
        )}

        <div className="mt-6">
          <p className="text-xl font-semibold text-gray-800">
            Estimativa de Pontos: <span className="text-green-500">{pontosEstimativa}</span> pontos
          </p>
          <p className="text-md text-gray-700 mt-2">
            Assim que a verificação for concluída, você provavelmente receberá <span className="font-bold">{pontosEstimativa}</span> pontos.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleEnviar}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {enviado ? 'Foto Enviada!' : 'Enviar Foto para Verificação'}
          </button>
        </div>
      </div>

      {/* Footer vai ocupar toda a largura */}
      <Footer /> {/* Coloque o seu Footer aqui */}
    </div>
  );
};

export default ReciclagemPage;
