'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CadastroPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuarioExistente = localStorage.getItem(email);
    if (usuarioExistente) {
      setErro('Email já cadastrado');
      return;
    }

    const dadosUsuario = { nome, email, senha };
    localStorage.setItem(email, JSON.stringify(dadosUsuario));
    localStorage.setItem('email', email);

    router.push('/login');
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Cadastro</h2>
        {erro && <p className="text-red-500 text-center mb-4">{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Senha</label>
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
        <p className="mt-4 text-center text-gray-800">
          Já tem uma conta? <a href="/login" className="text-blue-500 hover:text-blue-600">Faça login</a>
        </p>
        <button
          onClick={() => router.push('/')}
          className="w-full mt-4 p-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-300"
        >
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default CadastroPage;
