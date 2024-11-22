'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuario = localStorage.getItem(email);
    if (usuario) {
      const dadosUsuario = JSON.parse(usuario);
      if (dadosUsuario.senha === senha) {
        router.push('/perfil');
      } else {
        setErro('Senha incorreta');
      }
    } else {
      setErro('Usuário não encontrado');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Login</h2>
        {erro && <p className="text-red-500 text-center mb-4">{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900"
              required
            />
          </div>
          <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-800">
          Não tem uma conta? <a href="/cadastro" className="text-blue-500 hover:text-blue-600">Cadastre-se</a>
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

export default LoginPage;
