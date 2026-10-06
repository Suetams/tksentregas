# TKS 2.0 — Auditoria e plano de pré-desenvolvimento

**TKS Entregas · tksentregas.com.br · 6 de outubro de 2026**

**Versão 1.0.** Levantamento editorial e planejamento concluídos com as evidências disponíveis. Encerramento da auditoria integral condicionado à inspeção direta do site, hoje limitada neste ambiente. Este pacote não contém implementação do site.

## Decisões que orientam o projeto

A TKS deve apresentar uma solução de transporte para cada necessidade, com entrada rápida para pedidos pontuais e uma jornada própria para operações empresariais. O conceito proposto pelo usuário, **“Do documento à carga. A TKS entrega.”**, funciona como mensagem central recomendada; não é tratado como slogan histórico da empresa.

O MVP terá páginas comerciais claras, frota com fichas aprovadas, orçamento em quatro etapas e encaminhamento estruturado ao WhatsApp. Não terá cálculo automático de preço, pagamento, cadastro de cliente ou promessa de disponibilidade imediata. A contratação continua dependendo do atendimento.

As **15 URLs encontradas** devem permanecer no lançamento: cinco páginas principais e dez artigos. São URLs identificadas no conteúdo oficial indexado, e não a contagem certificada de todo o servidor. Novas páginas complementam esse patrimônio. As URLs antigas de artigos, mesmo sem a barra depois de `blog`, não precisam ser mudadas para modernizar a experiência.

A prioridade comercial é facilitar a identificação da solução e a qualificação do pedido. Aparência moderna ajuda, mas o resultado depende também do destino correto da solicitação, da resposta do comercial e do registro de orçamentos e contratações. Não há dados disponíveis para prometer aumento de conversão ou de faturamento.

## Como ler as evidências

**CF — Confirmado na fonte consultada:** informação comunicada no conteúdo oficial indexado, ou observação direta explicitamente indicada. Confirma a comunicação encontrada; não garante que a operação esteja atualizada. As informações operacionais precisam do aceite da TKS antes da republicação.

**R — Recomendação:** decisão de produto, conteúdo ou tecnologia proposta neste pacote. **H — Hipótese:** possível efeito ou oportunidade que precisa ser validado. **NV — Não verificado:** dado ou teste que não pôde ser concluído. As fontes T01–T15 são da TKS; C01–C06 são de concorrentes; D01–D07 são documentação técnica; E01–E03 registram limitações de acesso. A relação completa está ao final e na planilha.

### Escopo efetivamente executado

Foram pesquisadas páginas do domínio oficial; examinados os conteúdos indexados das cinco páginas principais e dos dez artigos; cruzados serviços, frota, cobertura e contatos; e comparados seis concorrentes com sobreposição regional e de oferta. Foram feitas tentativas de abertura direta, inclusive no navegador, e requisições aos endpoints técnicos.

O acesso direto à TKS retornou 502 neste ambiente. O navegador apresentou falha de validação de certificado, com referência ao emissor local. Home, variantes de host e endpoints técnicos não forneceram HTML utilizável. Essa observação **não prova indisponibilidade global nem certifica defeito da hospedagem**. Não houve tentativa de desativar a validação TLS. [E01–E03]

O conteúdo recuperado vem do índice de pesquisa, com rastreamentos de épocas diferentes. Não equivale a um crawl atual da origem. Não foram aferidos layout real, responsividade, contraste, ordem visual, tamanho de botões, envio de formulário, destino dos links de WhatsApp, Core Web Vitals, canonicals, metatags, redirects da origem, robots ou sitemap. Também não houve acesso a Search Console, analytics, CMS ou dados comerciais. Esses itens estão registrados, com responsáveis e critérios de fechamento; não recebem notas inventadas.

## 1. Auditoria do site atual

### O que preservar

O site comunica atuação desde 2010, origem na região de Campinas e expansão do atendimento com veículos maiores. Essa história deve permanecer em `/sobre`, acompanhada de uma narrativa breve da operação atual e de imagens próprias autorizadas. Missão, visão e valores podem ser editados para clareza, preservando o sentido e submetendo a redação à empresa. [T03]

Os canais publicados são **(19) 98999-7866**, **(19) 99300-9547**, **contato@tksentregas.com.br** e **Rua José Paulino, 347, Centro, Campinas–SP**. Preservá-los como registro do que está comunicado; confirmar vigência, função dos números e endereço antes de configurar o novo site. Não foi identificado com segurança qual telefone recebe os orçamentos. [T04]

A identidade visual é uma restrição do projeto: usar logo e cores oficiais, com aplicação digital mais consistente. Não foram recuperados arquivos originais, códigos de cor ou manual. Não fixar paleta por memória, não redesenhar o logo e não apresentar imagens ilustrativas como veículos da TKS.

### Conteúdo e catálogo

O catálogo é mais amplo do que motoboy. A planilha separa serviço, modalidade, categoria de veículo e tipo de carga, evitando transformar cada veículo em uma página comercial repetida. A Home comunica distribuição e soluções personalizadas; a página de serviços inclui malotes, delivery e terceirização. [T01; T02]

| Oferta comunicada | Natureza / organização | Fonte |
| --- | --- | --- |
| Motoboy; documentos e pequenos volumes | Serviço | T01; T02; T12 |
| Entregas urgentes / expressas e coletas programadas | Modalidade | T01; T02; T08 |
| Malotes entre unidades | Serviço | T02 |
| Frete com utilitários | Serviço / veículo | T01; T02 |
| Van / furgão | Categoria de veículo | T02; T03 |
| Caminhão 3/4 | Categoria de veículo | T02; T03 |
| Distribuição roteirizada | Serviço | T01 |
| Distribuição para e-commerce | Serviço | T02 |
| Terceirização de serviços de transporte | Serviço recorrente | T01; T02; T10 |
| Transporte de cargas | Serviço | T01; T02 |
| Logística personalizada para empresas | Proposta empresarial | T01 |
| Delivery de alimentos | Serviço | T01; T02 |
| Despachos aéreos, portuários e rodoviários | Subserviço citado | T02 |
| Medicamentos e materiais biológicos/químicos não perigosos | Tipos de carga citados | T02 |

As categorias de veículo são moto, utilitário, van/furgão e caminhão 3/4. Os limites de peso informados pelo usuário estão presentes na página de serviços: **20, 400, 1.200 e 3.000 kg**, respectivamente. As medidas publicadas usam A/L/C sem unidade explícita; a sequência do utilitário inclui `300A`. Isso deve ser preservado no registro de auditoria e esclarecido, sem correção por suposição. [T02]

### Inconsistências e conteúdo fraco

1. **Cobertura:** para utilitários, a Home menciona Sul/Sudeste e Serviços menciona atendimento nacional. Definir uma matriz vigente de rotas e disponibilidade. [T01; T02]
2. **Frota:** medidas sem unidade e condições genéricas de carroceria dificultam decidir se a carga cabe. Obter fichas internas e limitações de acesso. [T02]
3. **Compromissos:** a redação de terceirização faz uma promessa ampla de isenção de responsabilidade. Revisar com a direção e com quem valida os contratos efetivamente oferecidos. Não transportar essa promessa para o novo site. [T02]
4. **Preço no blog:** o guia de motoboy promete abordar custo, mas o material recuperado explica fatores e não uma tabela de valores. Adequar título e expectativa; não inventar faixa de preço. [T06]
5. **Redundância de intenção:** frete rápido, entrega expressa e entrega no mesmo dia têm assuntos próximos. Isso sugere necessidade de diferenciação editorial, não prova cópia literal nem canibalização de rankings. [T07; T08; T14]

Não foi comprovada duplicação literal entre páginas. Repetições entre o resumo do resultado de busca e o corpo extraído não são evidência suficiente de duplicação no site. O rodapé comum também não é um problema de duplicidade por si só.

## 2. Auditoria de UX e conversão

O conteúdo recuperado apresenta a oferta, mas exige que o visitante traduza sua necessidade em veículo ou serviço. O contato atual coleta nome, e-mail, telefone, assunto e mensagem, sem qualificação explícita de rota, carga e prazo. [T01; T04]

**H:** essa combinação pode aumentar as perguntas de retorno do comercial e dificultar a cotação pelo celular. O impacto precisa ser medido; não foi observada taxa de abandono. **R:** oferecer duas entradas coerentes: orçamento guiado como CTA principal e conversa direta para quem precisa de orientação.

### Jornada recomendada

| Momento | Decisão do visitante | Resposta do TKS 2.0 |
| --- | --- | --- |
| Entender | A TKS transporta o que eu preciso? | Hero curto e seleção por necessidade |
| Escolher | É uma entrega pontual, carga maior ou rotina? | Solução específica e uso indicado |
| Confiar | Como funciona e quem fará o atendimento? | Processo, história, frota e provas verificáveis |
| Qualificar | O que preciso informar? | Quatro etapas, dados opcionais e revisão |
| Encaminhar | Como falo com a TKS? | Resumo pronto para o WhatsApp e canais alternativos |
| Contratar | Há disponibilidade e qual o valor? | Atendimento comercial confirma condições |

### Mobile como padrão

Usar uma coluna, texto curto, campo com label permanente e teclado adequado. Como metas de design, priorizar controles com área de toque de aproximadamente 44 × 44 px e testar em 360, 390 e 430 px, além de aparelhos Android e iOS reais. Essas são metas de teste, não medições do site atual.

O CTA fixo pode ajudar, desde que não encubra campos, teclado, rodapé ou avisos. No orçamento, reduzir elementos concorrentes. Manter Voltar e Continuar, indicação da etapa e dados já preenchidos. Não exigir login, e-mail ou escolha de veículo para começar. A W3C recomenda indicar o progresso e permitir revisar etapas com os dados preservados. [D03]

A tela final deve informar que a mensagem foi preparada e ainda precisa ser enviada no WhatsApp. Uma abertura de aplicativo não comprova recebimento, orçamento aprovado ou pedido contratado.

### Mensuração que serve ao negócio

Eventos recomendados: clique no CTA, início do orçamento, conclusão de etapa, revisão, abertura do WhatsApp e cópia do resumo. Enviar somente caminho da página, posição do CTA, categoria e etapa; nunca nome, telefone, endereços, observações ou o texto da mensagem.

No atendimento, registrar origem da solicitação, tipo de demanda, qualificação, orçamento enviado e contratação. Assim será possível separar interação no site de lead real. Indicadores úteis: avanço por etapa, conversa recebida, proporção de leads qualificados, orçamento enviado, contratação e tempo até a primeira resposta. Metas e SLA dependem de uma linha de base real e da capacidade comercial; não foram fixados números.

## 3. Auditoria de SEO

### Conteúdo e intenção

Os resultados consultados apresentam um prefixo comercial repetitivo nos títulos exibidos. A origem dos `title` e `meta description` não foi recuperada: o buscador pode reescrever resultados. É um indício para auditoria HTML, não uma medição de metatags duplicadas. [T01–T15]

A extração do blog mostra vários títulos principais; o artigo sobre utilitário também mostra outro título principal no corpo. Confirmar o markup antes de afirmar quantidade de H1. O novo template deve ter um título principal e hierarquia compreensível. Rótulos de imagens recuperados incluem longas sequências de termos; verificar se são alt, nomes ou apenas metadados da extração antes de diagnosticá-los. [T05; T13; T01]

| Destino | Intenção principal recomendada | Papel |
| --- | --- | --- |
| `/` | Transporte e entregas da TKS | Apresentar amplitude e guiar |
| `/servicos` | Escolher solução | Hub comercial |
| `/servicos/motoboy-campinas` | Contratar motoboy em Campinas | Landing transacional |
| `/servicos/frete-utilitarios` | Cotar frete para carga leve/média | Landing transacional |
| `/servicos/transporte-de-cargas` | Avaliar transporte de carga | Landing transacional |
| `/para-empresas` | Planejar operação recorrente | Demanda B2B |
| `/blog` e artigos | Entender e preparar a contratação | Apoiar decisão e linkar ao serviço |

Não há pesquisa de volume de palavras-chave nem ranking confirmado. Os temas acima são recomendações por intenção, não promessas de tráfego. Não criar páginas em série para municípios sem conteúdo e operação próprios. Publicar localidades somente após a matriz de atendimento ser validada.

### Técnico: estado e providência

| Item | Estado atual conhecido | Providência |
| --- | --- | --- |
| HTTP/TLS e variações de host | Erro neste ambiente; origem não certificada | Conferir cadeia, domínio preferido e resposta externa |
| robots.txt / sitemap.xml | Conteúdo não recuperado | Obter arquivos e conferir URLs publicáveis |
| Status, 301 e 404 | Não aferidos na origem | Crawl completo e matriz de respostas |
| Canonical e metatags | Não aferidos | Extrair por URL e validar no novo HTML |
| Links e recursos quebrados | Não aferidos | Crawl de links, imagens e downloads |
| Dados estruturados | Não aferidos | Examinar markup atual antes da migração |
| Core Web Vitals | Não medidos | Laboratório e dados de campo, quando disponíveis |
| Indexação e backlinks | Sem Search Console | Exportar páginas, consultas e links |

Requisitos do lançamento: HTML acessível sem depender de JavaScript para conteúdo; canonical coerente com o host e a rota escolhidos; links internos para os destinos finais; sitemap somente com páginas canônicas indexáveis; erro HTTP 404 real para página inexistente; e redirecionamento permanente no servidor quando houver mudança. O Google orienta mapear URLs e também recursos, testar destinos e acompanhar a migração. [D01]

Usar dados estruturados de empresa local, artigo e breadcrumbs somente com dados válidos e visíveis. Não preencher coordenadas, horários, área, preço, certificação ou avaliação por suposição. Não adicionar estrelas próprias para buscar rich result: páginas de empresa que controlam avaliações sobre si mesmas não se qualificam para esse recurso de estrelas. [D05; D07]

## 4. Análise competitiva

Foram selecionadas seis empresas por atuação comunicada em Campinas/RMC e sobreposição com as demandas da TKS. A amostra combina transportadoras de diversos portes de carga e operadores de motoboy. Não é ranking de tamanho, reputação, tráfego ou faturamento. Todas as observações sobre oferta, prova social ou prazo são o que os sites dessas empresas apresentam; a operação não foi auditada independentemente.

| Empresa / fonte | Posicionamento e confiança apresentados | Experiência / conversão | Implicação para TKS |
| --- | --- | --- | --- |
| K.L Transporte Express [C01] | Campinas; portfólio de diversos veículos. Fotos de operação e avaliações apresentadas com link ao Google. | Cards por veículo, páginas comerciais e cotação com origem, destino, mercadoria, peso e medidas. WhatsApp e formulário estruturado. | Cotação guiada já existe no mercado; simplificar sem copiar layout. |
| Campress [C02] | Campinas; transporte e urgência com segmentos especializados. Depoimentos e descrição de acompanhamento e protocolo. | Catálogo amplo, orçamento por origem/destino e plataforma externa de pedidos. Formulário e pedido on-line; cadastro descrito na plataforma. | MVP sem cadastro pode reduzir esforço para demanda pontual. |
| DVL Logística [C03] | Campinas; logística empresarial. Ênfase em equipe, suporte e procedimentos. | Comunica motos, utilitários, vans e caminhões; especialização de cargas e conteúdo sazonal. Telefone e chamada para orçamento. | Explicar rotinas empresariais com casos verificáveis. |
| GiroFlex [C04] | Indaiatuba e Campinas; expressa, fracionada e dedicada. História, frota e seguro apresentados pela empresa. | Páginas por serviço e localidade, e-commerce e narrativa de evolução da operação. WhatsApp; pequeno formulário de nome e telefone. | TKS pode unir confiança operacional a coleta mais completa dos dados. |
| Brulezzi Transportes [C05] | Campinas; urgência empresarial e recorrência. CNPJ, logos de clientes e avaliações apresentados. | Oferta por urgência, serviço e porte da carga; comunica plantão e acompanhamento. Seleção de transporte e CTAs para WhatsApp. | Disponibilidade e processo claros; TKS só deve prometer o que comprovar. |
| LV Motoboy [C06] | Campinas; entregas leves e apoio administrativo. Comunica GPS e direciona a avaliações. | Explica contratação, horário e usos de motoboy. WhatsApp direto e telefone. | Guiar carga e recorrência amplia a clareza para quem não procura só moto. |

### Oportunidades reais

**Amplitude de transporte não é exclusividade.** Vários concorrentes já apresentam moto, utilitário e caminhão. Um formulário estruturado também já aparece em K.L e Campress. O posicionamento da TKS precisa ser sustentado por experiência de contratação e evidência operacional, não por alegação de inovação inédita. [C01; C02; C03; C05]

**R:** diferenciar pela facilidade de informar a carga sem saber o veículo; por dados claros sobre adequação e condições; por um resumo útil ao comercial; e por atendimento humano com processo descrito. **H:** isso pode aumentar a qualidade das conversas e a taxa de orçamento; validar depois de publicar.

**R:** dar uma entrada explícita para recorrência, malotes e distribuição, além da urgência pontual. O conceito principal pode organizar essas demandas, mas não deve prometer “qualquer carga”, atendimento 24h, coleta em minutos ou seguro sem confirmação da TKS.

## 5. Inventário de páginas e conteúdos

O inventário editorial conhecido está abaixo. A planilha inclui fonte, intenção, decisão, CTA recomendado e prioridade. **ND** significa não disponível/medido. Datas de rastreamento do buscador não foram usadas como datas de publicação ou atualização de artigo.

| Caminho atual | Tema | Decisão |
| --- | --- | --- |
| / | Home [T01] | Reescrever por necessidades e direcionar ao orçamento. |
| /servicos | Soluções e frota reunidas [T02] | Manter URL; reorganizar o hub e separar fichas de frota. |
| /sobre | História, missão, visão e valores [T03] | Manter URL; preservar história e revisar texto. |
| /contato | Formulário genérico e canais [T04] | Manter URL; explicar atendimento e direcionar cotação ao wizard. |
| /blog | Lista de artigos [T05] | Manter URL; organizar títulos, cards e links. |
| /blogmotoboy-em-campinas-regiao-e-grande-sao-paulo | Contratar motoboy: aplicação e formação de preço [T06] | Reescrever a parte de custo: explicar fatores, sem anunciar tabela inexistente. Separar guia de contratação da landing comercial. |
| /blogfrete-rapido-em-campinas-regiao-e-grande-sao-paulo | Frete rápido para empresas [T07] | Explicar diferenças entre prazo solicitado, disponibilidade e veículo; incluir checklist de cotação e casos aprovados. |
| /blogentregas-expressas-campinas-regiao-grande-sao-paulo | Quando usar entrega expressa [T08] | Explicar entrega dedicada e situações indicadas; não prometer prazo fixo. Diferenciar do artigo sobre entrega no mesmo dia. |
| /bloglogistica-urbana-em-campinas-como-funciona | Planejar a logística urbana [T09] | Substituir generalidades por orientações de coleta, acesso e janela de recebimento; exemplos locais somente validados. |
| /blogmotoboy-fixo-ou-avulso-qual-vale-mais-a-pena | Motoboy fixo versus avulso [T10] | Adicionar critérios de decisão e perguntas sobre recorrência; revisar afirmações sobre responsabilidades trabalhistas. |
| /blogcomo-reduzir-custos-com-entregas-na-sua-empresa | Reduzir custos de entregas [T11] | Acrescentar método de consolidação e modelo de indicador, sem percentuais de economia prometidos. |
| /blogtransporte-de-documentos-seguranca-e-rapidez | Preparar documentos para transporte [T12] | Acrescentar checklist de acondicionamento e identificação; especificar a confirmação oferecida após validação. |
| /blogfrete-com-utilitario-em-campinas-quando-usar-fiorino-van-ou-caminhonete | Escolher utilitário, van ou caminhonete [T13] | Relacionar peso e volume às fichas de frota aprovadas; distinguir veículo ilustrativo de veículo disponível. |
| /blogentrega-no-mesmo-dia-em-campinas-como-funciona | Entregar no mesmo dia [T14] | Abordar janelas de solicitação e recebimento; disponibilidade sempre confirmada no atendimento. |
| /blogcomo-escolher-empresa-de-entregas-confiavel | Avaliar uma empresa de entregas [T15] | Checklist curto com critérios demonstráveis; vincular a processos e provas reais da TKS, se disponíveis. |

### Decisões de migração editorial

Preservar os dez artigos no MVP e reescrever com utilidade específica. Não fundir ou excluir agora sem dados de acesso e backlinks. O artigo de entrega expressa deve explicar modalidade; o de entrega no mesmo dia, janelas e condições; o de frete rápido, veículo e preparação da cotação. Os temas de fixo/avulso e custos apoiam a jornada empresarial; documentos e utilitários apoiam escolha e acondicionamento. [T06–T15]

Cada artigo deverá ter título compatível com a resposta, resumo útil, conteúdo original revisado, links para a solução pertinente e CTA contextual. Datas e autoria precisam ser reais. Não substituir todos os CTAs por uma mensagem genérica. Novos textos podem usar `/blog/slug`, sem obrigar a alteração dos endereços legados.

## 6. Arquitetura definitiva recomendada

Manter `/servicos` com o rótulo **Soluções**, `/sobre`, `/contato` e `/blog` com o rótulo **Conteúdos**. Não abrir hubs concorrentes `/solucoes` e `/conteudos` apenas para mudar o nome do menu. O orçamento é um destino próprio em `/orcamento`, acessível de todo o site.

A arquitetura tem **28 páginas de conteúdo/conversão previstas**, contando as 15 legadas e 13 novas, mais uma resposta utilitária de 404. A publicação de oferta atualmente citada, como delivery, depende de confirmação de que continua ativa. Isso é uma validação de conteúdo, não autorização para inventar ou manter serviço encerrado.

| Nova rota | Função | Escopo |
| --- | --- | --- |
| /servicos/motoboy-campinas | Motoboy, documentos e pequenos volumes | MVP |
| /servicos/entregas-expressas | Entregas expressas e programadas | MVP |
| /servicos/malotes | Malotes | MVP |
| /servicos/frete-utilitarios | Frete com utilitários | MVP |
| /servicos/transporte-de-cargas | Transporte de cargas | MVP |
| /servicos/distribuicao-e-commerce | Distribuição e e-commerce | MVP |
| /servicos/terceirizacao-entregas | Terceirização de entregas | MVP |
| /servicos/delivery-de-alimentos | Delivery de alimentos | MVP se oferta atual confirmada |
| /frota | Frota | MVP |
| /para-empresas | Para empresas | MVP |
| /area-de-atuacao | Área de atuação | MVP |
| /orcamento | Solicitar orçamento | MVP |
| /privacidade | Privacidade | MVP |

Vans e caminhão 3/4 terão fichas em Frota e vínculo com as soluções comerciais. Não criar páginas repetidas de veículo no MVP. Logística personalizada e desenho de operação pertencem a Para Empresas. Distribuição empresarial e e-commerce compartilham a landing, com seções distintas para a necessidade do cliente.

### Home: hierarquia aprovada para implementação futura

| Bloco | Função e conteúdo | Regra de publicação |
| --- | --- | --- |
| Header | Navegação curta e Solicitar orçamento | Identidade original |
| Hero | Conceito central, complemento claro e CTA | Texto recomendado; sem promessa de prazo |
| Confiança inicial | História e processo demonstrável | Não criar contadores |
| O que precisa transportar? | Documento/pequeno volume, caixas/carga, várias entregas, rotina empresarial | Conduzir sem exigir conhecimento de frota |
| Soluções | Oferta organizada por aplicação | Catálogo vigente |
| Frota | Quatro categorias e vínculo com adequação | Fichas aprovadas |
| Para Empresas | Malotes, recorrência, distribuição e personalização | Contratação sob avaliação |
| Por que TKS | Processo, cuidado e atendimento | Diferenciais comprováveis |
| Prova social | Avaliações ou casos com origem | Omitir até receber evidências |
| Área de atuação | Base e consulta de rota | Cobertura reconciliada |
| Orçamento inteligente | Prévia curta e botão para o fluxo completo | Mesmo componente/regras de `/orcamento` |
| Conteúdos | Artigos que ajudam a preparar a contratação | Sem atrapalhar CTA comercial |
| CTA final e Footer | Cotação, canais, institucional e privacidade | Contatos e dados aprovados |

Em mobile, permitir chegar ao orçamento antes de percorrer todos os blocos. Evitar carrossel automático, vídeo pesado no hero e repetição extensa de conteúdo entre Home, Soluções e Frota. “Moderno” deve significar hierarquia, legibilidade, qualidade de imagens e interações discretas.

### Templates

**Serviço:** necessidade, uso indicado, limites/condições aprovados, como contratar, informações para cotar, dúvidas reais, veículos possíveis e CTA pré-selecionado. **Frota:** veículo, usos, ficha aprovada, ressalvas operacionais e orientação para avaliar a carga. **Para Empresas:** tipo de rotina, frequência, múltiplos destinos, processo de avaliação e formulário com contexto de recorrência. **Sobre:** história e operação real. **Contato:** canais, horários e caminho de orçamento. **Artigo:** guia específico com CTA contextual.

## 7. Mapa de URLs

O arquivo `TKS_2.0_Mapa_URLs.csv` e a aba MIGRACAO registram cada URL atual e seu destino. **Decisão padrão: as 15 legadas continuam no mesmo caminho; não há 301 de conteúdo planejado para elas no MVP.** As 13 novas complementam a arquitetura.

Há também dez regras documentadas em `TKS_2.0_301_Condicionais.csv`, todas **INATIVAS**, caso uma decisão posterior mova artigos para `/blog/slug`. Não são configuração pronta para aplicação automática. Antes de ativar, validar tráfego, links, destino equivalente, host e comportamento da hospedagem.

Definir um host canônico após confirmar a infraestrutura. A preferência recomendada é HTTPS no domínio já divulgado. HTTP, www, barra final e extensão devem ser tratados sem cadeias, duplicatas ou quebra de caminhos. O comportamento atual dessas variantes não foi certificado; não há regras de host inventadas no arquivo de migração.

Se uma página desconhecida surgir no crawl/CMS, adicioná-la ao inventário e decidir individualmente. Conteúdo removido sem substituto equivalente deve retornar 404 ou 410, conforme a decisão de migração; não redirecionar indiscriminadamente para a Home. [D01]

## 8. Plano de migração e publicação

### Antes da implementação

Fechar a inspeção direta ou obter um export fiel, com HTML, recursos e inventário do CMS, complementado pelos registros visuais e técnicos. Conferir páginas não indexadas, arquivos, imagens, links externos e funções atuais. Registrar o que ainda não pôde ser observado.

Obter Search Console e analytics existente por acesso delegado ou export. Priorizar páginas por demanda real, não pelo comprimento do slug. Fazer backup recuperável do site, conteúdo, assets e configuração necessária para voltar à versão anterior.

### Durante a implementação futura

1. Criar registros de conteúdo com caminho legado preservado, fonte, revisão e estado de validação.
2. Reescrever e aprovar textos; não apagar a evidência de origem.
3. Migrar imagens/downloads autorizados e mapear URLs de recursos relevantes.
4. Preparar páginas com HTML rastreável, metadados e links corretos.
5. Manter ambiente de homologação fora da indexação; evitar enviar tráfego real aos canais comerciais em testes.
6. Validar matriz de rotas e redirecionamentos ativos; as contingências permanecem desligadas.

### Lançamento

Conferir certificado, domínio, rotas, contatos, wizard e conteúdo em dispositivos reais. Remover bloqueios de indexação somente das páginas publicáveis. Atualizar sitemap, verificação do Search Console e dados de perfil empresarial quando houver mudança aprovada. Não alterar registros de e-mail ao apontar o site sem entender a configuração existente.

Guardar a versão publicada, configuração de deploy e procedimento de retorno. Não migrar domínio, conteúdo e caminhos por conveniência visual. Se mudar a hospedagem, preservar o domínio e os caminhos sempre que a plataforma permitir.

### Depois de publicar

Como cadência recomendada, conferir diariamente erros e chegada de solicitações na primeira semana; comparar páginas, consultas e funil semanalmente no primeiro mês; revisar a operação mensalmente. Esses são intervalos de acompanhamento propostos, não garantias de prazo de indexação. O Google orienta monitorar a mudança e manter redirecionamentos necessários por pelo menos um ano. [D01]

Rollback se houver falha generalizada de acesso, destino comercial errado, perda de páginas relevantes ou defeito que impeça qualificação. Uma oscilação isolada de posição não é motivo automático para voltar; analisar evidências.

## 9. Requisitos funcionais do MVP

| ID | Prioridade | Área | Requisito | Aceite |
| --- | --- | --- | --- | --- |
| RF01 | P0 | Navegação | Header com Soluções, Frota, Para Empresas, Sobre, Conteúdos e Contato; CTA Solicitar orçamento. | Todas as páginas têm acesso direto ao orçamento; menu funciona por teclado. |
| RF02 | P0 | Escolha de solução | Entrada por documento/pequeno volume, caixas/carga, várias entregas e operação recorrente. | Cada opção leva a conteúdo pertinente ou pré-seleciona apenas categoria permitida no wizard. |
| RF03 | P0 | Orçamento | Quatro etapas: carga; trajeto/prazo; contato/contexto; revisão. | Retornar e editar mantém dados; campos desconhecidos têm alternativa; sem cálculo de preço. |
| RF04 | P0 | Encaminhamento | Gerar resumo e abrir conversa no WhatsApp canônico após ação explícita. | Texto codificado corretamente; não enviado automaticamente; número e fallback aprovados. |
| RF05 | P0 | Estados | Mostrar erros por campo, revisão, mensagem preparada e alternativa de contato. | Nunca mostrar pedido aceito, preço aprovado ou mensagem recebida sem confirmação de backend. |
| RF06 | P0 | Frota | Fichas de veículos com dados aprovados e condições. | Peso e medidas não disparam contratação ou adequação garantida. |
| RF07 | P0 | Conteúdo / SEO | Migrar todas as URLs conhecidas mantendo intenção e conteúdo útil. | Links reais, HTML rastreável, canonical coerente e ausência de soft 404. |
| RF08 | P0 | Acessibilidade / mobile | Fluxo simples em uma coluna, labels, foco, teclado e leitura de erro. | Tarefas passam em mobile real, teclado, zoom e leitor de tela. |
| RF09 | P0 | Mensuração | Eventos de início/etapas/revisão/abertura de WhatsApp; métricas comerciais no atendimento. | Eventos sem nome, telefone, endereços ou conteúdo da mensagem; clique não vira generate_lead. |
| RF10 | P1 | Editorial | Templates para artigos e páginas de serviço, com origem e revisão. | Atualizar conteúdo não exige editar todos os templates. |
| RF11 | P1 | Confiança | Exibir somente provas autorizadas, com origem quando cabível. | Sem módulos vazios, avaliações inventadas ou contadores sem lastro. |
| RF12 | P0 | Fallback | Telefone/e-mail visíveis, resumo copiável e alternativa sem JavaScript. | Cliente consegue falar com a TKS quando o wizard ou WhatsApp falhar. |

### Orçamento em quatro etapas

**1 — Carga.** Tipo de item, descrição breve, quantidade e operação pontual/recorrente. Peso e medidas aproximadas quando conhecidos, com opção “Não sei”. Documentos não devem exigir dimensões para avançar. Carga volumosa ou especial requer observação e avaliação comercial, sem aceitação automática.

**2 — Trajeto e prazo.** Origem e destino com cidade; endereço e bairro quando conhecidos; data/janela e urgência. Permitir sinalizar vários destinos e informar contexto. Para pedido urgente, deixar claro que disponibilidade será confirmada. Datas são interpretadas em America/Sao_Paulo. Sem promessa de coleta ou entrega no momento selecionado.

**3 — Contato e contexto.** Nome e telefone para atendimento, empresa opcional, observações e frequência quando recorrente. E-mail opcional. Não exigir CPF, CNPJ ou cadastro para orçamento preliminar. Mostrar finalidade e informar que o usuário encaminhará os dados ao canal comercial.

**4 — Revisão.** Resumo completo com edição por grupo, sem preço calculado. CTA principal: **“Continuar orçamento no WhatsApp”**. Mostrar que o envio ocorre no aplicativo. Alternativas: copiar resumo, telefone e e-mail aprovados.

Endereço desconhecido não deve impedir uma consulta preliminar quando a cidade é informada. O resumo deve marcar o que falta. Nenhuma operação é despachada pelo site; o comercial confirma dados, disponibilidade, valor e condições.

O número de destino será uma configuração única, validada pela empresa. Usar o formato internacional do WhatsApp e codificar a mensagem. Testar acentos, quebras de linha e mensagens longas. Se a URL de mensagem não comportar o conteúdo no cenário testado, disponibilizar a cópia completa e abertura de conversa sem truncar dados silenciosamente. [D06]

Sem backend, a solicitação não fica salva pela TKS no site. O usuário pode abrir e abandonar a conversa. Esta é uma limitação deliberada do MVP permitido pelo briefing. Se for exigido recebimento independente do WhatsApp, adicionar endpoint e registro persistente em outra etapa; não simular sucesso.

## 10. Requisitos de conteúdo e assets

| Conjunto | O que obter | Uso | Se não houver |
| --- | --- | --- | --- |
| Marca | Logo original, variantes e cores oficiais | Header, rodapé, ícone e sistema visual | Não fechar identidade por suposição |
| Cadastro | Dados vigentes, contatos, endereço e horários | Institucional e atendimento | Não preencher lacunas com exemplos |
| Frota | Fichas, fotos próprias e condições | Adequação de transporte | Não publicar medidas não validadas |
| Cobertura | Matriz por rota, serviço e disponibilidade | Área e orçamento | Usar consulta de rota sem mapa fictício |
| Operação | Processo, acompanhamento e comprovante real | Confiança e tecnologia | Não anunciar portal ou GPS ao cliente sem comprovação |
| Prova social | Links, autorização e data de consulta | Avaliações, logos ou casos | Omitir bloco |
| Comercial | Destino, backup e procedimento de resposta | Encaminhamento e lead | Integração fica pendente |
| Editorial | Export, textos, autoria e revisão | Blog e migração | Não inventar data/autoria |

Não são necessários para o MVP: vídeo institucional, integração de preço, app, rastreamento público, dashboard do cliente, animação elaborada ou grande produção de novos artigos. Esses itens só entram com demanda e evidência de valor.

## 11. Recomendações técnicas

**R — Base recomendada:** site com HTML pré-renderizado, conteúdo organizado em arquivos/coleções e JavaScript apenas nas interações necessárias. Astro é uma opção adequada para esse perfil; sua documentação prevê rotas geradas no build e permite renderização sob demanda quando necessária. Confirmar a versão estável e compatibilidade no início do desenvolvimento. Não foi decidido trocar a infraestrutura atual sem auditá-la. [D04]

O wizard pode usar TypeScript e validação centralizada, sem transformar o site inteiro em uma aplicação JavaScript. Não há necessidade inicial de banco ou autenticação. Se a equipe precisar editar conteúdo frequentemente sem suporte técnico, decidir por um CMS leve antes de produzir todos os textos, mantendo o mesmo modelo e as URLs.

**Hospedagem:** precisa servir caminhos sem extensão, redirecionamentos HTTP permanentes, 404 real, HTTPS válido e deploy recuperável. Confirmar se o produto atualmente contratado aceita isso. A existência de hospedagem ou criador de sites não prova compatibilidade com a aplicação. Se necessário, escolher hospedagem compatível sem perder domínio, e-mail ou inventário.

**Desempenho:** reservar dimensões das imagens; usar formatos modernos e tamanhos responsivos; carregar abaixo da dobra sob demanda; priorizar o conteúdo principal; limitar scripts de terceiros e animações. Como orçamento inicial recomendado, buscar no máximo aproximadamente 100 KB comprimidos de JavaScript próprio na Home, ajustando por medição e necessidade real.

Metas de campo: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1 no percentil 75. Antes do lançamento, testar em laboratório e com interação; depois, usar dados reais quando houver volume. Uma nota 100 no Lighthouse não é requisito comercial nem garantia de qualidade; não foi aferida nota do site atual. [D02]

**Acessibilidade:** meta WCAG 2.2 AA; revisão de contraste após receber cores oficiais, labels, foco, erros e leitura de etapas. **Qualidade:** testes necessários de rotas, wizard, serialização da mensagem, fallback e eventos. Não testar envio real de leads a concorrentes ou à TKS sem combinar um procedimento interno.

**Manutenção:** centralizar contatos, catálogo e frota; registrar origem e revisão de cada afirmação; manter scripts de build e instruções de publicação; evitar alteração manual divergente entre Home, serviço e orçamento.

## 12. Pendências e caminho para sair da preparação

| ID / prioridade | Responsável / momento | Entregável necessário |
| --- | --- | --- |
| P01 / P0 | Webmaster / responsável pelo site · Antes de encerrar auditoria / programar | Resolver acesso direto ou fornecer export fiel do site, assets e inventário do CMS. |
| P02 / P0 | Direção TKS · Antes do design final | Logo original e paleta oficial; versões permitidas. |
| P03 / P0 | Operação TKS · Antes de conteúdo e wizard finais | Validar catálogo atual, frota, pesos, medidas e restrições. |
| P04 / P0 | Operação / comercial · Antes de conteúdo final | Aprovar cobertura e janelas de coleta por rota e serviço. |
| P05 / P0 | Comercial TKS · Antes de integração do orçamento | Definir WhatsApp principal, backup, responsável e horário. |
| P06 / P0 | Webmaster / direção · Antes de publicar | Confirmar plataforma/hospedagem, domínio, DNS e capacidade de URLs limpas/301/404. |
| P07 / P0 | Direção TKS · Antes de publicar conteúdo institucional | Validar razão social, CNPJ, endereço, telefones e políticas de atendimento. |
| P08 / P0 | Webmaster / SEO · Antes de migração definitiva | Obter Search Console, analytics existente e URLs com tráfego/backlinks. |
| P09 / P0 | Direção / responsável por privacidade · Antes de publicar | Aprovar transparência do orçamento, encaminhamento e eventual analytics. |
| P10 / P1 | Direção / comercial · Antes dos módulos de confiança | Selecionar provas reais e autorizadas. |
| P11 / P1 | Operação TKS · Antes da comunicação de tecnologia | Confirmar como cliente acompanha e recebe comprovante. |
| P12 / P1 | Direção / operação · Antes das fotos finais | Obter fotos próprias de frota, equipe, base e trabalho. |
| P13 / P1 | Comercial / conteúdo · Antes de revisar o blog | Aprovar autor/revisor e brief por artigo. |
| P14 / P1 | Comercial TKS · Antes de avaliar resultado comercial | Definir lead qualificado, etapas de atendimento e registro. |

As pendências P0 são dependências concretas, não um pedido de aprovação genérica. P01 fecha o requisito de auditoria integral antes de programar. P02–P05 permitem produzir marca, conteúdo e encaminhamento corretos. P06–P09 sustentam publicação e migração. P10–P14 podem ser trabalhadas em paralelo pela empresa; sem provas sociais ou fotos suficientes, omitir os módulos correspondentes e manter o núcleo comercial.

### Próximas entregas, em ordem

1. **Fechar o acesso e inventário técnico:** obter crawl/export, renderização real e URLs/recursos restantes; atualizar somente as linhas afetadas deste pacote.
2. **Consolidar a ficha de operação:** catálogo, frota, cobertura, contato principal e condições aprovados pela TKS.
3. **Preparar a primeira tela mobile e a jornada de orçamento:** usando marca original e esta especificação; revisão visual antes da implementação.
4. **Implementar o MVP e migrar:** páginas, wizard, SEO, mensuração, testes e homologação.
5. **Publicar e medir:** operação comercial acompanha conversas, orçamentos e contratos.

Não é necessário abrir uma nova rodada de documentação geral após cada item. Este é o documento base; alterações ficam no registro de fatos, na planilha e no backlog, com versão e motivo.

## 13. Especificação para a implementação pelo Codex

O arquivo **`TKS_2.0_Especificacao_Codex.md`** contém o escopo executável futuro: rotas, componentes, modelo de conteúdo, campos do orçamento, estados, encaminhamento, eventos, critérios de aceite e sequência de trabalho. Ele referencia os CSVs e a planilha como fontes de inventário, evitando criar um segundo mapa divergente.

O agente de desenvolvimento deverá primeiro fechar P01 e conferir os dados operacionais aprovados. Não deve supor que o levantamento indexado substitui crawl, nem tratar regras 301 inativas como instruções de publicação. Conteúdo sem evidência não vira afirmação; marca ausente não vira rebranding.

### Critérios para entregar e publicar

| ID / área | Critério |
| --- | --- |
| AC01 / Conteúdo | Nenhuma afirmação comercial sem origem e validação operacional necessária. |
| AC02 / URLs | 15 URLs conhecidas preservadas; novas páginas publicadas só com oferta validada. |
| AC03 / Migração | Qualquer mudança tem 301 para conteúdo equivalente, em um salto. |
| AC04 / Mobile | Sem scroll horizontal em 360, 390 e 430 px; CTA e teclado não encobrem campos. |
| AC05 / Wizard | Pontual urgente, agendada, recorrente, vários destinos, peso desconhecido e item volumoso. |
| AC06 / WhatsApp | Resumo mantém acentos, quebras e campos; fallback para mensagem longa ou app indisponível. |
| AC07 / Acessibilidade | Labels, foco, erros, menu, passos e contraste atendem à meta WCAG 2.2 AA. |
| AC08 / Desempenho | LCP ≤ 2,5 s; INP ≤ 200 ms; CLS ≤ 0,1 no percentil 75 em dados reais. |
| AC09 / SEO | HTML legível sem JS, títulos específicos, canonicals, sitemap e 404 correta. |
| AC10 / Analytics | Somente metadados permitidos; ausência de dados pessoais em eventos. |
| AC11 / Publicação | Certificado válido, domínio correto, contato canônico e rollback documentado. |
| AC12 / Comercial | Atendimento consegue usar o resumo e registrar lead, orçamento e contratação. |

O MVP pode ser considerado concluído quando as tarefas de cotação passam em mobile, o comercial consegue usar o resumo, as rotas e o SEO de migração estão corretos e não há dados empresariais inventados. Publicação depende da infraestrutura e das validações listadas; a programação não foi iniciada neste trabalho.

## Fontes e registro de consulta

Todas as consultas ocorreram em **06/10/2026**, no contexto desta auditoria. Fontes TKS via conteúdo indexado; concorrentes e documentos conforme método indicado. A coluna “Referência de pesquisa” na planilha permite correlacionar as evidências, mas não representa certificação de dados operacionais. Consultas sem resultado de política, CNPJ ou outro dado não demonstram sua inexistência.

| ID | Fonte e acesso | Link |
| --- | --- | --- |
| T01 | TKS — Home · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/) |
| T02 | TKS — Serviços · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/servicos) |
| T03 | TKS — Sobre · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/sobre) |
| T04 | TKS — Contato · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/contato) |
| T05 | TKS — Blog · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blog) |
| T06 | TKS — Contratação de motoboy · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogmotoboy-em-campinas-regiao-e-grande-sao-paulo) |
| T07 | TKS — Frete rápido empresarial · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogfrete-rapido-em-campinas-regiao-e-grande-sao-paulo) |
| T08 | TKS — Entregas expressas · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogentregas-expressas-campinas-regiao-grande-sao-paulo) |
| T09 | TKS — Logística urbana · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/bloglogistica-urbana-em-campinas-como-funciona) |
| T10 | TKS — Fixo e avulso · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogmotoboy-fixo-ou-avulso-qual-vale-mais-a-pena) |
| T11 | TKS — Custos de entregas · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogcomo-reduzir-custos-com-entregas-na-sua-empresa) |
| T12 | TKS — Documentos · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogtransporte-de-documentos-seguranca-e-rapidez) |
| T13 | TKS — Escolha de utilitário · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogfrete-com-utilitario-em-campinas-quando-usar-fiorino-van-ou-caminhonete) |
| T14 | TKS — Entrega no mesmo dia · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogentrega-no-mesmo-dia-em-campinas-como-funciona) |
| T15 | TKS — Escolha de fornecedor · Conteúdo oficial indexado | [Consultar](https://tksentregas.com.br/blogcomo-escolher-empresa-de-entregas-confiavel) |
| C01 | K.L Transporte Express · Página oficial acessada | [Consultar](https://kltransporteexpress.com.br/) |
| C02 | Campress · Página oficial acessada | [Consultar](https://campress.com.br/inicio) |
| C03 | DVL Logística · Conteúdo oficial indexado; abertura direta expirou | [Consultar](https://dvllogistica.com.br/) |
| C04 | GiroFlex · Página oficial acessada | [Consultar](https://www.giroflextransportes.com/) |
| C05 | Brulezzi Transportes · Página oficial acessada | [Consultar](https://motoboycampinas24h.com/) |
| C06 | LV Motoboy · Página oficial acessada | [Consultar](https://www.lvmotoboy.com.br/) |
| D01 | Google — Migrações de URLs · Documentação primária | [Consultar](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=pt-BR) |
| D02 | web.dev — Core Web Vitals · Documentação primária | [Consultar](https://web.dev/articles/defining-core-web-vitals-thresholds) |
| D03 | W3C — Formulários em etapas · Documentação primária | [Consultar](https://www.w3.org/WAI/tutorials/forms/multi-page/) |
| D04 | Astro — Rotas e pré-renderização · Documentação primária | [Consultar](https://docs.astro.build/en/reference/routing-reference/) |
| D05 | Google — Empresa local · Documentação primária | [Consultar](https://developers.google.com/search/docs/appearance/structured-data/local-business) |
| D06 | WhatsApp — Clique para conversa · Documentação primária | [Consultar](https://faq.whatsapp.com/5913398998672934) |
| D07 | Google — Avaliações e resultados por estrelas · Documentação primária | [Consultar](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=pt-br) |
| E01 | Teste direto da Home · Observação neste ambiente: 502; falha de validação de certificado | [Consultar](https://tksentregas.com.br/) |
| E02 | Teste direto de robots.txt · Observação neste ambiente: 502; conteúdo não recuperado | [Consultar](https://tksentregas.com.br/robots.txt) |
| E03 | Teste direto de sitemap.xml · Observação neste ambiente: 502; conteúdo não recuperado | [Consultar](https://tksentregas.com.br/sitemap.xml) |

**Registro de limitação:** a auditoria editorial e o pacote de decisões estão entregues; a auditoria visual e técnica integral permanece aberta em P01/A14. Não foram produzidos diagnósticos de desempenho, taxas comerciais, inventário certificado do CMS ou garantias de SEO sem evidência.
