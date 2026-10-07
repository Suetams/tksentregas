# Prévia HOME V4 na Netlify

## Estado atual — revisão de design da Home

Em 06/10/2026, o usuário forneceu a preview real <https://deploy-preview-4--resilient-baklava-3561ee.netlify.app/>. A [PR 4](https://github.com/Suetams/tksentregas/pull/4) foi consultada por HTTP 200: está aberta e contém comentários automáticos da Netlify com essa URL e um deploy do projeto `resilient-baklava-3561ee`. A PR usa a branch `preview/home-v4-download`; o código V4 nela é igual à base local, com ZIP/instruções adicionais.

Portanto, a integração por **Deploy Preview da PR 4** é o caminho desta revisão. Um push validado para sua branch de origem atualiza a mesma URL de revisão. Conferir o novo commit e o resultado informado pela Netlify antes de declarar a revisão publicada. Não mudar `main`, fazer merge, promover deploy ou alterar domínio de produção. O hostname público da preview ainda está fora da política de rede do ambiente; status da integração e renderização local são evidências distintas.

Em 07/10/2026, a integração confirmou **ready** para o commit exato `e61985da00c28bf38962d9cc7c0f958b88e91954`, enviado à branch da PR 4. O [novo registro de deploy](https://app.netlify.com/projects/resilient-baklava-3561ee/deploys/6ac5a724d5006e000887f8c6) e a URL pública foram retornados pelo bot Netlify na PR. [Evidência mínima](review/home/netlify-deploy.json). A preview está atualizada; nenhum merge ou deploy em produção foi feito.

Relatório e capturas desta rodada: [HOME_DESIGN_REVIEW.md](HOME_DESIGN_REVIEW.md). O histórico abaixo registra as dificuldades anteriores de branch deploy e a entrega manual; não descreve uma falha atual da PR 4.

## Histórico anterior — branch deploy e entrega manual

O usuário forneceu o projeto Netlify `endearing-pie-27937b` e informou que conectou `Suetams/tksentregas` ao GitHub e habilitou a branch `preview/home-v4` em Branch deploys. O código da HOME V4 foi enviado nessa branch, no commit `15f2841eb268d87543fec2d15e4d92a906f8d166`.

Depois desse envio, o usuário confirmou que **não aparece nenhum deploy da branch `preview/home-v4`** no painel. Portanto, o push não comprova que um build tenha sido iniciado. O diagnóstico da integração permanece pendente.

O caminho atual é publicar manualmente o ZIP já compilado em um **novo projeto de prévia** na Netlify. **Não há URL publicada confirmada.** O acesso externo deste ambiente continua bloqueado; não foi recebido um resultado HTTP válido da prévia.

O usuário forneceu o endereço base do projeto Netlify: <https://endearing-pie-27937b.netlify.app/>. Esse endereço ainda não foi verificado neste ambiente e não confirma que a HOME V4 está publicada; pode corresponder à branch de produção configurada na Netlify.

A consulta somente de leitura recebeu `CONNECT tunnel failed, response 403` do proxy, sem resposta HTTP da página. Uma solicitação de acesso adicional à mesma URL não concluiu e foi interrompida; não houve resultado de aprovação ou rejeição. Não repetir a solicitação sem uma mudança de acesso. A integração desse projeto com a branch `preview/home-v4` ainda precisa ser confirmada por um deploy dessa branch. O envio manual descrito abaixo cria uma prévia independente dessa integração.

## Caminho atual: ZIP compilado e publicação manual

O arquivo `TKS_HOME_V4_NETLIFY.zip` está disponível no GitHub, na branch isolada `preview/home-v4-download`, commit `18b8b8a2610832c8220c635d8177dcd8ba12677d`. Essa branch contém o pacote de entrega e não deve substituir a branch de produção.

Download direto: <https://github.com/Suetams/tksentregas/raw/18b8b8a2610832c8220c635d8177dcd8ba12677d/TKS_HOME_V4_NETLIFY.zip>.

No PC com Windows:

1. Baixar o ZIP pelo link acima.
2. Clicar com o botão direito no arquivo e escolher **Extrair tudo**.
3. Abrir a pasta extraída e localizar a pasta que contém `index.html`, os assets e as pastas das páginas. Enviar essa pasta completa; não apenas o arquivo `index.html`.
4. Abrir <https://app.netlify.com/drop> e arrastar essa pasta para criar um **novo projeto de prévia**. Não substituir o projeto de produção nem alterar seus domínios.
5. Aguardar a conclusão do envio e abrir o endereço HTTPS que a Netlify fornecer. Compartilhar esse endereço real na conversa para confirmar a publicação.

Esse pacote já foi compilado; o envio manual não exige executar Node, npm ou um comando de build no PC. Baixar o ZIP, extrair a pasta ou enviá-la à Netlify ainda não confirma que a página esteja acessível: a confirmação depende do resultado do deploy e da abertura da URL fornecida.

## Diagnóstico futuro: branch deploy

As instruções abaixo permanecem como referência para investigar a integração GitHub–Netlify. Como nenhum deploy da branch apareceu após o commit `15f2841`, esse fluxo ainda não está confirmado como funcional.

1. Se aparecer **Link repository**, conectar GitHub e selecionar `Suetams/tksentregas`. Comando de build `npm run build`, pasta publicada `dist`, diretório base vazio (raiz do repositório). Depois abrir a configuração de builds, branches e contextos de deploy.
2. Manter a branch de produção atual. Na configuração de **branch deploys**, se estiver selecionado **None**, editar, escolher **Let me add individual branches** (ou a opção equivalente de branches específicas), adicionar o nome completo `preview/home-v4` e salvar. Se já houver branches específicas, acrescentar essa branch preservando as existentes.
3. Enviar a versão validada para `preview/home-v4`. Um novo commit nessa branch deve acionar o build, desde que a integração e os builds estejam ativos.
4. Na lista de deploys, conferir o nome da branch, o commit e o contexto **branch-deploy**. Aguardar o build terminar com sucesso.
5. Abrir o endereço HTTPS fornecido nesse deploy. Copiar o endereço real para a conversa, sem montar ou adivinhar um hostname.

Se o commit já tiver sido enviado antes de habilitar branch deploys, usar o recurso de novo build/retry caso já exista um deploy dessa branch, ou enviar o próximo commit validado nela. Não disparar um build da branch de produção para tentar atualizar a prévia. Não repetir tentativas sem examinar a mensagem de erro.

Não usar `main`, mudar a branch de produção, executar um deploy com `--prod`, promover o deploy de revisão para produção ou alterar os domínios comerciais para apresentar esta prévia.

## Configuração de build existente

`netlify.toml` já registra:

- comando: `npm run build`;
- diretório publicado: `dist`;
- Node: `24.19.0`;
- cabeçalho `X-Robots-Tag: noindex, nofollow`.

O código Astro deve ser construído a partir da raiz deste repositório. Se o painel Netlify possuir um diretório base definido, conferir que ele corresponde à raiz do checkout, onde ficam `package.json` e `netlify.toml`.

Os contextos de branch deploy e deploy preview herdam essa configuração. Acrescentar `[context.branch-deploy]` ou `[context.deploy-preview]` ao arquivo não ativa esses recursos: a seleção das branches e dos previews continua nas configurações do projeto Netlify.

## Alternativa: Deploy Preview por pull request

Se o projeto já estiver configurado para criar **Deploy Previews**, uma pull request da branch `preview/home-v4` para a branch base adequada pode acionar uma prévia com contexto **deploy-preview**. Não fazer merge para obter a prévia. Conferir o commit e usar o link efetivamente gerado pela integração.

Criar uma PR pode depender de acesso à API GitHub ou de uma ação no navegador. Isso não é requisito para o caminho manual atual.

## Verificação antes de compartilhar

No caminho manual, confirmar que o projeto novo recebeu a pasta extraída do ZIP identificado acima. No caminho por GitHub, conferir na Netlify que o deploy corresponde à branch e ao commit de revisão. Depois abrir o endereço gerado e testar Home, Frota e Orçamento. Verificar também a navegação em tela estreita e uma URL inexistente, que deve retornar 404.

Uma branch enviada ou um build local aprovado não confirma publicação na Netlify. Caso o ambiente cloud bloqueie a URL da prévia, adicionar o hostname exato às configurações de rede antes de repetir a verificação. O usuário também pode abrir esse endereço diretamente no navegador do PC.

O ambiente cloud e a hospedagem Netlify são independentes. Publicar o ambiente cloud não executa um deploy do site.
