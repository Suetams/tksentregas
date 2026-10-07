# Abrir a Home V4 no PC

O arquivo `TKS_HOME_V4_NETLIFY.zip` já contém o site compilado e pronto para uma prévia. Você não precisa instalar Node, executar comandos ou configurar branches.

1. Baixe o ZIP pelo GitHub. Na página do arquivo, use **Download raw file** (ícone de seta para baixo).
2. No Windows, clique com o botão direito no ZIP e escolha **Extrair tudo**.
3. Abra a pasta extraída e confirme que ela contém `index.html`, `_astro` e `brand`.
4. Entre em sua conta Netlify e abra <https://app.netlify.com/drop>, ou **Add new project → Deploy manually**.
5. Arraste a pasta que contém `index.html` para a área de upload. Use um **novo projeto de prévia**, sem conectar o domínio comercial da TKS.
6. Aguarde o upload terminar. Abra o endereço `.netlify.app` que a Netlify apresentar e envie esse endereço na conversa.

Se o formulário aceitar o ZIP diretamente, você também pode enviar o arquivo sem extrair. A pasta extraída é a alternativa quando o ZIP não for aceito.

Esse pacote corresponde ao código V4 do commit `15f2841`. Não contém credenciais, dependências ou arquivos TypeScript. HTML, CSS, fontes locais e imagens otimizadas estão incluídos. A prévia bloqueia indexação. Não é necessário preencher configurações de build para esse upload manual.

A branch `preview/home-v4` mantém o código de desenvolvimento. Esta branch adicional contém apenas a entrega para download junto à mesma base de código; não modifica `main` ou a branch de produção.
