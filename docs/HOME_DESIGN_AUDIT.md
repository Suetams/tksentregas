# TKS Home — auditoria visual antes da implementação

Revisão de 06/10/2026. Escopo exclusivo da Home. Nenhuma página interna foi redesenhada ou auditada visualmente nesta rodada.

## Base e método

Preview indicada pelo usuário: https://deploy-preview-4--resilient-baklava-3561ee.netlify.app/. O Git remoto identifica a PR 4 com `18b8b8a`, branch `preview/home-v4-download`. Seu aplicativo é idêntico ao de `15f2841`, base local; a diferença são somente ZIP e instruções de entrega. A URL pública não foi renderizada neste ambiente: seu hostname não integra a política de rede atual. A inspeção usa o build local equivalente, em Chromium, com Rubik carregada.

Capturas anteriores à alteração em `/workspace/artifacts/tks-home-review/before/`: 1440, 1024, 768, 430, 390 e 360 px, completas e primeira viewport. Header, menu, Hero, necessidades, quatro categorias, operação, história, encerramento e footer foram vistos visualmente; conclusões não derivam apenas do DOM.

Fonte de verdade: `TKS_Identidade_Vetorial_v1.zip`, LEIA_ME e manual oficial. Azul #011E3E; branco e preto; Rubik; arquivos originais de marca, sem alterar geometria. O manual comunica inclinação, presença e amplitude — não pede efeitos futuristas.

## Problemas classificados

| Gravidade | Elemento / observação concreta | Consequência / direção |
| --- | --- | --- |
| CRÍTICO para a versão fotográfica final | Hero, frota e operação usam imagens conceituais. Ambientes industriais e veículos anônimos repetem uma linguagem genérica; não demonstram a empresa real. | A fotografia ainda limita a personalidade. Preparar enquadramentos substituíveis, registro de origem e shot list; nenhuma imagem conceitual serve como prova da TKS. |
| IMPORTANTE | Hero 1440: o bloco branco termina perto de 575 px; foto e texto são duas faixas independentes. A seção mede aproximadamente 1.018 px, além do header de 104 px. | A primeira viewport não entrega uma composição completa. Integrar fotografia e tipografia numa composição assimétrica e reduzir a altura total. |
| IMPORTANTE | Hero 768: o conteúdo volta a formar um bloco longo antes da fotografia; seção com aproximadamente 976 px. | Tablet precisa de composição intermediária, não somente desktop comprimido. |
| IMPORTANTE | Necessidades e navegação da frota repetem índices, listas, linhas e setas; a frota acrescenta aplicações e observação depois da foto. | A escolha parece mais longa do que é. Manter a lógica de orçamento, retirar informação repetida e diferenciar navegação de apresentação. |
| IMPORTANTE | A frota ocupa cerca de 1.222 px no desktop. Seu visual é grande, mas aplicações e CTA ficam afastados das categorias. | Aproximar visual, capacidade e decisão; mostrar um único protagonista com menos linhas de informação. |
| IMPORTANTE | Mobile: a quarta categoria da frota está parcialmente fora da tela em 360/390/430. | Evitar depender da descoberta do scroll horizontal. Todas as quatro escolhas devem ser visíveis e continuar acessíveis por teclado. |
| IMPORTANTE | Necessidades, empresa, história e encerramento repetem título à esquerda e complemento à direita. | Criar ritmos diferentes conforme a função: escolha, fotografia, operação, memória e convite. |
| IMPORTANTE | A operação usa a composição previsível 50/50, mesma hierarquia e divisores em quatro itens. | Transformar em matéria visual de operação, com foto maior e itens de texto simples. |
| IMPORTANTE | “Desde 2010” tem escala, mas a copy repete o ano e acrescenta outra lista de divisores. | Usar a data como linguagem institucional, reduzir a redundância e manter só fatos existentes. |
| IMPORTANTE | CTA final: headline grande, ação pequena e distante sobre uma linha extensa. Campo navy continua diretamente no footer. | Aproximar ação e pergunta, dar peso à ação e distinguir fechamento do conteúdo institucional. |
| POLIMENTO | Todas as partes principais usam Rubik Bold com quebras e pesos similares. | Contrastar a declaração principal com a assinatura em Regular, sem trocar a tipografia da marca. |
| POLIMENTO | Setas se repetem mesmo em botões de seleção que não levam a outra página. | Reservar setas para ações de navegação. Seleção da frota se comunica por texto, posição e estado. |
| POLIMENTO | O reveal existente é um deslocamento de 4 px em conjuntos inteiros. | Manter movimento mínimo e função clara; não ocultar conteúdo essencial para animá-lo. |

## O que está funcionando e deve ser preservado

- Logo oficial, proporções, versão horizontal de 320 px e compacto mobile de 96 px.
- Azul institucional, Rubik local, contraste e HTML semântico.
- Header sticky sem mudança de altura; menu mobile com Escape, foco contido e fundo inert.
- Quatro caminhos com contexto correto no orçamento e categorias com capacidades centralizadas.
- Ausência de cards, shadows fortes, glassmorphism, carrossel automático ou estatísticas inventadas na V4. Esses problemas históricos não devem ser atribuídos à versão inspecionada.
- Nenhum overflow horizontal observado nas seis larguras anteriores à implementação.

## Dimensões anteriores

| Largura | Altura total da página | Hero | Frota |
| --- | ---: | ---: | ---: |
| 1440 | 5040 px | 1018 px | 1222 px |
| 1024 | 4235 px | 767 px | 969 px |
| 768 | 4727 px | 976 px | 1019 px |
| 430 | 4783 px | 763 px | 888 px |
| 390 | 4764 px | 782 px | 874 px |
| 360 | 4764 px | 762 px | 857 px |

Altura é evidência de ritmo, não uma meta isolada. A redução não deve prejudicar leitura, fotografia ou alvos de toque.

## Decisão estrutural

Preservar os conteúdos úteis; fazer necessidades e frota funcionarem como um único capítulo de escolha, sem acrescentar seções. Alterar a composição das demais partes para romper a repetição. Preservar rotas, orçamento, SEO de revisão, dados e componentes compartilhados. A implementação só começa após esta auditoria e o registro da direção de arte.
