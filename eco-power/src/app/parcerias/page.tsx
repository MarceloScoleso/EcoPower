import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardParceira from './ParceiroCard'; // Importando o componente CardParceira

export default function Parcerias() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Empresas Parceiras</h1>

        {/* Usando o CardParceira para a empresa FIAP */}
        <CardParceira 
          nome="FIAP" 
          logo='/images/fiap.png' // Substitua com o caminho correto da logo
          link="https://www.fiap.com.br" // Substitua com o link real
        />
      </main>

      
      <Footer />
    </div>
  );
}