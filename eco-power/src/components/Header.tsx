import Image from 'next/image';
import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-green-500 to-green-400 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logotipo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo1.png" alt="EcoPower" width={150} height={50} />
        </div>

        {/* Menu de navegação */}
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Início
          </Link>
          <Link
            href="/perfil"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Perfil
          </Link>
          <Link
            href="/reciclagem"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Reciclagem
          </Link>
          <Link
            href="/pontos-coleta"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Pontos de coleta
          </Link>
          <Link
            href="/parceiras"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Parcerias
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
