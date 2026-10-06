# TKS 2.0 — Home V2

Rodada de refatoração visual solicitada em 06/10/2026, sobre a implementação Astro existente. Rotas, páginas e o orçamento em quatro etapas foram preservados. Esta rodada não autoriza publicação em produção.

## Composição

- Hero fotográfico integrado, com headline, duas ações e três informações discretas.
- Quatro necessidades ligadas aos valores aceitos pelo orçamento: `documentos`, `mercadorias`, `carga`, `recorrente`. A última também ativa a operação recorrente.
- Uma seção editorial de soluções/categorias, substituindo a repetição de soluções e frota na Home. Quatro tabs com teclado, imagem, capacidade de referência, aplicações e orçamento.
- Seção empresarial navy, quatro pontos simples de confiança e encerramento com uma ação. Nenhum formulário ou processo completo na Home.
- Header sticky com dimensões estáveis, navegação mobile e footer curto. Tokens, botões e containers compartilhados revisados.

## Controle de conteúdo

`src/data/home-fleet.ts` concentra os valores editáveis: Moto 20 kg, Utilitário 400 kg, Van/Furgão 1.200 kg, Caminhão 3/4 3.000 kg. Eles são referências ainda pendentes de aprovação operacional, não uma garantia de disponibilidade ou aceitação de carga.

`src/data/home.ts` preserva a origem do marco “Desde 2010”, a condição conceitual das imagens, a pendência do canal comercial e a ausência de aprovação de produção. Os CSVs originais permanecem intactos.

As imagens existentes de Hero, catálogo e operação são conceituais. Não retratam comprovadamente frota, instalações ou equipe da TKS. A Home mantém uma observação discreta junto às categorias e descrições acessíveis; não apresenta esses assets como fotos reais da empresa. Fotos próprias autorizadas permanecem necessárias antes da publicação definitiva.

Nenhum número de clientes, entregas, SLA, seguro, certificação, rastreamento, cobertura ou atendimento 24h foi acrescentado. Contatos e redes sociais não confirmados não recebem links fictícios.

## Validação

Executar `npm run check`, `npm run build` e `npm test`. O projeto não oferece comando separado de lint; a checagem Astro/TypeScript é o verificador disponível.

`tests/home-v2.spec.ts` cobre os quatro caminhos e seu preenchimento, capacidades e navegação do seletor, teclado, sticky sem mudança de altura, CTA final, retirada dos avisos públicos, movimento reduzido e alternativa sem JavaScript. As suites existentes continuam verificando rotas, orçamento e acessibilidade automatizada.

Capturas e resultados de laboratório são gerados fora do código publicado, em `/workspace/artifacts/tks-home-v2`. Medições locais não certificam Core Web Vitals em produção; INP depende de dados de navegação reais. Testes mobile usam emulação Chromium, não aparelhos físicos.

Resultado desta rodada: checagem Astro/TypeScript sem erros ou avisos, build de 19 páginas concluído, 42 testes Playwright aprovados incluindo a análise axe A/AA. Capturas revisadas em 360, 390, 768, 1024 e 1440 px sem overflow ou imagens quebradas. Foram corrigidos o contraste dos índices de necessidades, a transparência de texto durante revelação e o enquadramento de veículos para excluir as categorias vizinhas do catálogo.

## Arquivos desta rodada

- `src/pages/index.astro`
- `src/components/Header.astro`, `Footer.astro`, `HomeFleet.astro`, `Vehicle.astro`
- `src/layouts/Layout.astro`
- `src/styles/global.css`, `home.css`, `home-fleet.css`, `navigation.css`
- `src/data/brand.ts`, `home.ts`, `home-fleet.ts`
- `tests/home-v2.spec.ts`
- `README.md`, `docs/HOME_V2.md`

## Entrega da prévia

A branch `preview/home-v2` contém a refatoração, separada de `main`. Nenhum deploy ou alteração no domínio da TKS foi realizado. A prévia Astro local responde na porta 4321, mas esse endereço não abre no PC do usuário. Capturas visuais foram exibidas na conversa.

O ambiente não possui conta/configuração Netlify ou Vercel conectada. A tentativa de túnel temporário ficou bloqueada ao baixar a ferramenta oficial; o acesso externo adicional não foi concluído. Por isso, não há URL pública interativa criada nesta rodada. Para disponibilizá-la, conectar `Suetams/tksentregas` a uma hospedagem de revisão e selecionar `preview/home-v2`; `netlify.toml` já fornece build, saída e bloqueio de indexação. Não usar o domínio comercial.

## Pendências reais antes da publicação

- Arquivo original do logo em PNG/SVG: a imagem da conversa não ficou disponível como arquivo recuperável no ambiente. O site oficial retornou erro TLS no proxy; não foi desativada a validação de certificado. A identificação textual existente foi preservada, sem gerar ou redesenhar um logo. O original será usado automaticamente ao adicionar `public/brand/tks-logo.png` e reconstruir.
- Aprovação operacional de frota, capacidades, medidas, restrições e disponibilidade.
- Aprovação do marco institucional desde 2010 e dos textos comerciais.
- Telefone canônico para receber orçamentos, contatos e redes sociais oficiais.
- Fotos próprias autorizadas e paleta/versões oficiais da marca.
- Cobertura, horários, cadastro institucional e política de privacidade.
- Migração dos artigos e auditoria de URLs antes de substituir o site atual.

Nenhum domínio da TKS deve ser conectado à prévia desta rodada. `noindex,nofollow`, `robots.txt` e o cabeçalho de desenvolvimento Netlify permanecem ativos.
