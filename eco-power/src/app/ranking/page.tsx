import React from 'react';
import RankingTable from '../../components/TabelaRanking';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page: React.FC = () => {
  // Dados fictícios para o ranking
  const rankingData = [
    { nome: 'João Paulo', pontos: 1200, posicao: 1 },
    { nome: 'Marcelo Scoleso', pontos: 1150, posicao: 2 },
    { nome: 'Ana Costa', pontos: 1100, posicao: 3 },
    { nome: 'Carlos Silva', pontos: 900, posicao: 4 },
    { nome: 'Pedro Souza', pontos: 850, posicao: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow bg-gray-50 py-8 px-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Ranking dos Usuários</h1>

        {/* Componente de Tabela de Ranking */}
        <div className="flex justify-center">
          <RankingTable ranking={rankingData} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
