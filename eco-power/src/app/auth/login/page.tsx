// src/app/(auth)/login/page.tsx
import React from 'react';

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Login</h1>
      <form className="mt-8 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="p-2 border rounded-md w-80"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="p-2 border rounded-md w-80"
        />
        <button className="bg-green-600 text-white py-2 px-4 rounded-md">
          Entrar
        </button>
      </form>
    </main>
  );
}
