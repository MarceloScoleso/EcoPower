'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Alterando para importar de 'next/navigation' no Next.js 13+

const CadastroPage: React.FC = () => {
  const [nome, setNome] = useState('');  // Adicionando o estado para o nome
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [isClient, setIsClient] = useState(false);  // Variável de estado para verificar se está no lado cliente
  const router = useRouter();  // Usando useRouter

  useEffect(() => {
    setIsClient(true);  // Garantir que o código é executado no cliente
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificando se já existe o usuário
    const usuarioExistente = localStorage.getItem(email);
    if (usuarioExistente) {
      setErro('Email já cadastrado');
      return;
    }

    // Salvando dados no localStorage (em um banco de dados real, isso seria diferente)
    const dadosUsuario = { nome, email, senha };
    localStorage.setItem(email, JSON.stringify(dadosUsuario));

    // Salvar o email também separadamente para facilitar a verificação no login
    localStorage.setItem('email', email);  // Armazenando o email separado para o login

    router.push('/login'); // Navegação após cadastro
  };

  if (!isClient) {
    return null;  // Não renderiza o componente até o lado do cliente ser ativado
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500"> {/* Cor de fundo igual ao login */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Cadastro</h2>
        {erro && <p className="text-red-500 text-center mb-4">{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Nome</label> {/* Cor mais escura para o texto */}
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Email</label> {/* Cor mais escura para o texto */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Senha</label> {/* Cor mais escura para o texto */}
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800" 
              required
            />
          </div>
          <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
            Cadastrar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-800"> {/* Cor mais escura para o texto do link */}
          Já tem uma conta? <a href="/login" className="text-blue-500 hover:text-blue-600">Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default CadastroPage;

