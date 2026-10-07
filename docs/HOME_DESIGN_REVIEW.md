# TKS Home — revisão de design

Entrega de 06/10/2026. Trabalho exclusivamente na Home, sobre a V4 existente. Páginas internas, componentes globais, stack, rotas, orçamento, integrações e dados operacionais foram preservados. Nenhum merge ou publicação em produção.

## Entregáveis

| Item | Documento / evidência |
| --- | --- |
| Auditoria visual anterior, com gravidades e dimensões | [Auditoria](HOME_DESIGN_AUDIT.md), [desktop anterior](review/home/before/1440.png), [mobile anterior](review/home/before/390.png) |
| Referências consultadas, princípios e limites da pesquisa | [Benchmark e direção de arte](HOME_ART_DIRECTION.md#referências-efetivamente-consultadas) |
| Direção própria da TKS | [Composição por momento](HOME_ART_DIRECTION.md#composição-por-momento) |
| Home implementada | `src/pages/index.astro` e showcase exclusivo `src/components/HomeFleet.astro` |
| Capturas completas finais | [1440](review/home/after/1440.png), [1024](review/home/after/1024.png), [768](review/home/after/768.png), [430](review/home/after/430.png), [390](review/home/after/390.png), [360](review/home/after/360.png) |
| Ensaio fotográfico executável | [Shot list: oito tomadas, composição, luz, orientação e prioridade](HOME_SHOT_LIST.md) |
| Mudanças, testes e pendências | Seções abaixo |
| Medições e evidência responsiva | [Resumo de desempenho](review/home/performance-summary.md), [JSON de laboratório](review/home/performance-lab.json), [seis larguras e categorias](review/home/responsive-checks.json) |
| Preview | PR 4: https://deploy-preview-4--resilient-baklava-3561ee.netlify.app/ — atualizar a branch da PR e confirmar o deploy correspondente antes de declarar a nova revisão publicada. |

## Principais mudanças

- Hero com primeira linha ampla acima da fotografia e linhas seguintes ao lado. Imagem sangra à direita; assinatura em Rubik Regular, copy e ações próximas. Mobile/tablet recebem composição própria, com ação antes da fotografia.
- Necessidades em lista editorial ampla, mantendo os quatro contextos do orçamento. Nenhuma microdescrição duplicada, card ou ícone adicional.
- Showcase com foto à esquerda e dados à direita, quatro tabs horizontais e todas visíveis no mobile. Retirados índices/setas de seleção e lista repetida de aplicações. Uma descrição por categoria, capacidade e ação. Altura dos painéis estável nas quatro categorias em todas as seis larguras.
- Para Empresas com título deslocado de eixo no desktop, fotografia de operação e legenda comercial lateral; quatro temas em texto simples. Enquadramento corrigido para manter a pessoa no campo visual.
- 2010 como composição tipográfica ampla, sem contadores ou estatísticas; texto sem repetir o ano. Encerramento com ação de peso próximo à pergunta.
- Header/footer oficiais preservados; somente ajuste de espaço e separação do footer na Home. Nenhuma alteração visual de páginas internas.
- Sources mobile opcionais e pontos focais centralizados para substituir fotografia sem reconstruir a composição. Placeholders continuam documentados internamente; não comprovam frota, equipe ou instalações reais.

## Arquivos de aplicação alterados

1. `src/pages/index.astro`
2. `src/components/HomeFleet.astro`
3. `src/styles/home.css`
4. `src/styles/home-fleet.css`
5. `src/data/home-media.ts`
6. `tests/home-v2.spec.ts`

Documentação: este relatório, auditoria, direção/benchmark, shot list, evidências em `docs/review/home/` e registro de preview. O diff anterior de `docs/PREVIEW_NETLIFY.md` foi preservado. Nenhuma dependência, configuração de build, fonte, logo ou arquivo de página interna foi alterado.

## QA executado

- `npm run check`: 36 arquivos, zero erros, avisos ou hints.
- `npm run lint`: aprovado, zero warnings.
- `npm run build`: aprovado, 19 páginas estáticas.
- `npm test`: **44/44 aprovados**, 45,7 s, projetos desktop e mobile. Fluxo/CTAs, rotas, tabs, SVG/Rubik, foco/menu/inert, reduced motion, noJS e verificações automatizadas WCAG AA.
- Screenshots completos em 1440, 1024, 768, 430, 390 e 360 px, examinados visualmente. Sem overflow, imagem quebrada, erro JavaScript, resposta HTTP local inválida ou sobreposição em Para Empresas.
- Quatro categorias de frota conferidas nas seis larguras; altura do campo de decisão estável em cada largura. Inspeção adicional de oito painéis em 430/360. Uma aparente perda de “kg” era recorte do screenshot sem gutter: medição e captura da seção inteira confirmaram a unidade íntegra no produto.
- Fotografia, quebras, grid, ritmo, links, foco, toque e encerramento examinados; ajustes de enquadramento e composição realizados antes das capturas finais.

Automatização e emulação em Chromium não substituem revisão em aparelhos reais, nem certificam integralmente acessibilidade ou Core Web Vitals de campo.

## Desempenho de laboratório

Seis rodadas frias, CPU 4×, rede 1,6 Mbps/150 ms. Hash do build estável durante as medições.

| Métrica | Mobile | Desktop |
| --- | ---: | ---: |
| LCP mediano | 1,548 s | 1,012 s |
| LCP máximo | 1,552 s | 1,020 s |
| CLS máximo | 0 | 0,002339 |
| Event Timing do seletor | 16–40 ms | 16–40 ms |
| Transferência inicial | 400 KB | 351 KB |

Rubik Bold no H1 e Regular na assinatura/body comprovadas via CDP em 6/6 rodadas. Nenhuma request falhou. Hero de aproximadamente 99 KB no mobile e 50 KB no desktop, frota 222 KB e fontes 55 KB. Não interpretar Event Timing como INP de campo. Capturas de documentação não integram o payload da Home.

## Pendências reais

- Produzir e autorizar fotografias da TKS seguindo o shot list; os placeholders ainda são a principal limitação para uma presença própria da empresa.
- Validar operacionalmente capacidades de 20 / 400 / 1.200 / 3.000 kg, dimensões, restrições e disponibilidade antes de produção. Os valores continuam em `src/data/home-fleet.ts`.
- Confirmar canais comerciais/WhatsApp, cobertura, horários e informações legais já pendentes no projeto. Nada disso foi inventado nesta revisão.
- Pesquisa externa de referências setoriais limitada pela rede. Foram consultadas três fontes oficiais de estúdios via GitHub; duas demos foram renderizadas em desktop/mobile. Não declarar inspeção dos sites públicos de automotivo/arquitetura que ficaram bloqueados.
- Confirmar o novo deploy da revisão pela integração Netlify. Não montar um hostname a partir de uma branch ou assumir que push equivale a publicação.

## Próxima revisão

Avaliar apenas esta Home na preview atualizada. A aprovação visual não inclui produção nem autoriza continuar para páginas internas. Elas só receberão outra rodada quando solicitado.
