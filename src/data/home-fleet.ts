import type { needs } from './site';

type QuoteNeed = (typeof needs)[number]['id'];

export interface HomeFleetCategory {
  id: 'moto' | 'utilitario' | 'van-furgao' | 'caminhao-3-4';
  label: string;
  capacityKg: number;
  description: string;
  applications: string[];
  need: QuoteNeed;
  icon: string;
}

// Internal content control: capacities were transcribed from the existing
// site's project inventory. Operational approval remains pending; these are
// reference values, not a confirmed booking or availability guarantee.
// The photographic catalog is conceptual and depicts vehicle categories.
export const homeFleetValidation = {
  source: 'Levantamento do site anterior no pacote de pré-desenvolvimento TKS 2.0',
  operationalStatus: 'pending',
  imageStatus: 'conceptual-category-representation',
} as const;

export const homeFleet: HomeFleetCategory[] = [
  {
    id: 'moto',
    label: 'Moto',
    capacityKg: 20,
    description: 'Documentos, malotes e pequenos itens em uma solução leve de transporte.',
    applications: ['Documentos e contratos', 'Malotes', 'Pequenos volumes'],
    need: 'documentos',
    icon: 'bike',
  },
  {
    id: 'utilitario',
    label: 'Utilitário',
    capacityKg: 400,
    description: 'Mais espaço para transportar mercadorias, caixas, peças e equipamentos.',
    applications: ['Caixas e mercadorias', 'Peças e equipamentos', 'Coletas pontuais'],
    need: 'mercadorias',
    icon: 'van',
  },
  {
    id: 'van-furgao',
    label: 'Van / Furgão',
    capacityKg: 1200,
    description: 'Para volumes maiores, distribuição e entregas que fazem parte da rotina da sua empresa.',
    applications: ['Volumes maiores', 'Distribuição', 'Entregas recorrentes'],
    need: 'mercadorias',
    icon: 'van',
  },
  {
    id: 'caminhao-3-4',
    label: 'Caminhão 3/4',
    capacityKg: 3000,
    description: 'Uma categoria para cargas maiores, escolhida a partir dos detalhes de cada transporte.',
    applications: ['Cargas maiores', 'Mercadorias em volume', 'Operações empresariais'],
    need: 'carga',
    icon: 'truck',
  },
];
