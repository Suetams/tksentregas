# TKS 2.0 — Home V4

Handoff aplicado em 06/10/2026 sobre a Home V3 existente. Escopo: Home, identidade e componentes globais necessários. Astro, rotas, páginas internas, SEO de desenvolvimento e orçamento foram preservados. Sem produção, Bootstrap ou biblioteca de animação.

## Fonte de verdade da marca

Antes da implementação foram lidos LEIA_ME, manual (8 páginas), kit Canva (6), SVGs, referência aprovada, assets Web e fontes do pacote `TKS_Identidade_Vetorial_v1.zip`. Os documentos de referência estão preservados em `docs/brand/`. Instruções de geração contidas no pacote não foram executadas; os assets fornecidos foram utilizados diretamente.

Azul institucional **#011E3E**, branco **#FFFFFF**, preto **#000000**; neutros apenas no apoio. Hover #011934 é a mistura documentada do azul com 16% de preto. Focus usa a cor institucional; nenhuma nova paleta decorativa foi criada.

Os quatro SVGs em `public/brand/` são cópias byte a byte dos arquivos fornecidos. Não há filtro, contorno, sombra, redigitação ou alteração da geometria. A margem de proteção de 1/5 da altura TKS já está no viewBox. Horizontal azul no header claro e branco no footer, 320 px. Nas telas de até 700 px, compacto oficial de 96 px, respeitando o mínimo de 64 px e liberando espaço para navegação. Essa escolha segue o sistema responsivo do manual.

Rubik Regular 400 e Bold 700 fornecidas foram convertidas para WOFF2 local, com subconjunto latino incluindo português e pontuação. Arquivos de aproximadamente 27 KB cada, `font-display: swap`; Bold recebe preload. Não se carregam Italic ou Liberation Sans, usados no pacote para outros fins. Licença OFL preservada. Favicons, ícones Apple e manifesto também são oficiais.

## Direção de arte

- Hero claro com grid editorial, títulos em capitalização natural, copy e ações separadas pela hierarquia. Fotografia única sangra de uma borda à outra, sem card ou montagem de veículos.
- Quatro necessidades em lista: documentos e pequenos volumes; mercadorias e peças; cargas maiores; operação para empresas. Enums e preenchimento do orçamento preservados.
- Showcase branco, fotografia dominante e uma categoria ativa. Navegação vertical acima de 900 px, horizontal abaixo; teclado, toque e foco visível. Sem autoplay.
- Operação empresarial em #011E3E, fotografia grande e quatro itens de texto. História com “Desde 2010.” e texto institucional existente.
- Encerramento institucional com uma ação e footer compacto em três grupos.
- Header sticky estável; menu mobile ocupa a área disponível, contém o foco e torna o fundo inert enquanto aberto. Escape e resize restauram foco/estado.
- Tokens de espaçamento, largura, tipografia e movimento centralizados. Grid editorial de 12 colunas e composição mobile própria. Motion 180/280/480 ms, respeitando movimento reduzido. Sem ocultar conteúdo essencial para animá-lo.

## Fotografias e conteúdo editável

`src/data/home-media.ts` centraliza Hero e operação. Para fotos individuais da frota, preencher `homeFleetPhotos[id]` com `src`, `alt`, `position` e `mobilePosition`. A ausência de uma foto individual mantém o placeholder da categoria. Para a história, definir `homeMedia.history` com os mesmos campos; a composição fotográfica já está preparada e não aparece enquanto o asset estiver ausente.

As imagens atuais seguem conceituais, sem marca TKS artificial aplicada a terceiros. Não comprovam frota, equipe ou instalações da empresa. A origem e a necessidade de substituição permanecem documentadas em `homeMediaReview` e controles internos, sem avisos visuais de desenvolvimento na Home.

Capacidades seguem centralizadas em `src/data/home-fleet.ts`: 20, 400, 1.200 e 3.000 kg, pendentes de validação operacional. Desde 2010 e Campinas/SP vêm do conteúdo fornecido; Campinas aparece como contexto institucional, sem definir cobertura. Nenhuma informação comercial nova foi inventada.

## Validação

`npm run check` sem erros, avisos ou hints; `npm run lint` aprovado; `npm run build` gera 19 páginas. Suite completa `npm test`: 44 testes aprovados. Após a preparação opcional de fotografia da história, foram repetidos os testes Home e axe pertinentes. Suites de orçamento, rotas e segurança não receberam alterações.

Inspeção e capturas em 1440, 1280, 1024, 768, 430, 390 e 360 px, incluindo identidade, fontes efetivamente carregadas, menu, teclado, tabs, movimento reduzido, CTAs e overflow. Axe WCAG A/AA em Home, Frota e todas as etapas do orçamento. Automatização não certifica acessibilidade integral nem substitui aparelhos reais.

Capturas e medições de laboratório ficam fora do código publicado, em `/workspace/artifacts/tks-home-v4`. Métricas locais não certificam Core Web Vitals de campo, especialmente INP.

## Arquivos principais

- `src/pages/index.astro`, `src/layouts/Layout.astro`
- `src/components/Header.astro`, `Footer.astro`, `HomeFleet.astro`
- `src/styles/tokens.css`, `home.css`, `home-fleet.css`, `navigation.css`
- `src/data/brand.ts`, `home.ts`, `home-media.ts`
- `src/assets/fonts/Rubik-Regular.woff2`, `Rubik-Bold.woff2`
- `public/brand/*.svg`, favicon, ícones Apple e manifesto oficiais
- `package.json`, `package-lock.json`, `tests/home-v2.spec.ts`
- `README.md`, `docs/HOME_V4.md`, `docs/PREVIEW_NETLIFY.md`, `docs/brand/`

## Prévia e pendências

Branch de revisão: `preview/home-v4`. Nenhum domínio comercial ou branch de produção foi alterado. Publicação Netlify precisa corresponder ao commit dessa branch, em contexto branch-deploy ou deploy-preview. A URL base informada pelo usuário não foi validada como Home V4; configuração e evidências estão em `docs/PREVIEW_NETLIFY.md`.

Pendências reais: fotografias autorizadas, capacidades/medidas/restrições/disponibilidade, contatos oficiais e WhatsApp, cobertura, horários e privacidade. Logo, cor e fonte deixaram de ser pendências após o pacote oficial. Artigos legados continuam fora do escopo desta rodada. Noindex, robots e cabeçalhos de desenvolvimento permanecem ativos.
