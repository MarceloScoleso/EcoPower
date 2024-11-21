import React from 'react';
import MapaInterativo from '../../components/MapaInterativo';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 

export default function PontosColeta() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      {/* Adicionando o Header */}
      <Header />

      {/* Conteúdo principal */}
      <section className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-green-600 text-center">Pontos de Coleta</h1>
        <p className="text-xl mt-4 text-gray-700 text-center max-w-3xl">
          Encontre um ponto de coleta próximo a você para descartar seus resíduos eletrônicos de forma responsável.
        </p>

        <div className="mt-8 w-full md:w-4/5 h-[60vh] md:h-[70vh] bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
          <MapaInterativo />
        </div>
      </section>

      {/* Adicionando o Footer */}
      <Footer />
    </main>
  );
}
