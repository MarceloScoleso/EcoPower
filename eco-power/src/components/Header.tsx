import Image from 'next/image';
import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-500 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logotipo */}
        <div className="flex items-center space-x-2">
        <Image src="/logo1.png" alt="EcoPower" width={150} height={50} />
          
        </div>

        {/* Menu de navegação */}
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="hover:bg-green-600 px-3 py-2 rounded transition-colors"
          >
            Início
          </Link>
          <Link
            href="/#sobre"
            className="hover:bg-green-600 px-3 py-2 rounded transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/#funcionalidades"
            className="hover:bg-green-600 px-3 py-2 rounded transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            href="/Reciclagem"
            className="hover:bg-green-600 px-3 py-2 rounded transition-colors"
          >
            Reciclagem
          </Link>
          <Link
            href="/contato"
            className="hover:bg-green-600 px-3 py-2 rounded transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
