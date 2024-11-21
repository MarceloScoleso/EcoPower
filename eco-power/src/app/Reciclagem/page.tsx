'use client'; 

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import Image from 'next/image'; 

const ReciclagemPage = () => {
  const [pontosEstimativa, setPontosEstimativa] = useState<number>(0);
  const [quantidade, setQuantidade] = useState<string>('');
  const [tipoLixo, setTipoLixo] = useState<string>('bateria-celular');
  const [foto, setFoto] = useState<File | null>(null);

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

  useEffect(() => {
    calcularPontos(quantidade, tipoLixo);
  }, [quantidade, tipoLixo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-500 flex flex-col">
    
      <Header /> 

      <div className="flex-grow max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Ganhe pontos fazendo o bem ao planeta!</h1>

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
              src={URL.createObjectURL(foto)}
              alt="Imagem do item reciclado"
              className="mt-2 max-w-full rounded-lg"
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
      </div>

      
     <Footer />
    </div>
  );
};

export default ReciclagemPage;
