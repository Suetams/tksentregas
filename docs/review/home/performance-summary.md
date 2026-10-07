# Home Review — desempenho final em laboratório

Build congelada em 2026-10-07 às 01:47:51 UTC; SHA256 do HTML permaneceu igual antes e depois das medições. Chromium foi iniciado somente após QA informar suíte/capturas concluídas e browsers fechados. Nenhum arquivo da aplicação ou dependência foi alterado.

Três rodadas com cache frio por viewport, CPU 4× mais lenta, download de 1,6 Mbps, upload de 750 kbps e latência de 150 ms. Mobile: 430 × 932, DPR 3, com toques reais. Desktop: 1440 × 900, DPR 1, com cliques reais. As quatro categorias de transporte foram acionadas em cada rodada.

| Métrica | Mobile | Desktop |
|---|---:|---:|
| LCP mínimo–máximo | 1,548–1,552 s | 1,008–1,020 s |
| LCP mediano | 1,548 s | 1,012 s |
| CLS máximo | 0 | 0,002339 |
| Event Timing observado no seletor | 16–40 ms | 16–40 ms |
| Transferência inicial, incluindo HTML | 400.228 bytes | 351.039 bytes |

A imagem do Hero foi o LCP nas seis rodadas. LCP e CLS atendem às metas neste laboratório. Event Timing foi observado a partir de 16 ms e representa interações sintéticas; **não comprova INP de campo**. CLS usa a maior janela de sessão sem deslocamentos atribuídos a entrada recente.

Rubik foi efetivamente renderizada em 6/6 rodadas. O CDP confirmou `Rubik-Bold` na primeira linha do H1, `Rubik-Regular` em “A TKS entrega.” e `Rubik-Regular` no parágrafo principal. Todos têm `isCustomFont: true`, FontFaces carregadas e pesos computados 700/400/400. Os dois arquivos WOFF2 foram transferidos sem falhas.

Pesos transferidos representativos:

- Hero responsivo: 99.322 bytes mobile; 49.650 bytes desktop.
- Imagem compartilhada das categorias: 221.912 bytes.
- Fontes Rubik Bold + Regular: 55.232 bytes.
- CSS: 11.072 bytes.
- Logo SVG: 1.260 bytes compacto mobile; 1.743 bytes horizontal desktop.
- HTML: 5.031 bytes transferidos, contendo 3.111 bytes de JavaScript inline sem compressão.
- Nenhum recurso JavaScript externo.

Não houve respostas HTTP de erro, requests falhos ou overflow horizontal. Cada rodada registrou uma long task de inicialização, entre 100 e 146 ms, sob CPU 4×. A maior parcela de transferência é a imagem das categorias: Chromium antecipou seu lazy loading por proximidade com a viewport.

No desktop, o CLS veio de duas pequenas mudanças durante a troca das fontes. A primeira, de aproximadamente 0,002131, moveu as duas linhas principais do H1 em 4 px e ajustou navegação/CTAs em cerca de 9–10 px. A segunda, aproximadamente 0,000208, ajustou a linha de origem em 1 px e a navegação em até 11 px. O JSON preserva seletores e retângulos anteriores/atuais das fontes de cada deslocamento. No mobile não houve layout shifts observados.

Dados completos: `performance-lab.json`. Script reproduzível: `performance-lab.mjs`. TTFB/CDN e resultados com usuários reais devem ser avaliados na hospedagem; estes resultados são de laboratório local com rede controlada.
