// Source of truth: user-supplied TKS_Identidade_Vetorial_v1, October 2026.
// The SVGs are copied byte-for-byte. Their viewBoxes already include the
// protection area described on page 5 of TKS_Manual_da_Marca.pdf.
export const brandAssets = {
  horizontal: {
    blue: '/brand/TKS_horizontal_azul.svg',
    white: '/brand/TKS_horizontal_branco.svg',
    width: 613,
    height: 109.5,
  },
  compact: {
    blue: '/brand/TKS_compacto_azul.svg',
    white: '/brand/TKS_compacto_branco.svg',
    width: 309.5,
    height: 109.5,
  },
} as const;

export const brandUsage = {
  minimumWidth: { horizontal: 320, compact: 64 },
  // At 700px and below, the compact signature preserves the original geometry
  // and frees space for the quote action and menu. Never shrink the horizontal
  // signature beneath the manual's 320px minimum.
  headerCompactBelow: 701,
  footerCompactBelow: 700,
  source: 'TKS_Identidade_Vetorial_v1/01_SVG',
} as const;
