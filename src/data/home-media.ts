import hero from '../assets/home-v3-hero.png';
import vehicles from '../assets/home-v3-vehicles.png';
import operation from '../assets/warehouse.png';

/**
 * Internal media register. These generated development placeholders depict
 * transport categories and generic operations, not TKS vehicles or staff.
 * Replace each source with approved company photography before publication.
 * Keep the original company logo outside this conceptual image pipeline.
 */
export const homeMedia = { hero, fleet: vehicles, operation } as const;

export const homeMediaReview = {
  status: 'conceptual-development-placeholder',
  depictsCompanyFleet: false,
  depictsCompanyStaff: false,
  depictsCompanySite: false,
  officialBrandingInImages: false,
  replacementRequiredBeforeProduction: true,
  artDirection: 'Natural industrial-street photography; restrained cool daylight; unbranded category vehicles.',
} as const;

/** Normalized crop coordinates. Each quadrant is an independent photograph. */
export const homeFleetMediaFrames = {
  moto: { left: '0%', top: '0%' },
  utilitario: { left: '-100%', top: '0%' },
  'van-furgao': { left: '0%', top: '-100%' },
  'caminhao-3-4': { left: '-100%', top: '-100%' },
} as const;
