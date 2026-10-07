# TKS — revisão da nova Home

Preview de revisão: https://deploy-preview-6--endearing-pie-27937b.netlify.app/
PR: https://github.com/Suetams/tksentregas/pull/6
Branch: `preview/home-janela-em-transito`
Código visual validado: `3068a64280dc61ba241d89ea87948cfaa824be55`
Base V5: `79f52d1f24e5132ba5300970010d1edc319fbc67`

A Home foi reconstruída com a direção **Janela em trânsito**. Fotografias brasileiras e gestos reais de entrega acompanham a passagem do documento à carga. A escala tipográfica Rubik, a identidade oficial TKS e o azul #011E3E organizam a página. As 18 páginas internas mantêm o HTML compilado da V5, byte por byte. A alteração está em uma PR aberta e em deploy preview; não houve merge nem publicação em produção.

## Pesquisa, alternativas e artboards

A pesquisa examinou 15 sites ou execuções web reais. Os registros distinguem páginas atuais de estudos históricos. A análise detalhada do Top 5 cobre hero, composição, tipografia, fotografia, ritmo, navegação, narrativa, movimento, microinterações, mobile e aplicação à TKS; estados que não foram observados são identificados.

- [15 referências e análise do Top 5](https://github.com/Suetams/tksentregas/blob/preview/home-janela-em-transito/docs/review/home-v6/REFERENCIAS.md)
- [Três conceitos e critérios de escolha](https://github.com/Suetams/tksentregas/blob/preview/home-janela-em-transito/docs/review/home-v6/CONCEITOS.md)
- [Artboard desktop 1440, anterior à implementação](https://github.com/Suetams/tksentregas/blob/preview/home-janela-em-transito/docs/review/home-v6/artboard-desktop-1440.webp)
- [Artboard mobile 390, anterior à implementação](https://github.com/Suetams/tksentregas/blob/preview/home-janela-em-transito/docs/review/home-v6/artboard-mobile-390.webp)

**Janela em trânsito** foi escolhida porque combina a marca azul com presença fotográfica e uma narrativa legível do serviço pequeno à carga maior. Os seletores aproximam a escolha do orçamento, sem inventar números comerciais ou depender de uma sessão de fotos ainda não realizada. **Escala primeiro** daria mais protagonismo aos veículos, mas precisa de quatro fotografias próprias coerentes. **Diário documental** permitiria uma narrativa mais autoral, mas depende de personagens, histórias e imagens reais da TKS.

## Experiência implementada

- Hero com a mensagem “DO DOCUMENTO À CARGA. A TKS ENTREGA.” e fotografia urbana horizontal/vertical.
- Lista editorial de necessidades que atualiza a janela fotográfica e mantém links de orçamento com contexto.
- Frota com quatro seleções: Moto 20 kg, Utilitário 400 kg, Van/Furgão 1.200 kg e Caminhão 3.000 kg. A janela cresce conforme a capacidade. As imagens representam operações e cargas; não são apresentadas como veículos da TKS.
- Bloco “Desde 2010”, área para empresas e fechamento com orçamento.
- Cabeçalho e rodapé exclusivos da Home, com logotipos oficiais. Menu mobile com teclado, Escape e isolamento do conteúdo enquanto aberto.
- Movimento discreto, respeito a reduced motion e alternativas funcionais sem JavaScript.
- Contato flutuante ligado ao canal existente. O cadastro canônico não contém um número confirmado de WhatsApp; por isso o destino atual é `/contato`. Nenhum telefone foi inventado.

## Validação executada

| Verificação | Resultado e limite |
|---|---|
| `npm run check` | 0 erros, 0 avisos e 0 hints |
| `npm run lint` | Passou |
| `npm run build` | Passou; 19 páginas estáticas |
| `npm run test:home-contract` | 6 testes passaram |
| Integridade das internas | 18 HTMLs compilados idênticos à V5 |
| `npm test -- --list` | 40 testes identificados; a suíte Playwright não foi executada |
| Navegação do preview | Menu mobile, Escape, foco, seleção de necessidades e quatro capacidades exercitados |
| Orçamento | Seleção Caminhão abriu a página existente com necessidade `carga` |
| Sem JavaScript | Menu nativo abriu; quatro alternativas de orçamento da frota disponíveis |
| Deploy preview | Os dois checks Netlify do commit visual retornaram sucesso |

Os testes de contrato verificam preservação das internas, existência dos destinos da Home, contextos do orçamento, título obrigatório, IDs únicos, configuração de preview, contato sem número inventado e alternativas sem JavaScript. Não substituem a suíte de navegador.

## Capturas e limite da entrega

Foram inspecionadas larguras **1440, 1024, 768, 430, 390 e 360 px** no navegador, usando a página real em iframe com a largura controlada. Isso não equivale a testes em aparelhos físicos nem a validação em Safari.

Antes da desconexão foram registrados recortes de 680 px do topo nas seis larguras, a área para empresas, menu e quatro estados de capacidade. A captura longa feita pelo navegador omitiu fotografias que aparecem normalmente nos registros de viewport, especialmente hero e empresas. Por isso esse registro longo não deve ser tratado como prova de uma página com imagens ausentes, nem como captura integral aprovada.

**Pendente:** exportar e disponibilizar o pacote portátil de screenshots e uma captura integral fiel. A conexão do ambiente de revisão caiu durante essa exportação. Também não foi gravado vídeo. A sequência de quatro capacidades foi capturada localmente, mas a disponibilização persistente dessas imagens não foi concluída.

A implementação e a documentação deste repositório estão disponíveis; a limitação acima diz respeito ao pacote de evidências. É possível conferir as larguras no utilitário isolado do preview:

- [1440 px](https://deploy-preview-6--endearing-pie-27937b.netlify.app/_review/?w=1440&full=0&section=hero)
- [1024 px](https://deploy-preview-6--endearing-pie-27937b.netlify.app/_review/?w=1024&full=0&section=hero)
- [768 px](https://deploy-preview-6--endearing-pie-27937b.netlify.app/_review/?w=768&full=0&section=hero)
- [430 px](https://deploy-preview-6--endearing-pie-27937b.netlify.app/_review/?w=430&full=0&section=hero)
- [390 px](https://deploy-preview-6--endearing-pie-27937b.netlify.app/_review/?w=390&full=0&section=hero)
- [360 px](https://deploy-preview-6--endearing-pie-27937b.netlify.app/_review/?w=360&full=0&section=hero)

## Autocrítica e comparação

A direção final usa a confiança editorial de Viamaster e Elite Trax como referência de qualidade: conteúdo mais direto, marca reconhecível e transporte com presença fotográfica. Em relação a Terminal, a leitura das capacidades é física e simples; a Home não tenta simular tecnologia que a empresa não anunciou. Snøhetta orientou a hierarquia tipográfica e os intervalos entre assuntos. Rejouice orientou a relação entre fotografia, texto e ritmo, com movimento restrito ao que ajuda a leitura.

O resultado tem uma composição própria, porém a originalidade fotográfica ainda é limitada pelo uso de banco de imagens. A sessão real de fotos terá mais impacto do que adicionar novas animações. A inspeção de mobile precisa ser complementada em aparelhos reais. A suíte Playwright continua disponível para execução no ambiente adequado. O contato precisa de confirmação do número antes de abrir uma conversa de WhatsApp diretamente.

## Fotografias reais a produzir

As imagens de banco usadas na composição são fotografias reais e têm fontes registradas em [FOTOGRAFIA.json](https://github.com/Suetams/tksentregas/blob/preview/home-janela-em-transito/docs/review/home-v6/FOTOGRAFIA.json). Não são apresentadas como equipe, clientes ou frota TKS.

1. Veículo TKS em operação em Campinas: horizontal amplo para hero e vertical específico para mobile.
2. Entrega real de documento: mão, envelope e destinatário, com contexto.
3. Coleta de encomendas ou peças: detalhe e plano médio.
4. Quatro categorias reais da frota fotografadas com enquadramento e luz consistentes.
5. Carga maior e acomodação segura no veículo utilizado pela TKS.
6. Rota recorrente de distribuição, incluindo saída, carregamento e chegada.
7. Equipe real trabalhando, com autorização de uso de imagem.
8. Detalhes da identidade aplicada: veículo, uniforme e materiais reais.

O plano completo está em [FOTOS-REAIS-TKS.md](https://github.com/Suetams/tksentregas/blob/preview/home-janela-em-transito/docs/review/home-v6/FOTOS-REAIS-TKS.md). Não aplicar logotipos artificialmente a veículos de banco nem tratar fotos genéricas como prova da operação da empresa.

## Arquivos alterados em relação à V5

Os 25 arquivos abaixo compõem a alteração visual e seus testes/documentação. Esta entrega acrescenta este relatório como 26º arquivo. A PR também inclui mudanças da V5 que ainda não estavam no main; por isso o diff da PR contra main é maior.

- `docs/review/home-v6/CONCEITOS.md`
- `docs/review/home-v6/FOTOGRAFIA.json`
- `docs/review/home-v6/FOTOS-REAIS-TKS.md`
- `docs/review/home-v6/REFERENCIAS.md`
- `docs/review/home-v6/artboard-desktop-1440.webp`
- `docs/review/home-v6/artboard-mobile-390.webp`
- `package.json`
- `public/_review/index.html`
- `src/assets/home-v6/city-blue-brazil.webp`
- `src/assets/home-v6/pallet-warehouse.webp`
- `src/assets/home-v6/parcel-detail.webp`
- `src/assets/home-v6/parcel-handoff.webp`
- `src/assets/home-v6/street-trails-brazil.webp`
- `src/assets/home-v6/warehouse-operation.webp`
- `src/components/home/HomeFooter.astro`
- `src/components/home/HomeHeader.astro`
- `src/data/home-experience.ts`
- `src/layouts/HomeExperience.astro`
- `src/pages/index.astro`
- `src/scripts/home-experience.ts`
- `src/styles/home-experience.css`
- `tests/fixtures/home-v5-pages.json`
- `tests/home-contract.test.mjs`
- `tests/home-v2.spec.ts`
- `tests/site.spec.ts`
- `docs/review/home-v6/ENTREGA.md`

## Próximos ajustes concretos

Concluir o pacote de capturas quando o ambiente de revisão estiver conectado; executar a suíte Playwright; conferir mobile em aparelhos reais; confirmar o WhatsApp e substituir as fotografias de composição por imagens reais da TKS. Nenhum desses itens autoriza publicar em produção.
