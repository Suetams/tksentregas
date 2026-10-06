export const company = {
 name: 'TKS Entregas', whatsapp: '',
 email: 'contato@tksentregas.com.br',
 contactStatus: 'Informações do site anterior, aguardando confirmação da TKS.',
};
export const needs = [
 {id:'documentos',title:'Documento',text:'Documentos, contratos e pequenos itens.',icon:'file'},
 {id:'mercadorias',title:'Caixas e mercadorias',text:'Produtos, encomendas e volumes.',icon:'box'},
 {id:'equipamentos',title:'Peças e equipamentos',text:'Transporte empresarial e industrial.',icon:'gear'},
 {id:'carga',title:'Carga maior',text:'Volumes maiores e cargas.',icon:'truck'},
 {id:'distribuicao',title:'Muitas entregas',text:'Distribuição e rotas.',icon:'pin'},
 {id:'recorrente',title:'Operação recorrente',text:'Soluções para empresas.',icon:'repeat'},
 {id:'orientacao',title:'Preciso de orientação',text:'Vamos entender sua necessidade.',icon:'help'},
];
export const services = [
 {id:'motoboy-campinas',title:'Motoboy',desc:'Documentos e pequenos volumes com uma jornada simples de solicitação.',short:'Para documentos e pequenos volumes.',need:'documentos',vehicle:'moto',icon:'bike'},
 {id:'entregas-expressas',title:'Entrega expressa',desc:'Conte o que precisa entregar, o trajeto e a urgência. O atendimento avalia as condições.',short:'Coletas e entregas pontuais.',need:'mercadorias',vehicle:'utilitario',icon:'clock'},
 {id:'frete-utilitarios',title:'Utilitário',desc:'Uma opção para caixas, mercadorias e equipamentos. Peso, volume e acesso precisam ser avaliados.',short:'Ideal para caixas e mercadorias.',need:'mercadorias',vehicle:'utilitario',icon:'van'},
 {id:'transporte-de-cargas',title:'Transporte de cargas',desc:'Cargas maiores exigem informações sobre dimensões, acondicionamento e locais de coleta e entrega.',short:'Para volumes e cargas maiores.',need:'carga',vehicle:'caminhao-3-4',icon:'truck'},
 {id:'distribuicao-e-commerce',title:'Distribuição',desc:'Planeje entregas com vários destinos e informe o volume da operação para avaliação comercial.',short:'Vários destinos, uma operação.',need:'distribuicao',vehicle:'van-furgao',icon:'route'},
 {id:'terceirizacao-entregas',title:'Operações recorrentes',desc:'Compartilhe a frequência, os volumes e as necessidades da rotina da sua empresa.',short:'Transporte para a sua rotina.',need:'recorrente',vehicle:'van-furgao',icon:'repeat'},
 {id:'malotes',title:'Malotes',desc:'Descreva os itens, as unidades envolvidas e a frequência de coleta para avaliar uma operação de malotes.',short:'Documentos entre unidades.',need:'documentos',vehicle:'moto',icon:'file'},
 {id:'delivery-de-alimentos',title:'Delivery de alimentos',desc:'Informe acondicionamento, cuidados, trajetos e frequência. A oferta e as condições aguardam validação operacional.',short:'Uma necessidade específica de transporte.',need:'orientacao',vehicle:'moto',icon:'box'},
];
export const fleet = [
 {id:'moto',title:'Moto',desc:'Para documentos, pequenos volumes e solicitações pontuais.',icon:'bike'},
 {id:'utilitario',title:'Utilitário',desc:'Para caixas e mercadorias. Dimensões e acondicionamento serão avaliados.',icon:'van'},
 {id:'van-furgao',title:'Van e furgão',desc:'Uma categoria para avaliar necessidades de espaço e volumes maiores.',icon:'van'},
 {id:'caminhao-3-4',title:'Caminhão 3/4',desc:'Para avaliação de cargas maiores e condições de acesso.',icon:'truck'},
];
