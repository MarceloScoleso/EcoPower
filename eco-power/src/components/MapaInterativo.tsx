'use client';

import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LatLngTuple } from 'leaflet';

// Importando as imagens com import (em vez de require)
const icon = '/images/ponto1.png';

// Convertendo imagens StaticImageData para string
const DefaultIcon = L.icon({
  iconUrl: icon as unknown as string,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Lista de pontos de coleta de resíduos eletrônicos
const pontosDeColeta = [
  {
    id: 1,
    nome: 'Estação RecicleMais',
    coordenadas: [-23.55752, -46.635308] as LatLngTuple,
    descricao: 'Aceita resíduos eletrônicos e óleo usado.',
    tipo: 'eletronicos',
  },
  {
    id: 2,
    nome: 'ReciclaTech',
    coordenadas: [-23.54852, -46.633308] as LatLngTuple,
    descricao: 'Ponto de coleta de computadores e acessórios eletrônicos.',
    tipo: 'eletronicos',
  },
  {
    id: 3,
    nome: 'EcoEletrônicos SP',
    coordenadas: [-23.54052, -46.631308] as LatLngTuple,
    descricao: 'Reciclagem de aparelhos eletrônicos antigos.',
    tipo: 'eletronicos',
  },
  {
    id: 4,
    nome: 'Ponto Verde',
    coordenadas: [-23.56152, -46.641308] as LatLngTuple,
    descricao: 'Coleta de resíduos eletrônicos e pilhas.',
    tipo: 'eletronicos',
  },
  {
    id: 5,
    nome: 'Reciclagem EletroSustentável',
    coordenadas: [-23.54552, -46.610308] as LatLngTuple,
    descricao: 'Ponto de coleta de resíduos eletrônicos e baterias.',
    tipo: 'eletronicos',
  },
  {
    id: 6,
    nome: 'Tech Recicle',
    coordenadas: [-23.55052, -46.647308] as LatLngTuple,
    descricao: 'Aceita dispositivos eletrônicos e acessórios em desuso.',
    tipo: 'eletronicos',
  },
  {
    id: 7,
    nome: 'ReCiclo Eletrônico',
    coordenadas: [-23.53852, -46.621308] as LatLngTuple,
    descricao: 'Reciclagem e descarte de resíduos eletrônicos.',
    tipo: 'eletronicos',
  },
  {
    id: 8,
    nome: 'EcoTech SP',
    coordenadas: [-23.53452, -46.638308] as LatLngTuple,
    descricao: 'Ponto de coleta de equipamentos eletrônicos.',
    tipo: 'eletronicos',
  },
  {
    id: 9,
    nome: 'SustentaRecicle',
    coordenadas: [-23.53052, -46.623308] as LatLngTuple,
    descricao: 'Aceita resíduos eletrônicos e acessórios de informática.',
    tipo: 'eletronicos',
  },
  {
    id: 10,
    nome: 'Recicle Tudo',
    coordenadas: [-23.52052, -46.616308] as LatLngTuple,
    descricao: 'Coleta de eletrônicos, baterias e cabos usados.',
    tipo: 'eletronicos',
  },
];


export default function MapaInterativo() {
  const mapRef = useRef<L.Map | null>(null);

  // Componente para garantir que o mapa só é inicializado uma vez
  function MapInitializer() {
    const map = useMap();
    if (!mapRef.current) {
      mapRef.current = map;
    }
    return null;
  }

  // Filtra os pontos de coleta para mostrar apenas os de resíduos eletrônicos
  const pontosDeColetaEletronicos = pontosDeColeta.filter(ponto => ponto.tipo === 'eletronicos');

  return (
    <MapContainer
      center={[-23.55052, -46.633308]} // Posição inicial (São Paulo, como exemplo)
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <MapInitializer />
      {pontosDeColetaEletronicos.map((ponto) => (
        <Marker key={ponto.id} position={ponto.coordenadas}>
          <Popup>
            <strong>{ponto.nome}</strong>
            <br />
            {ponto.descricao}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
