// Fix: Import React to use React types like React.FC and React.SVGProps.
import React from 'react';
import type { Provider, ServiceCategory } from './types';

export const CATEGORIES: { name: ServiceCategory; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  // Icons will be imported in HomeScreen, this is just for data structure
];

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: '1',
    name: 'Roberto Carlos',
    category: 'Pintor',
    description: 'Pintor profissional com mais de 10 anos de experiência em residências e comércios. Foco em acabamento de alta qualidade e satisfação do cliente.',
    rating: 4.9,
    reviewCount: 128,
    price: 50,
    priceType: 'hora',
    distance: 2.5,
    photoUrl: 'https://picsum.photos/seed/roberto/200/200',
    portfolio: [
      'https://picsum.photos/seed/portfolio1/400/300',
      'https://picsum.photos/seed/portfolio2/400/300',
      'https://picsum.photos/seed/portfolio3/400/300',
    ],
    availability: ['Segunda a Sexta, 8h - 18h', 'Sábados, 9h - 13h'],
    reviews: [
      { id: 'r1', author: 'Ana Silva', rating: 5, comment: 'Serviço impecável! Roberto foi muito profissional e o resultado ficou incrível.' },
      { id: 'r2', author: 'João Costa', rating: 4, comment: 'Bom trabalho, um pouco de atraso mas a qualidade compensou.' }
    ]
  },
  {
    id: '2',
    name: 'Mariana Lima',
    category: 'Diarista',
    description: 'Organização e limpeza residencial completa. Deixo seu lar brilhando com produtos de qualidade e muita atenção aos detalhes.',
    rating: 5.0,
    reviewCount: 215,
    price: 150,
    priceType: 'serviço',
    distance: 1.2,
    photoUrl: 'https://picsum.photos/seed/mariana/200/200',
    portfolio: [
      'https://picsum.photos/seed/portfolio4/400/300',
      'https://picsum.photos/seed/portfolio5/400/300',
    ],
    availability: ['Terças, Quintas e Sábados'],
     reviews: [
      { id: 'r3', author: 'Carlos Pereira', rating: 5, comment: 'Mariana é fantástica! A casa nunca esteve tão limpa. Recomendo 100%.' },
    ]
  },
  {
    id: '3',
    name: 'Fernando Souza',
    category: 'Eletricista',
    description: 'Eletricista certificado com especialização em instalações residenciais, reparos e detecção de falhas. Segurança em primeiro lugar.',
    rating: 4.8,
    reviewCount: 95,
    price: 80,
    priceType: 'hora',
    distance: 5.1,
    photoUrl: 'https://picsum.photos/seed/fernando/200/200',
    portfolio: [
       'https://picsum.photos/seed/portfolio6/400/300',
    ],
    availability: ['Segunda a Sábado, plantão 24h para emergências'],
     reviews: [
      { id: 'r4', author: 'Beatriz Almeida', rating: 5, comment: 'Resolveu meu problema de curto-circuito rapidamente. Muito eficiente.' },
    ]
  },
   {
    id: '4',
    name: 'Juliano Alves',
    category: 'Mecânico',
    description: 'Mecânico automotivo geral. Especialista em motores e suspensão. Trago a oficina até você com meu serviço móvel.',
    rating: 4.7,
    reviewCount: 150,
    price: 120,
    priceType: 'hora',
    distance: 3.8,
    photoUrl: 'https://picsum.photos/seed/juliano/200/200',
    portfolio: [
      'https://picsum.photos/seed/portfolio7/400/300',
      'https://picsum.photos/seed/portfolio8/400/300',
    ],
    availability: ['Segunda a Sexta, 8h - 19h'],
    reviews: [
      { id: 'r5', author: 'Lucas Martins', rating: 5, comment: 'Super honesto e resolveu o problema do meu carro na minha garagem. Excelente!' },
      { id: 'r6', author: 'Fernanda Dias', rating: 4, comment: 'Bom serviço, mas demorou um pouco para conseguir a peça.' }
    ]
  },
  {
    id: '5',
    name: 'Cláudio Borges',
    category: 'Encanador',
    description: 'Soluções completas para vazamentos, desentupimentos e instalações hidráulicas. Atendimento rápido e com garantia.',
    rating: 4.9,
    reviewCount: 112,
    price: 90,
    priceType: 'serviço',
    distance: 4.0,
    photoUrl: 'https://picsum.photos/seed/claudio/200/200',
    portfolio: [],
    availability: ['Disponível 24/7 para emergências'],
     reviews: [
      { id: 'r7', author: 'Ricardo Neves', rating: 5, comment: 'Chegou em 30 minutos e consertou o vazamento. Salvou meu dia!' },
    ]
  }
];