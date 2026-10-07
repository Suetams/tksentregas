# TKS Entregas — versão de desenvolvimento

Primeira implementação do TKS 2.0, autorizada pelo usuário para avançar com auditoria e aprovação operacional pendentes. Astro gera HTML estático, com TypeScript apenas nas interações. As fontes são locais: a interface não depende de Google Fonts ou de imagens remotas.

## Desenvolver

Requisitos: Node 24.19.0 (ou 22.12+ na série 22), npm e Chromium para os testes.

```sh
cd /workspace/tksentregas
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev -- --port 4321
```

Use o checkout existente. Cada tarefa cloud já é isolada; não crie worktrees durante a configuração.

```sh
npm run check
npm run lint
npm run build
npm test
```

Os testes iniciam `astro preview` automaticamente na porta 4321, desde que esteja livre. Pare um servidor de desenvolvimento nessa porta antes de testar o build. O Chromium do ambiente está em `/usr/bin/chromium`; para outra instalação, defina `CHROMIUM_PATH` com o caminho do executável. Os testes mobile usam emulação no Chromium, não aparelhos iOS reais.

## O que foi implementado

- Home V4: identidade vetorial oficial, azul #011E3E e Rubik local. Hero editorial com fotografia sem moldura, quatro necessidades em lista, showcase de uma categoria de transporte por vez, operação empresarial, marco 2010 e encerramento comercial. O processo e o formulário completo ficam em `/orcamento`.
- Hub `/servicos` e oito páginas de serviço; `/frota`, `/para-empresas`, `/sobre`, `/contato`, `/area-de-atuacao`, `/blog`, `/privacidade`, `/orcamento` e 404.
- Header sticky sem mudar de altura, menu mobile com foco e Escape, footer reduzido e seletores acessíveis por teclado. A Home respeita movimento reduzido e mantém conteúdo útil sem JavaScript.
- Orçamento em quatro etapas: carga, trajeto, contato e revisão. Validação, voltar/editar, recorrência, múltiplos destinos, data no fuso America/Sao_Paulo, resumo completo e cópia com alternativa manual.
- Rascunho somente em memória. Sem banco, analytics, armazenamento local, envio automático ou confirmação falsa de pedido.
- HTML estático legível sem JavaScript e alternativa de contato para o formulário.

## WhatsApp

O destino está vazio de propósito: o pacote não confirma qual telefone recebe orçamentos. O resumo pode ser preparado e copiado agora. Depois da confirmação, configure `PUBLIC_TKS_WHATSAPP` em `.env` a partir de `.env.example` e reinicie o desenvolvimento ou reconstrua o build. O valor é público, não uma credencial, e deve ser um número internacional sem pontuação. Valores fora de 8–15 dígitos ou iniciados por zero deixam o botão desativado.

Abertura vem de clique explícito e não comprova envio. URLs acima de 1.800 caracteres abrem a conversa sem texto: o usuário copia e cola o resumo completo. A cópia e as instruções de recuperação permanecem disponíveis. Nenhum teste envia mensagens a terceiros.

## Limites dos campos

Descrição: 500 caracteres; nome/cidades/janela: 100; telefone: 30; empresa: 150; e-mail: 254; endereços/cuidados: 300; frequência/volume de rotina: 200; destinos adicionais/observações: 1.000. A mensagem não é truncada. Quantidade: inteiro de 1 a 1.000.000 ou desconhecida. Peso opcional: positivo, até 1.000.000 kg. Medidas opcionais: positivas, até 100.000 cm por dimensão. Esses limites são limites de entrada do formulário e não capacidades ou aceitação de cargas.

## Antes de publicar o site

Esta versão está com `noindex,nofollow` e `robots.txt` bloqueando rastreamento. Não é o MVP aprovado para produção. A publicação do ambiente cloud é diferente da publicação do site no domínio da TKS.

- Encerrar a inspeção do site atual: o acesso observado retornou 403 do proxy; isso não diagnostica a hospedagem da TKS.
- Substituir as fotografias conceituais por fotos autorizadas. As imagens atuais são placeholders gerados para desenvolvimento, não fotos comprovadas da frota, dos funcionários ou das instalações reais. Astro otimiza os arquivos em WebP no build. Logos SVG, favicon, azul #011E3E e Rubik agora vêm do pacote oficial `TKS_Identidade_Vetorial_v1.zip`, fornecido pelo usuário. Não houve alteração da geometria dos logos.
- Confirmar catálogo, frota, pesos/medidas, cobertura, contatos, horários, condições e política de privacidade.
- Recuperar os dez artigos completos do CMS e conservar exatamente as URLs legadas do CSV. Nesta versão não há páginas fictícias para esses artigos. Não implantar este build sobre o site atual antes da migração.
- Definir hospedagem estática com resolução de rotas, 404 real e HTTPS; validar barra final, canonicals, metadados sociais e sitemap apenas das páginas aprovadas. Os redirecionamentos condicionais do pacote não foram ativados.
- Completar validação em aparelhos reais, leitores de tela, desempenho e revisão comercial. Os testes axe automatizados não certificam acessibilidade integral.

Documentos e CSVs originais do pacote estão em `docs/`. A autorização para antecipar a implementação não encerra a auditoria e não aprova os dados operacionais.

A direção visual, os arquivos e os controles internos atuais estão em `docs/HOME_V4.md`; os registros V2/V3 são históricos. Manual, kit, referência e licença Rubik estão em `docs/brand/`. Capacidades são editáveis em `src/data/home-fleet.ts`; fatos e necessidades em `src/data/home.ts`; fotografias e enquadramentos em `src/data/home-media.ts`; versões oficiais da marca em `src/data/brand.ts`. Os avisos de desenvolvimento ficam nos controles internos.

## Prévia online para revisão

O arquivo netlify.toml prepara um deploy estático de desenvolvimento: npm run build, saída dist, Node 24.19.0 e X-Robots-Tag noindex/nofollow. Não há regras de fallback que transformem rotas inexistentes em 200.

O código da rodada atual está enviado na branch `preview/home-v4`. O usuário forneceu `https://endearing-pie-27937b.netlify.app/`, mas a interface ainda mostra **Link repository**: a vinculação Git precisa ser concluída. Essa URL base não confirma um deploy V4. A prévia deve usar um branch deploy específico, mantendo a branch de produção. Passos e critérios em `docs/PREVIEW_NETLIFY.md`. O acesso externo do ambiente retornou bloqueio do proxy; o endereço final deve vir do deploy concluído, sem presumir sua URL. Não configure o domínio tksentregas.com.br para esta prévia.

As instruções propostas para a configuração cloud estão em `docs/CLOUD_SETUP.md`. A tentativa de atualizar o rascunho de configuração retornou `draft_not_editable`; sua persistência no painel não foi confirmada. A instalação e a validação locais foram concluídas independentemente disso.

Não compartilhe senhas ou tokens no chat. O número de orçamento ainda precisa ser confirmado; fotos e logo oficiais e a migração dos artigos seguem pendentes.
