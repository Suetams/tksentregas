# TKS 2.0 — Home V3

Direção de arte aplicada sobre a V2 existente em 06/10/2026. Astro, rotas, páginas internas e o orçamento foram preservados. O escopo abrange somente a Home e seus componentes globais necessários; não autoriza produção.

## Composição e interação

- Hero integrado à fotografia, headline em três linhas, duas ações e origem institucional discreta.
- Necessidades em uma lista editorial de quatro linhas, sem cards ou ícones decorativos. Links mantêm os valores aceitos em `/orcamento`: `documentos`, `mercadorias`, `carga`, `recorrente`.
- Showcase de uma categoria de transporte por vez, com fotografia, aplicações e capacidade. Tabs verticais no desktop e horizontais no mobile; setas, Home/End e foco visível. Nenhuma rotação automática.
- Operação empresarial em composição navy com fotografia; história protagonizada por 2010; encerramento azul com uma ação.
- Header sticky de altura estável, menu mobile próprio e footer compacto. Movimento reduzido respeitado; textos não ficam invisíveis durante revelações.
- Tokens de cor, espaço, tipografia, largura, radius, sombra e transição em `src/styles/tokens.css`. Manrope e DM Sans variáveis, locais. Setas de ação usam somente `Arrow.astro`. Sem Bootstrap ou biblioteca de animação.

## Controle de conteúdo e fotografia

`src/data/home-fleet.ts` centraliza os valores 20, 400, 1.200 e 3.000 kg e registra a aprovação operacional pendente. Não são garantia de disponibilidade ou aceitação de cargas.

`src/data/home.ts` registra a origem dos textos desde 2010 e Campinas/SP, necessidades e pendências de conteúdo. Esses textos vêm da direção fornecida e do inventário do projeto, sem criar história institucional adicional.

`src/data/home-media.ts` centraliza Hero, operação e visual das categorias. Os novos assets foram gerados como placeholders conceituais de desenvolvimento: veículos sem marca, cenário industrial, iluminação natural e paleta discreta. Não comprovam frota, equipe ou instalações reais da TKS. O visual das quatro categorias usa enquadramentos de um único arquivo com quatro fotografias independentes, definidos no registro de mídia. Fotos autorizadas devem substituir essas fontes antes da publicação definitiva.

O logo original não foi substituído nem redesenhado. Seu arquivo PNG/SVG não ficou recuperável no ambiente; permanece a identificação textual temporária existente. Ao adicionar o original em `public/brand/tks-logo.png`, o componente passa a utilizá-lo no próximo build. Não foi desativada validação TLS para tentar obtê-lo do site anterior.

Não foram acrescentados clientes, entregas, avaliações, SLA, rastreamento, seguro, certificações, cobertura, horários ou contatos fictícios. WhatsApp e redes não confirmados não recebem destinos inventados. Os avisos de desenvolvimento permanecem internos; as imagens têm descrição acessível de representação conceitual.

## Verificações

- `npm ci` com lockfile: instalação reproduzida.
- `npm run check`: 36 arquivos Astro, sem erros, avisos ou hints.
- `npm run lint`: ESLint para Astro e TypeScript, sem erros ou avisos.
- `npm run build`: 19 páginas estáticas geradas.
- `npm test`: 44 testes Playwright aprovados, incluindo axe, orçamento, rotas, 404, versão sem JavaScript, teclado, tabs, movimento reduzido e CTAs.
- Renderização e inspeção visual em 1440, 1024, 768, 430 e 360 px. Sem overflow horizontal, erros de página ou imagens quebradas.

Os testes da Home permanecem em `tests/home-v2.spec.ts` para preservar a estrutura da suite, com contratos atualizados para V3. Capturas, verificação responsiva e medição de desempenho ficam fora do código publicado, em `/workspace/artifacts/tks-home-v3`. Emulação Chromium não equivale a aparelhos físicos. Testes axe não certificam toda a acessibilidade, e resultados locais de desempenho não certificam métricas de campo.

Laboratório final: seis rodadas com cache frio, CPU 4×, rede 1,6 Mbps e latência 150 ms. LCP mediano mobile 430 px de 1,552 s e desktop de 1,516 s; CLS máximo 0,002778. Event Timing de interação com o seletor entre 16–48 ms, sem equivaler a INP de campo. Transferência inicial mediana de aproximadamente 400 KB. Nenhum erro HTTP ou overflow. Fontes e imagens são locais; Hero recebe prioridade alta e imagens inferiores são lazy. Não há dependência de animação adicionada.

## Arquivos principais

- `src/pages/index.astro`
- `src/components/Header.astro`, `Footer.astro`, `HomeFleet.astro`, `Arrow.astro`
- `src/layouts/Layout.astro`
- `src/styles/tokens.css`, `home.css`, `home-fleet.css`, `navigation.css`
- `src/data/home.ts`, `home-fleet.ts`, `home-media.ts`
- `src/assets/home-v3-hero.png`, `home-v3-vehicles.png`
- `eslint.config.js`, `package.json`, `package-lock.json`
- `tests/home-v2.spec.ts`, `README.md`, `docs/HOME_V3.md`, `docs/CLOUD_SETUP.md`

## Entrega e pendências

A branch de revisão é `preview/home-v3`, separada de `main`. Nenhum deploy em produção ou alteração de domínio foi realizado. O build local está validado, mas não existe URL pública de preview criada: não há hospedagem conectada e a API GitHub retorna bloqueio da política de rede. Um endereço local ou uma branch não são uma preview acessível no PC do usuário.

Antes da produção: original do logo; fotos autorizadas; confirmação de capacidades, medidas, restrições e disponibilidade; textos institucionais, contatos e WhatsApp; cobertura, horários e privacidade. A migração dos artigos continua uma pendência histórica fora do escopo desta rodada. `noindex,nofollow`, robots e cabeçalhos de desenvolvimento foram mantidos.
