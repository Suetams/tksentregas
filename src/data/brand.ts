import { existsSync } from 'node:fs';

// Preserve the existing text identification until the original user-supplied
// file is recoverable. Never generate or redraw the company's logo.
export const officialLogoPath = '/brand/tks-logo.png';
export const hasOfficialLogo = existsSync(new URL('../../public/brand/tks-logo.png', import.meta.url));
