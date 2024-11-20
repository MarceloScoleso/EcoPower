// src/app/impacto/page.tsx
import React from 'react';

export default function Impacto() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Calculadora de Impacto</h1>
      <p className="text-lg mt-4 text-gray-700">
        Descubra o impacto ambiental das suas ações.
      </p>
      <div className="mt-8 w-4/5 p-4 bg-white shadow-md rounded-lg">
        {/* Formulário da calculadora */}
        <form className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Quantidade de lixo reciclado (em kg)"
            className="p-2 border rounded-md w-full"
          />
          <button className="bg-green-600 text-white py-2 px-4 rounded-md">
            Calcular Impacto
          </button>
        </form>
      </div>
    </main>
  );
}
