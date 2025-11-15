
export type Screen = 'welcome' | 'home' | 'providerProfile' | 'booking' | 'tracking' | 'rating' | 'userProfile';

export type ServiceCategory = 'Pintor' | 'Mecânico' | 'Eletricista' | 'Encanador' | 'Diarista' | 'Serviços Rápidos';

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  photoUrl?: string;
}

export interface Provider {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  rating: number;
  reviewCount: number;
  price: number;
  priceType: 'hora' | 'serviço';
  distance: number;
  photoUrl: string;
  portfolio: string[];
  availability: string[];
  reviews: Review[];
}

export type ServiceStatus = 'Aguardando confirmação' | 'Em execução' | 'Concluído';

export interface ServiceRequest {
  id: string;
  dateTime: Date;
  details: string;
  photo?: string;
  price: number;
  status: ServiceStatus;
}
