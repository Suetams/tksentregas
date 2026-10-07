import hero from '../assets/home-v3-hero.png';
import vehicles from '../assets/home-v3-vehicles.png';
import operation from '../assets/warehouse.png';
import type { ImageMetadata } from 'astro';
import type { HomeFleetCategory } from './home-fleet';

/**
 * Internal media register. These generated development placeholders depict
 * transport categories and generic operations, not TKS vehicles or staff.
 * Replace each source with approved company photography before publication.
 * Keep the original company logo outside this conceptual image pipeline.
 */
interface HomeMedia {
  hero: ImageMetadata;
  fleet: ImageMetadata;
  operation: ImageMetadata;
  history?: { src: ImageMetadata; alt: string; position?: string; mobilePosition?: string };
}
export const homeMedia: HomeMedia = { hero, fleet: vehicles, operation };

/** Add approved individual photographs here; the showcase uses the conceptual
 * category board only when a category has no individual photo configured. */
export const homeFleetPhotos: Partial<Record<HomeFleetCategory['id'], {
  src: ImageMetadata;
  alt: string;
  position?: string;
  mobilePosition?: string;
}>> = {};

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
