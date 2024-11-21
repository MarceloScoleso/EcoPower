// pages/index.js

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
<header className="relative bg-gradient-to-r from-green-500 to-blue-600 p-6 flex items-center justify-between shadow-md">
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <Image src="/images/logo1.png" alt="EcoPower" width={150} height={50} />
  <nav>
    <ul className="flex space-x-6 text-white text-sm md:text-base ml-4">
      <li className="transition transform hover:scale-110 hover:text-blue-600">
        <Link href="/parcerias" className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
          Parcerias
        </Link>
      </li>
      <li className="transition transform hover:scale-110 hover:text-blue-600">
        <Link href="/ranking" className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
          Ranking
        </Link>
      </li>
      <li className="transition transform hover:scale-110 hover:text-blue-600">
        <Link href="/integrantes" className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
          Integrantes
        </Link>
      </li>
      <li className="transition transform hover:scale-110 hover:text-blue-600">
        <Link href="/perfil" className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
          Perfil
        </Link>
      </li>
      <li className="transition transform hover:scale-110 hover:text-blue-600">
        <Link href="/pontos-coleta" className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
          Pontos de Coleta
        </Link>
      </li>
      <li className="transition transform hover:scale-110 hover:text-blue-600">
  <Link
    href="/login"
    className="px-8 py-3 bg-white text-black rounded-full border-2  hover:bg-green-600 hover:text-white hover:border-green-500 transition-colors duration-300"
  >
    Login
  </Link>
</li>
<li className="transition transform hover:scale-110 hover:text-blue-600">
  <Link
    href="/cadastro"
    className="px-8 py-3 bg-white text-black rounded-full border-2 hover:bg-green-600 hover:text-white hover:border-green-500 transition-colors duration-300"
  >
    Cadastro
  </Link>
</li>

    </ul>
  </nav>
</header>



      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-blue-600 text-white h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-10 text-center px-4 md:px-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Transformando Resíduos Eletrônicos em Energia Limpa
          </h1>
          <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Com nossa plataforma de reciclagem, você contribui para um futuro sustentável enquanto converte lixo eletrônico em fontes de energia renovável!
          </p>
        <nav>
        <Link href="/reciclagem" className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
          Recicle Aqui!
        </Link>
        </nav>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section id="sobre" className="py-16 px-6 bg-green-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          Sobre o Projeto
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Nossa plataforma tem como objetivo transformar o lixo eletrônico em fontes de energia renovável, como biogás e sistemas solares. 
            Por meio de parcerias com centros de reciclagem de alta tecnologia, garantimos eficiência e rastreamento em todo o processo 
            de reciclagem e reutilização. Além disso, incentivamos os participantes com recompensas e descontos em produtos sustentáveis.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 text-center bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Benefícios de Reciclar Resíduos Eletrônicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        <div className="transition-all transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 border-2 border-transparent shadow-md rounded-lg p-4">
          <Image src="/images/eficiencia.png" alt="Eficiência Energética" width={300} height={200} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4 text-green-800">Geração de Energia Renovável</h3>
          <p className="mt-2 text-sm md:text-base">Transforme seu lixo eletrônico em energia limpa, ajudando a reduzir a dependência de fontes não renováveis.</p>
        </div>
        <div className="transition-all transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 border-2 border-transparent shadow-md rounded-lg p-4">
          <Image src="/images/sustentabilidade.png" alt="Sustentabilidade" width={300} height={200} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4 text-green-800">Sustentabilidade</h3>
          <p className="mt-2 text-sm md:text-base">Contribua para a preservação do meio ambiente, reaproveitando materiais preciosos e evitando o desperdício.</p>
        </div>
        <div className="transition-all transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 border-2 border-transparent shadow-md rounded-lg p-4">
          <Image src="/images/inovacao.png" alt="Tecnologia e Inovação" width={300} height={200} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4 text-green-800">Inovação Tecnológica</h3>
          <p className="mt-2 text-sm md:text-base">Aproveite os avanços tecnológicos para transformar resíduos em recursos valiosos para o futuro da energia.</p>
        </div>
        </div>
      </section>

      
      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
    Funcionalidades da Plataforma
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    <div className="flex items-center space-x-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <div className="p-4 bg-green-200 rounded-full w-24 h-24 flex items-center justify-center ">
        <Image src="/images/coleta.png" alt="Rastreamento" width={100} height={0} className="object-contain" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-green-800">Coleta e Rastreamento de Resíduos</h3>
        <p className="text-gray-600 mt-2">
          Nosso sistema permite rastrear o destino dos resíduos e monitorar a conversão de lixo eletrônico em energia limpa.
        </p>
      </div>
    </div>

    <div className="flex items-center space-x-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <div className="p-4 bg-green-200 rounded-full w-24 h-24 flex items-center justify-center ">
        <Image src="/images/premio.png" alt="Gamificação" width={100} height={100} className="object-contain" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-green-800">Gamificação e Incentivos</h3>
        <p className="text-gray-600 mt-2">
          Ganhe pontos e recompensas por cada item reciclado, complete desafios e ganhe descontos em produtos ecológicos!
        </p>
      </div>
    </div>
  </div>
</section>





      {/* Rodapé */}
      <Footer />

    </div>
  );
}
