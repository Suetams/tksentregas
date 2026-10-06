/** Content control stays internal. These facts are not approval of a production launch. */
export const homeContentReview = {
  companySince: { value: 2010, source: 'TKS 2.0 audit, source T03', status: 'pending-operational-review' },
  brand: { requirement: 'Use the original official logo without modification' },
  imagery: { kind: 'conceptual', actualCompanyFleet: false, actualCompanyStaff: false },
  contacts: { whatsappConfirmed: false },
  launch: { productionApproved: false },
} as const;

export const homeNeeds = [
  { id: 'documentos', title: 'Documentos e pequenos volumes', text: 'Documentos, malotes e pequenos itens.', icon: 'file' },
  { id: 'mercadorias', title: 'Mercadorias, caixas e peças', text: 'Produtos e itens da sua rotina.', icon: 'box' },
  { id: 'carga', title: 'Cargas maiores', text: 'Mais volume para transportar.', icon: 'truck' },
  { id: 'recorrente', title: 'Operação empresarial', text: 'Rotas, distribuição e várias entregas.', icon: 'route' },
] as const;
