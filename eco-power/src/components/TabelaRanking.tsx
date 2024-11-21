import React from 'react';

interface RankingItem {
  nome: string;
  pontos: number;
  posicao: number;
}

interface RankingTableProps {
  ranking: RankingItem[];
}

const RankingTable: React.FC<RankingTableProps> = ({ ranking }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4 w-full max-w-4xl">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-green-100 border-b">
            <th className="py-3 px-4 text-left text-green-700 font-semibold">Posição</th>
            <th className="py-3 px-4 text-left text-green-700 font-semibold">Nome</th>
            <th className="py-3 px-4 text-left text-green-700 font-semibold">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((item, index) => (
            <tr key={index} className="border-b hover:bg-green-50">
              <td className="py-3 px-4 text-gray-800">{item.posicao}</td>
              <td className="py-3 px-4 text-gray-800">{item.nome}</td>
              <td className="py-3 px-4 text-gray-800 font-semibold">{item.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
