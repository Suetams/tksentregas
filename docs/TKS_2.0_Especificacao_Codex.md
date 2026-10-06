# TKS 2.0 — Especificação para implementação futura

Versão 1.0 · 06/10/2026 · Documento de trabalho para o agente de desenvolvimento.

## 1. Objetivo e estado de entrada

Construir uma presença comercial mobile para a TKS Entregas, preservando identidade e patrimônio de URLs. Jornada: reconhecer necessidade, escolher solução, conhecer processo e provas, qualificar solicitação e continuar com o comercial.

**Gate de entrada:** o usuário solicitou auditoria integral antes de construir. O site não pôde ser renderizado nem rastreado diretamente neste ambiente; P01/A14 continuam abertos. Antes de programar, fechar a inspeção direta ou trabalhar com export fiel do CMS/HTML/recursos e registros reais de desktop/mobile, explicitando qualquer lacuna restante. Não declarar auditoria integral encerrada com base somente no índice de busca.

Não há autorização para inventar logo, cores, veículos, locais, preços, disponibilidade, avaliações ou números comerciais. As informações de TKS confirmadas no índice descrevem comunicação existente, não validação da operação atual. Não criar, alterar ou publicar o site apenas ao receber este documento; o escopo de execução deverá ser dado na etapa seguinte pelo usuário.

## 2. Arquivos de referência e precedência

1. Instrução futura do usuário e dados operacionais aprovados pela TKS.
2. `TKS_2.0_Auditoria_e_Plano.pdf` / `.md`: decisões e limites de evidência.
3. `TKS_2.0_Inventario_e_Migracao.xlsx`: páginas, serviços, frota, artigos, requisitos, achados, pendências e aceite.
4. `TKS_2.0_Mapa_URLs.csv`: mapa de rotas; não alterar caminhos por estética.
5. `TKS_2.0_301_Condicionais.csv`: contingências INATIVAS, não regras para aplicar.
6. `TKS_2.0_Fontes.csv`: URLs e método de obtenção.

Se aparecer conteúdo adicional no crawl ou CMS, acrescentar ao inventário, sem descartar silenciosamente. Não usar protótipo anterior como fonte oficial de fatos, logo ou cores. Verificar projeto/repositório e instruções aplicáveis antes de escolher a base técnica; não criar projetos duplicados nem publicar um protótipo como site final.

## 3. Escopo de produto

**MVP:** Home; Soluções; páginas dos serviços; Frota; Para Empresas; Sobre; Conteúdos e dez artigos migrados; Área; Contato; Orçamento; Privacidade; e 404 real. Confirmar se todas as ofertas atualmente citadas continuam ativas antes de publicar a landing correspondente.

**Evolução após o MVP:** registro persistente de lead/CRM, integração de orçamento, portal ou rastreamento, automação comercial e novas páginas locais. Não adicionar essas dependências ao primeiro lançamento sem necessidade comercial confirmada.

Mensagem central recomendada: “Do documento à carga. A TKS entrega.” CTA global: “Solicitar orçamento”. CTA final do wizard: “Continuar orçamento no WhatsApp”. Conversa direta é alternativa para quem prefere orientação ou não sabe informar a carga.

## 4. Rotas e navegação

As 15 rotas conhecidas permanecem intactas. Os novos caminhos estão no CSV e na aba ARQUITETURA. O sitemap inclui apenas páginas canônicas publicadas e indexáveis. Rotas com conteúdo não aprovado não devem aparecer como páginas vazias.

`/servicos` continua com rótulo Soluções. `/blog` continua com rótulo Conteúdos. Não criar `/solucoes` e `/conteudos` duplicados. Artigos legados sem barra depois de `blog` continuam respondendo diretamente. Novos artigos poderão usar `/blog/slug`.

Categorias de veículo ficam em `/frota`, com âncoras estáveis: `moto`, `utilitario`, `van-furgao`, `caminhao-3-4`. Não gerar landing repetida para cada ficha no MVP. Páginas de serviço devem apontar para as fichas pertinentes e para o orçamento com categoria pré-selecionada.

Header: Soluções, Frota, Para Empresas, Sobre, Conteúdos, Contato e CTA. Footer acrescenta Área e Privacidade. Menu mobile com abertura/fechamento por toque e teclado, foco previsível, Escape e retorno do foco ao controle de origem.

Parâmetros para pré-seleção contêm somente categorias permitidas, por exemplo serviço/necessidade, nunca nome, telefone ou endereço. Parâmetro desconhecido é ignorado. Não inferir indexabilidade ou canonical a partir de um estado de formulário.

## 5. Home e componentes

Seguir a hierarquia de blocos do relatório. Criar componentes reutilizáveis para Header, Footer, CTA, seletor de necessidade, card de solução, ficha de frota, processo de atendimento, prova social, área, card de artigo e wizard.

A Home conduz ao wizard completo em `/orcamento`; uma entrada curta pode pré-selecionar a necessidade. Não manter dois formulários com validações divergentes. CTAs contextualizados reutilizam o mesmo destino e as mesmas configurações de contato.

Blocos de prova social só existem quando há conteúdo autorizado com fonte. Enquanto ausentes, remover o bloco; não mostrar placeholders em produção. Usar história e processo verificáveis como confiança. Não adicionar estatísticas ou rating para preencher o espaço.

## 6. Conteúdo e dados

Centralizar os registros, com estrutura independente da apresentação:

| Registro | Campos necessários |
| --- | --- |
| Empresa | nome, história, contatos com função, endereço/horários aprovados, fonte, revisão e validação |
| Marca | arquivo original, variantes permitidas, cores oficiais, origem e direitos |
| Serviço | identificador, caminho, título, aplicação, limites/condições, veículos possíveis, processo, FAQ, fonte e estado |
| Veículo | categoria, peso, unidade/medidas internas, acesso, carroceria, usos, foto, fonte e estado |
| Cobertura | rota/localidade, serviço/veículo, condição, janela e responsável pela aprovação |
| Artigo | identificador, caminho legado exato, título, resumo, corpo, CTA, autor/revisor e datas reais |
| Prova social | tipo, fonte pública ou autorização, conteúdo aprovado, data de revisão |
| SEO | title, description, caminho canônico, imagem social aprovada e indexabilidade |

Todo fato comercial deve guardar fonte e estado de revisão. Separar “comunicado no site atual” de “aprovado pela operação para publicar”. Valores desconhecidos permanecem ausentes; não substituir com dados de demonstração. A ficha FROTA contém medidas exatamente como foram encontradas, para revisão, não para usar cegamente na interface.

## 7. Wizard: etapas e campos

| Etapa | Campo | Regra de produto |
| --- | --- | --- |
| 1 — Carga | necessidade/categoria | Seleção inicial, incluindo preciso de orientação |
| 1 — Carga | descrição do item | Obrigatória para qualificação; texto curto e claro |
| 1 — Carga | quantidade | Número inteiro positivo ou indicação ainda não definida |
| 1 — Carga | peso total aproximado, kg | Opcional, positivo quando informado; Não sei explícito |
| 1 — Carga | comprimento, largura, altura, cm | Opcionais; por volume; não exigir para documentos |
| 1 — Carga | tamanhos variados/cuidados | Opcional; não multiplicar medida de um item como medida de toda a carga |
| 1 — Carga | pontual/recorrente | Controla contexto da etapa 3 |
| 2 — Trajeto | cidade de origem e destino | Obrigatórias para consulta preliminar |
| 2 — Trajeto | bairro, rua, número e complemento | Informar quando conhecidos; marcar endereço a confirmar |
| 2 — Trajeto | um ou vários destinos | Em vários, permitir lista/contexto sem exigir motor de roteirização |
| 2 — Trajeto | urgência | Quanto antes / agendada / flexível; sem promessa de atendimento |
| 2 — Trajeto | data e janela solicitadas | Se agendada, data obrigatória; não aceitar dia anterior ao local atual |
| 3 — Contexto | frequência e volume de rotina | Somente se recorrente; aproximados ou a definir |
| 3 — Contato | nome | Obrigatório |
| 3 — Contato | telefone/WhatsApp para retorno | Obrigatório; aceitar formato nacional e internacional válido |
| 3 — Contato | empresa e e-mail | Opcionais; não obrigar CNPJ/CPF |
| 3 — Contexto | observações | Opcionais; incluir acesso, embalagem ou condição solicitada |
| 4 — Revisão | resumo e edição | Agrupar carga, rota, prazo e contato; indicar o que falta |
| 4 — Ação | continuar no WhatsApp | Abre conversa com mensagem preparada; envio pelo usuário |

Respeitar America/Sao_Paulo para data/janela. Peso e medidas aproximados não determinam adequação garantida. O wizard não calcula preço, distância, frete, seguro ou disponibilidade. Não anunciar que uma carga foi aceita nem recusar silenciosamente por exceder uma ficha: direcionar para avaliação do comercial.

Pré-seleção de serviço facilita a entrada; o usuário pode alterar. Detalhes opcionais devem aparecer progressivamente. Usar limites de texto documentados por campo para manter legibilidade e serialização; nunca cortar silenciosamente o conteúdo preenchido. A quantidade pode ficar desconhecida numa consulta preliminar, sendo destacada no resumo.

## 8. Estados, acessibilidade e recuperação

Estados: preenchimento, erro de validação, etapa concluída, revisão, mensagem preparada e alternativa de contato. Nenhum estado é “pedido confirmado” ou “solicitação recebida” no MVP sem backend.

Manter rascunho no estado da sessão; se utilizar sessionStorage para recuperação, limpar após ação de reiniciar/finalizar e informar que não foi enviado. Não salvar dados pessoais em cookie, query string, analytics ou log. Não oferecer “salvo pela TKS” para um rascunho local.

Ao mudar de etapa, atualizar indicação de progresso e foco para o título da etapa. Erros junto ao campo, label permanente, agrupamento semântico e anúncio de estado. Voltar mantém dados. Não exigir avanço automático a cada seleção. Teclado, zoom e leitor de tela precisam funcionar; foco não fica encoberto por CTA fixo.

Sem JavaScript, o conteúdo continua legível e a página de orçamento apresenta instrução curta e links aos canais aprovados. Telefone e e-mail não dependem do funcionamento do wizard.

## 9. Handoff ao comercial

Formato recomendado da mensagem, sem usar dados fictícios em produção:

> Solicitação de orçamento — TKS Entregas
> Necessidade e item: dados informados
> Quantidade, peso e medidas: dados informados ou a confirmar
> Origem e destino: dados informados
> Vários destinos: contexto, quando aplicável
> Data/janela e urgência: solicitação, sujeita à confirmação
> Recorrência: contexto, quando aplicável
> Nome, empresa e telefone: dados informados
> Observações: dados informados
> Dados ainda pendentes: lista, se houver

Configurar um destino canônico confirmado; não escolher entre os telefones publicados por suposição. Número internacional sem pontuação para `wa.me`; codificar texto conforme documentação oficial. [D06]

A ação deve vir de clique explícito. Antes de abrir, mostrar que os dados serão encaminhados ao canal escolhido. Oferecer resumo copiável. Testar limite prático da URL nos clientes móveis e web; para conteúdo longo ou abertura falha, permitir copiar texto completo e abrir conversa sem pré-preenchimento. Não truncar endereço ou observação silenciosamente.

Depois da abertura, o site só pode informar “Mensagem preparada. Envie no WhatsApp para continuar.” Não tem evidência de que houve envio ou leitura. Não limpar o único resumo antes de permitir recuperá-lo. Endpoint de recebimento e confirmação persistida são evolução separada se o negócio exigir esse comportamento.

## 10. SEO, migração e infraestrutura

Servir HTML das páginas e artigos de forma rastreável. Definir title e description específicos, hierarquia de headings, alt por função, links para rotas finais e metadados sociais. Preservar caminhos legados e conferir o comportamento de barra final/extensionless na hospedagem real.

Sitemap só contém páginas publicadas, canônicas e indexáveis. Não inventar lastmod. Homologação não é indexada. Produção não herda bloqueio global, noindex ou canonical de teste. Página inexistente retorna HTTP 404; não renderizar a Home com 200 para qualquer caminho.

Se houver mudança aprovada, 301 de servidor em um salto para equivalente. Não usar redirecionamento JavaScript ou para a Home como substituto. Conferir regras antes de ativar; o CSV condicional está desligado. Migrar também recursos com tráfego/backlinks relevantes. [D01]

Dados estruturados devem refletir apenas dados públicos aprovados; empresa local, artigos e breadcrumbs conforme o template. Não criar `AggregateRating` com estrelas próprias buscando elegibilidade. [D05; D07]

Base sugerida: Astro pré-renderizado e TypeScript somente no necessário; CMS se a rotina editorial justificar. Confirmar a base já existente e o suporte de hospedagem. Não trocar stack de um projeto reaproveitável sem avaliar custo e necessidade. Não assumir que um criador de sites contratado aceita uploads/rewrites de um build. [D04]

Publicação futura deve preservar domínio e registros de e-mail, validar TLS e incluir rollback recuperável. Registrar ambiente, comando de build, destinos e ajustes de DNS necessários, sem incluir segredos na documentação ou no repositório.

## 11. Eventos e métricas

| Evento recomendado | Quando | Metadados permitidos |
| --- | --- | --- |
| `quote_cta_clicked` | Entrada no orçamento | rota e posição do CTA |
| `quote_started` | Primeira interação significativa | categoria inicial |
| `quote_step_completed` | Avanço validado | número/identificador da etapa |
| `quote_reviewed` | Revisão apresentada | categoria e operação pontual/recorrente |
| `quote_whatsapp_opened` | Acionamento da conversa | posição e categoria; é tentativa de handoff |
| `quote_summary_copied` | Cópia pelo usuário | etapa/posição |
| `contact_phone_clicked` | Acionamento do telefone | posição, sem telefone do visitante |

Não emitir `generate_lead`, contratação ou compra por clique no WhatsApp. Não enviar payload do formulário, nome, telefone, endereço ou URL com esses dados. Usar somente enumerações/valores permitidos, com inspeção dos eventos em homologação. Configuração de analytics e eventual consentimento entram após aprovação do tratamento adotado, sem caixa genérica obrigatória de marketing no orçamento.

O atendimento registrará os estados comerciais reais. Se houver uma referência local na mensagem para correlação, identificá-la como referência da solicitação e não protocolo de pedido aceito. Não é requisito bloqueador do primeiro MVP.

## 12. Critérios de aceite

Os AC01–AC12 estão na aba ACEITE. Verificações prioritárias:

1. Crawl de todas as rotas legadas e novas publicadas: status, canonical, title, links, recursos e sitemap.
2. Wizard: urgente pontual; agendada; recorrente; múltiplos destinos; peso desconhecido; carga volumosa; voltar/editar; data anterior; telefone; acentos; texto longo; abertura/cópia/fallback.
3. Mobile real e responsivo: sem scroll lateral, campo encoberto ou CTA bloqueando navegação.
4. Acessibilidade: menu, foco, etapas, labels, erros, zoom, contraste e leitor de tela.
5. Eventos: somente campos permitidos, sem dados pessoais e sem conversões falsas.
6. Desempenho: laboratório antes de publicar e avaliação de campo quando houver amostra. Metas de campo LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 no percentil 75. [D02]
7. Dados e marca: checklist contra aprovações; sem estatísticas, preços ou clientes fabricados.
8. Comercial: resumo é suficiente para triagem, contato certo e processo de retorno definido.

Executar testes do fluxo com mocks ou procedimento interno combinado. Não enviar mensagens de teste ao comercial ou a terceiros por conta própria. Guardar evidências do que foi verificado e declarar o que depende de observação após o lançamento.

## 13. Ordem de trabalho para o futuro agente

**A — Conferência:** ler este pacote; localizar projeto correto; fechar P01; atualizar inventário; receber marca e aprovações operacionais; decidir hospedagem compatível.

**B — Design e conteúdo:** primeira tela mobile, menu, seletor e wizard; templates e conteúdo revisado; validação visual usando a identidade original.

**C — Implementação:** layout global, templates e rotas; conteúdo legado; fichas e serviços; wizard e fallback; SEO; eventos.

**D — Homologação:** critérios de aceite, testes necessários e correções; migração/rollback concretos e revisão do comercial.

**E — Publicação:** somente na etapa autorizada; conferir versão implantada, certificado, domínio e solicitações; monitorar dados reais e evoluir pelo gargalo observado.

Cada entrega deve relatar mudança, motivo, validação e pendências materiais. Não reabrir arquitetura ou trocar URLs sem uma evidência nova que justifique a mudança. O objetivo é concluir e publicar o MVP, com este pacote servindo de base estável.
