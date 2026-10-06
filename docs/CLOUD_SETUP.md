# Configuração cloud proposta

A instalação local foi reproduzida com sucesso. A atualização do rascunho cloud retornou `draft_not_editable`; a releitura mantém o mesmo rascunho e não confirma que estas instruções foram salvas no painel. Este arquivo preserva a proposta para revisão futura, sem alterar credenciais, rede ou repositórios configurados.

## Script de instalação

```bash
#!/usr/bin/env bash
set -euo pipefail
cd /workspace/tksentregas
# Runtime preparado: Node 24.19.0 e npm 11.9.0.
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run lint --if-present
npm run check
npm run build
```

## Inicialização e validação

Usar o checkout existente em `/workspace/tksentregas`, sem criar worktrees no setup. Ler README e os documentos da rodada. A configuração de ambiente não deve editar código, manifests ou lockfiles. Se dependências estiverem ausentes ou o lockfile mudar, reinstalar com o comando acima.

Para desenvolvimento, executar `npm run dev -- --port 4321` em sessão gerenciada. Se a porta estiver ocupada, identificar o processo e encerrar somente um processo iniciado por você. Verificar internamente HTTP 200 em `/` e `/orcamento`, e HTTP 404 em uma URL inexistente. Não apresentar localhost como preview pública.

Para validar, executar `npm run check`, `npm run lint --if-present`, `npm run build` e `npm test`. Playwright inicia `astro preview` em 4321 e usa `/usr/bin/chromium`; `CHROMIUM_PATH` permite um executável alternativo. Deixar essa porta livre antes dos testes. Reiniciar o desenvolvimento somente se necessário.

Prévia de revisão foi autorizada, mas depende de hospedagem conectada e acesso de rede. Não publicar em produção nem conectar o domínio comercial. Não enviar mensagens de teste ao comercial. Não solicitar senhas ou valores de tokens no chat.

WhatsApp permanece desativado enquanto `PUBLIC_TKS_WHATSAPP` estiver vazio. Configurá-lo apenas após confirmação explícita do número público internacional da TKS. Rebuild necessário. Preservar controles internos de dados, fotografias e marca pendentes; não inventar informações. `noindex` e robots continuam ativos. Publicar o ambiente cloud não equivale a publicar o site da TKS.
