import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  nome: string;
  preco: number;
  imagem: string;
}

export default function ProductCard({ nome, preco, imagem }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300">
      <Image 
        src={imagem} 
        alt={nome} 
        width={200} 
        height={200} 
        className="object-contain w-full h-40 mb-4"
      />
      <h3 className="text-lg font-bold text-gray-700">{nome}</h3>
      <p className="text-green-600 font-semibold">{preco.toLocaleString()} pontos</p>
    </div>
  );
}
