// src/app/parcerias/page.tsx
import React from 'react';

export default function Parcerias() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Empresas Parceiras</h1>
      <ul className="mt-8 w-4/5 bg-white shadow-md rounded-lg p-4">
        {/* Lista de parceiros */}
        <li className="p-2 border-b">Empresa 1</li>
        <li className="p-2 border-b">Empresa 2</li>
        <li className="p-2">Empresa 3</li>
      </ul>
    </main>
  );
}
