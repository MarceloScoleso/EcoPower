'use client';

import Header from '../../components/Header'; // Importe o Header do seu componente
import Footer from '../../components/Footer'; 
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



const ProfilePage = () => {
  const [usuario, setUsuario] = useState<{ nome: string; email: string; senha: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      router.push('/login');
    } else {
      const dadosUsuario = localStorage.getItem(email);
      if (dadosUsuario) {
        setUsuario(JSON.parse(dadosUsuario));
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Header no topo */}
      <Header />

      {/* Conteúdo centralizado */}
      <main className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Perfil</h2>
          {usuario ? (
            <div className="text-center">
              <p className="mb-4 text-gray-800">Nome: {usuario.nome}</p> {/* Texto mais escuro */}
              <p className="mb-4 text-gray-800">Email: {usuario.email}</p> {/* Texto mais escuro */}
              <button
                onClick={() => {
                  localStorage.removeItem('email');
                  router.push('/login');
                }}
                className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
              >
                Sair
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-800">Carregando...</p>
          )}
        </div>
      </main>

      {/* Footer no rodapé */}
      <Footer />
    </div>
  );
};

export default ProfilePage;

