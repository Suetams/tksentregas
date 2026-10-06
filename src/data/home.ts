/** Content control stays internal. These facts are not approval of a production launch. */
export const homeContentReview = {
  companySince: { value: 2010, source: 'TKS 2.0 audit, source T03', status: 'pending-operational-review' },
  companyLocation: { value: 'Campinas/SP', source: 'User-provided V3 brief and project inventory', status: 'pending-institutional-review' },
  brand: { requirement: 'Use the original official logo without modification' },
  imagery: { kind: 'conceptual', actualCompanyFleet: false, actualCompanyStaff: false },
  contacts: { whatsappConfirmed: false },
  launch: { productionApproved: false },
} as const;

export const homeNeeds = [
  { id: 'documentos', title: 'Documentos' },
  { id: 'mercadorias', title: 'Mercadorias' },
  { id: 'carga', title: 'Cargas maiores' },
  { id: 'recorrente', title: 'Operação empresarial' },
] as const;
