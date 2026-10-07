# TKS Home — direção de arte e benchmark

Definida antes da implementação, em 06/10/2026, a partir da auditoria da Home V4, do pacote oficial da marca e das fontes abaixo. Escopo: exclusivamente a Home. Não é autorização para produção.

## Referências efetivamente consultadas

Os sites públicos de Polestar, Porsche, Aesop, Vitra e Locomotive não puderam ser abertos: o proxy retornou 403 antes da resposta dos sites. Não há uma pesquisa visual atual desses endereços. A pesquisa executável utilizou snapshots oficiais publicados no GitHub, permitido pela rede do ambiente.

| Fonte primária | Evidência vista | Princípio extraído | Aplicação / limite TKS |
| --- | --- | --- | --- |
| [Locomotive Scroll V4.1.4](https://github.com/locomotivemtl/locomotive-scroll/tree/4.1.4/docs), commit `f28ef349` | Demo oficial renderizada localmente a 1440 px; capturas de abertura e trecho intermediário; fotografias e SCSS examinados. É uma demo de estúdio, não uma auditoria do site público atual. | Diferença expressiva entre escala de título e metadados; fotografia documental; informação em linhas simples. | Abertura com presença tipográfica e poucos controles. Enquadramentos diferentes entre transporte e operação; sem tratamento vintage ou cópia das fotos. |
| [Locomotive Scroll V5 — landing oficial](https://github.com/locomotivemtl/locomotive-scroll/tree/b6bcc569e8035334face5c1f88684590bc4d567f/www/landing), commit `b6bcc569` | HTML/CSS/JS oficial renderizado localmente a 1440 px, sem erros JavaScript. A página mostra ©2026. | Assimetria deliberada, espaço negativo com função, superfície sólida e hierarquia entre título, apoio e ações. | Evitar blocos sempre alinhados da mesma maneira. O azul adotado é exclusivamente o da TKS; não importar biblioteca, símbolos ou linguagem experimental. |
| [Lenis V1.0.45 — website oficial](https://github.com/darkroomengineering/lenis/tree/v1.0.45/website), commit `5583bdbd` | Código do website, imagem OG oficial e estilos vistos. O site não foi executado. A imagem contém ©2024. | Navegação editorial com separadores de 1 px, grid responsivo e espaço no header. | Clareza de listas e seleção. Não adotar rosa, WebGL, cursor, marquee, parallax ou smooth-scroll dependente de biblioteca. |

Estas referências sustentam princípios de composição e interação. Nenhum layout, código, fonte ou asset delas é incorporado ao aplicativo. A amplitude setorial da pesquisa externa continua limitada pela rede; não atribuir a automotivo/arquitetura uma inspeção que não aconteceu.

Evidências locais da pesquisa: `/tmp/tks-design-review-locomotive-v4-top.png`, `-v4-mid.png`, `-v5-top.png`, `-v5-mid.png`; imagem oficial Lenis em `/tmp/tks-design-review-lenis-old/website/public/og.png`.

As duas demos Locomotive também foram renderizadas e examinadas em 360×800, sem overflow ou erros JavaScript. A V4 reduz seu título para aproximadamente 43 px; a V5 usa 54 px e troca a assimetria desktop por alinhamento à esquerda e ações em coluna. Ambas usam fotografia/lista na largura útil. Esses princípios apoiam a composição mobile própria da TKS. Não copiar os links pequenos de navegação, o espaço excessivo acima do título ou o texto de apoio estreito da V5. Testes pontuais de Tab nas referências não equivalem a auditoria de acessibilidade.

## Princípio da composição

A identidade do manual combina **presença, amplitude e movimento**. Traduzir isso com Rubik, azul profundo sólido, enquadramento e variações de escala. A fotografia deve comunicar trabalho; a tipografia comunica a TKS. Nenhum símbolo novo, arco, seta decorativa, gradiente, glow, render de veículo ou logo gerado.

O conteúdo é organizado por decisões do visitante: entender a proposta, indicar necessidade, conhecer a categoria de transporte, reconhecer a possibilidade de operação recorrente e pedir atendimento. A data 2010 funciona como assinatura institucional, não como estatística ou contador.

## Composição por momento

1. **Hero:** uma declaração tipográfica ampla e uma única fotografia. A primeira linha ocupa espaço acima da foto; a imagem começa ao lado das linhas seguintes e sangra à direita. Apoio e ação ficam próximos da declaração. “A TKS entrega.” em Rubik Regular contrasta com a mensagem principal Bold. Origem institucional discreta; retirar label redundante. Mobile tem hierarquia e recorte próprios.
2. **Necessidades + categoria:** um único capítulo comercial em fundo branco. Quatro links grandes em lista, com contexto de orçamento, sem microdescrições ou ícones. A frota muda de linguagem: navegação tipográfica, fotografia protagonista e uma descrição curta. Retirar índices e setas da seleção da frota para não repetir a lista anterior.
3. **Frota:** foto, categoria e capacidade no mesmo campo de decisão. Um veículo por vez, sem autoplay. Quatro categorias descobertas sem depender de swipe; texto e capacidade permanecem em dados editáveis. Sem listar novamente três aplicações que já apareceram na necessidade.
4. **Para empresas:** headline sobre campo institucional; fotografia e texto em composição editorial, diferente do 50/50 anterior. Distribuição, rotas programadas, e-commerce e operações recorrentes como texto simples. Uma ação para a rota existente.
5. **Desde 2010:** data com amplitude tipográfica e respiro; copy curta, sem repetir o ano. Sem foto histórica inventada, contadores ou números adicionais.
6. **Encerramento:** pergunta e ação próximas, ambas com peso comercial. Evitar o link pequeno isolado na extremidade oposta. Footer existente preservado, com eventual ajuste de espaço somente na Home.

## Regras executáveis

- Preservar logo, arquivos oficiais, Rubik, azul #011E3E e dimensões mínimas do manual.
- Preservar stack, rotas, SEO, orçamento, integrações e páginas internas. CSS novo limitado à Home; `HomeFleet` é exclusivo dela.
- Não instalar biblioteca de animação ou framework visual. Usar CSS, tabs semânticas e JavaScript existente.
- Não esconder texto para revelar; movimentar poucos pixels, 200–480 ms, com reduced motion. Setas somente nas ações de navegação.
- Corpo em tamanho confortável; títulos fluidos com `clamp()`. Poucas bordas; sem sombras ou radius ornamentais.
- Imagens em WebP, dimensões reservadas, `sizes`, Hero prioritário e lazy loading abaixo da dobra.
- Revisar manualmente 1440, 1024, 768, 430, 390 e 360 px. Avaliar altura, ritmo, recorte e ação — não apenas ausência de overflow.

## Estratégia fotográfica de desenvolvimento

Usar os placeholders existentes como composição provisória, sem aplicar logos artificiais nem declarar que mostram frota, equipe ou instalações da empresa. Não gerar outra camada de imagens genéricas nesta rodada. A origem fica no registro interno; fotos decorativas têm alt vazio e não acrescentam alegações ao conteúdo.

`src/data/home-media.ts` é o ponto de troca. Hero e operação devem aceitar enquadramento desktop/mobile; `homeFleetPhotos` recebe uma foto por categoria. A implementação reserva dimensões, mantém responsive image e aceita fotos aprovadas sem mudar a estrutura. O [shot list](HOME_SHOT_LIST.md) orienta produção de fotos reais.

Capacidades 20 / 400 / 1.200 / 3.000 kg continuam centralizadas e pendentes de validação operacional. 2010 e Campinas/SP vêm do conteúdo fornecido; a cidade não vira promessa de cobertura. Nenhum contato, disponibilidade, SLA, seguro, rastreamento ou número comercial novo será criado.
