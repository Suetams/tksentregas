import city from '../assets/home-v6/city-blue-brazil.webp';
import street from '../assets/home-v6/street-trails-brazil.webp';
import handoff from '../assets/home-v6/parcel-handoff.webp';
import parcel from '../assets/home-v6/parcel-detail.webp';
import warehouse from '../assets/home-v6/warehouse-operation.webp';
import pallets from '../assets/home-v6/pallet-warehouse.webp';
import { company } from './site';
import { createHandoff } from '../scripts/handoff';

// Licensed editorial photographs. They do not depict TKS staff or fleet.
export const homeExperienceMedia = { city, street, warehouse };
export const experienceNeeds = [
  { id: 'documentos', title: 'Documentos e pequenos volumes', caption: 'Documentos, malotes e pequenos itens.', photo: handoff, position: '50% 47%', alt: 'Mãos entregando envelopes e uma pequena encomenda.' },
  { id: 'mercadorias', title: 'Mercadorias e peças', caption: 'Caixas, produtos, peças e equipamentos.', photo: parcel, position: '50% 50%', alt: 'Detalhe de mãos preparando uma caixa para transporte.' },
  { id: 'carga', title: 'Cargas maiores', caption: 'Volumes maiores pedem outra escala de transporte.', photo: pallets, position: '50% 55%', alt: 'Caixas agrupadas sobre paletes em um armazém.' },
  { id: 'recorrente', title: 'Operação para empresas', caption: 'Distribuição, rotas e entregas da sua rotina.', photo: warehouse, position: '50% 60%', alt: 'Pessoa com prancheta acompanhando uma operação em armazém.' },
] as const;
export const fleetEditorialPhotos = [handoff, parcel, warehouse, pallets];
export const fleetWindowScales = [0.55, 0.7, 0.85, 1];

// One source of truth. No phone number is guessed or embedded in markup.
export const homeContact = createHandoff(company.whatsapp, 'Olá, TKS! Gostaria de conversar sobre uma entrega.');
export const homeContactHref = homeContact?.url ?? '/contato';
export const homeContactLabel = homeContact ? 'Fale com a TKS no WhatsApp' : 'Fale com a TKS';
