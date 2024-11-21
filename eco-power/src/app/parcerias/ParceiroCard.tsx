import React from 'react';
import Image from 'next/image';
interface CardParceiraProps {
  nome: string;
  logo: string;
  link: string;
}

const CardParceira: React.FC<CardParceiraProps> = ({ nome, logo, link }) => {
  return (
    <div className="mt-8 w-4/5 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
      <div className="text-center">
        
        <Image 
          src={logo}
          alt={`Logo ${nome}`}
          className="mx-auto mb-4 w-40 h-auto object-contain"
          width={160} 
          height={160}
        />
        {/* Nome da Empresa */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{nome}</h2>
        {/* Link para o site da empresa */}
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition-colors duration-300"
        >
          Visite o site
        </a>
      </div>
    </div>
  );
}

export default CardParceira;
