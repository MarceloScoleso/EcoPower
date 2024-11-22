'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from './cardproduto';

export default function Loja() {
    const produtos = [
        { nome: 'Fone de Ouvido Bluetooth Premium', preco: 20000, imagem: '/images/fone.png' },
        { nome: 'Teclado Mecânico Gamer RGB', preco: 25000, imagem: '/images/teclado.png' },
        { nome: 'Cadeira Gamer Ergonômica', preco: 50000, imagem: '/images/cadeira.png' },
        { nome: 'Monitor 4K Ultrawide', preco: 100000, imagem: '/images/monitor.png' },
        { nome: 'Power Bank de Alta Capacidade', preco: 15000, imagem: '/images/powerbank.png' },
        { nome: 'Placa de Vídeo para Jogos', preco: 150000, imagem: '/images/placa.png' },
        { nome: 'Vale-presente de $50', preco: 30000, imagem: '/images/vale.png' },
        { nome: 'Kit de Energia Solar Portátil', preco: 200000, imagem: '/images/solar.png' },
        { nome: 'Conjunto de Ferramentas para Eletrônica', preco: 12000, imagem: '/images/ferramentas.png' },
        { nome: 'Luminária LED Inteligente', preco: 10000, imagem: '/images/luminaria.png' },
      ];

      return (
        <>
          <Header />
          <main 
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-200 to-white"
          >
            <div className="mt-10"></div>
            <h1 className="text-3xl font-bold text-green-600 mb-8">Loja de Troca de Pontos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mb-16">
              {produtos.map((produto, index) => (
                <ProductCard 
                  key={index} 
                  nome={produto.nome} 
                  preco={produto.preco} 
                  imagem={produto.imagem} 
                />
              ))}
            </div>
          </main>
          <Footer />
        </>
      );
    }






