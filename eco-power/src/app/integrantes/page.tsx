import Image from 'next/image';
import Header from '../../components/Header'; // Importe o Header
import Footer from '../../components/Footer'; // Importe o Footer

const IntegrantesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow bg-green-50 p-6">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Integrantes do Grupo</h1>

        {/* Layout dos cards dos integrantes */}
        <div className="flex justify-center gap-8 flex-wrap">
          
          {/* Card para João Paulo Francisco de Oliveira */}
          <div className="w-80 p-6 border border-green-300 rounded-lg shadow-lg text-center bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
            <Image
              src="/images/joao.png" // Caminho da foto
              alt="João Paulo Francisco de Oliveira"
              width={144} 
              height={144}
              className="mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-green-700">João Paulo Francisco de Oliveira</h2>
            <p className="text-sm text-green-600 mb-2"><strong>RM:</strong> 557481</p>
            <p className="text-sm text-green-600 mb-4"><strong>Turma:</strong> 1TDSPG</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/jpfo07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-paulo-francisco-de-oliveira-0492a0306/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Card para Marcelo Antônio Scoleso Junior */}
          <div className="w-80 p-6 border border-green-300 rounded-lg shadow-lg text-center bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
            <Image
              src="/images/macinho.png" // Caminho da foto
              alt="Marcelo Antônio Scoleso Junior"
              width={144} 
              height={144}
              className="mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-green-700">Marcelo Antônio Scoleso Junior</h2>
            <p className="text-sm text-green-600 mb-2"><strong>RM:</strong> 557410</p>
            <p className="text-sm text-green-600 mb-4"><strong>Turma:</strong> 1TDSPG</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/MarceloScoleso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/marcelo-scoleso/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IntegrantesPage;
