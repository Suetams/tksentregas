# Prévia HOME V4 na Netlify

O usuário informou que conectou `Suetams/tksentregas` à Netlify. A HOME V4 deve ser entregue pela branch `preview/home-v4`. Essa conexão permite à Netlify buscar os commits e executar o build, sem um token Netlify no ambiente de desenvolvimento.

O usuário forneceu o endereço base do projeto Netlify: <https://endearing-pie-27937b.netlify.app/>. Esse endereço ainda não foi verificado neste ambiente e não confirma que a HOME V4 está publicada; pode corresponder à branch de produção configurada na Netlify.

A consulta somente de leitura recebeu `CONNECT tunnel failed, response 403` do proxy, sem resposta HTTP da página. Uma solicitação de acesso adicional à mesma URL não concluiu e foi interrompida; não houve resultado de aprovação ou rejeição. Não repetir a solicitação sem uma mudança de acesso. O vínculo informado ainda precisa ser confirmado pelo deploy da branch `preview/home-v4` e pela URL que a Netlify gerar para ele.

## Caminho recomendado: branch deploy

1. No projeto Netlify conectado a `Suetams/tksentregas`, abrir a configuração de builds, branches e contextos de deploy.
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

Criar uma PR pode depender de acesso à API GitHub ou de uma ação no navegador. Isso não é requisito para o caminho recomendado de branch deploy.

## Verificação antes de compartilhar

Conferir na Netlify que o deploy corresponde à branch e ao commit de revisão; depois abrir o endereço gerado e testar Home, Frota e Orçamento. Verificar também a navegação em tela estreita e uma URL inexistente, que deve retornar 404.

Uma branch enviada ou um build local aprovado não confirma publicação na Netlify. Caso o ambiente cloud bloqueie a URL da prévia, adicionar o hostname exato às configurações de rede antes de repetir a verificação. O usuário também pode abrir esse endereço diretamente no navegador do PC.

O ambiente cloud e a hospedagem Netlify são independentes. Publicar o ambiente cloud não executa um deploy do site.
