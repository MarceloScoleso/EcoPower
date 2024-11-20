// src/app/pontos-coleta/page.tsx
import React from 'react';

export default function PontosColeta() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Pontos de Coleta</h1>
      <p className="text-lg mt-4 text-gray-700">
        Encontre um ponto de coleta próximo a você.
      </p>
      <div className="mt-8 w-4/5 h-3/5 bg-gray-300 flex items-center justify-center rounded-lg">
        {/* Simulação de mapa */}
        <span>Mapa interativo será implementado aqui</span>
      </div>
    </main>
  );
}
