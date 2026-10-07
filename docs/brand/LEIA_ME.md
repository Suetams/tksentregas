# TKS Entregas - identidade vetorial v1.0

Pacote de produção reconstruído a partir da referência aprovada `Referencia_Aprovada.jpeg`, com lettering TKS inclinado, ENTREGAS espaçado e azul profundo. O arquivo original tem 291 x 133 pixels; os contornos foram reconstruídos geometricamente, com curvas limpas. O logo não contém a imagem original embutida.

## Comece por estes arquivos

- Logo principal editável: `01_SVG/TKS_principal_azul.svg`.
- Principal branco para fundo escuro: `01_SVG/TKS_principal_branco.svg`.
- Manual: `06_Manual_e_Canva/TKS_Manual_da_Marca.pdf`.
- Páginas preparadas para importar no Canva: `06_Manual_e_Canva/TKS_Kit_Canva.pdf`.
- Avatar: `05_Web/avatar_TKS_1024.png`.
- Favicon: `05_Web/favicon.svg` e `05_Web/favicon.ico`.

## Qual arquivo usar

| Aplicação | Versão | Formato |
| --- | --- | --- |
| Documentos, fachada e painel de frota | Principal | SVG ou PDF |
| Cabeçalho de site e faixas largas | Horizontal | SVG |
| Avatar e marca pequena no uniforme | TKS compacto | SVG ou PNG |
| Ícone de navegador e interface | Símbolo T | SVG, ICO ou PNG |
| Reprodução monocromática | Preto | SVG ou PDF |
| Fundo escuro ou azul institucional | Branco | SVG ou PNG |

As versões branca, preta e azul têm a mesma geometria. Os SVG e PDF incluem a margem de proteção. Os PNG têm fundo transparente; o logo branco pode parecer vazio ao abrir sobre um fundo branco.

## Pastas

1. **01_SVG:** 12 logos vetoriais em contornos, editáveis em um editor vetorial e utilizáveis como ativos.
2. **02_PNG:** as mesmas 12 versões com transparência. Largura de 2.400 px para logos e 1.024 px para o símbolo.
3. **03_PDF_RGB:** 12 PDFs inteiramente vetoriais para intercâmbio e uso digital.
4. **04_PDF_CMYK:** 6 arquivos de referência para produção gráfica: principal, horizontal e compacto, em azul e preto.
5. **05_Web:** favicons de 16 a 512 px, ICO com múltiplos tamanhos, avatar TKS e manifesto.
6. **06_Manual_e_Canva:** manual de 8 páginas, kit de 6 páginas, prova de cor, papel timbrado A4 e teste de tamanho.
7. **07_Originais_e_Fontes:** referência aprovada, geometria mestre, gerador de arquivos e fontes de apoio com suas licenças.

## Identidade e cor

- Azul TKS: **#011E3E**, RGB **1 / 30 / 62**.
- Branco: **#FFFFFF**.
- Preto: **#000000**.
- Tipografia de apoio: **Rubik Regular, Bold e Italic**.
- O lettering TKS foi desenhado em contornos. **Não é uma fonte de alfabeto completo.**
- ENTREGAS usa contornos da Liberation Sans Bold Italic, com escala e espaçamento ajustados. O arquivo da fonte acompanha o pacote para reprodução técnica; não é uma fonte proprietária TKS.
- O azul foi adotado a partir da cor predominante do fundo da referência digital. Não corresponde a uma medição física da fachada.

Os PDFs CMYK usam C 98,4 / M 51,6 / Y 0 / K 75,7 como conversão inicial. O preto monocromático é K 100. Os arquivos não incluem perfil ICC de uma gráfica específica nem definição de Pantone. A prova física é o ponto de comparação para papel, tecido e adesivo.

## Tamanhos e reprodução

| Versão | Largura mínima em tela | Largura mínima de referência impressa |
| --- | --- | --- |
| Principal | 160 px | 30 mm |
| Horizontal | 320 px | 55 mm |
| TKS compacto | 64 px | 14 mm |
| Símbolo T | 24 px | 6 mm |

Margem livre: aproximadamente 1/5 da altura das letras TKS. Bordado, recorte e gravação exigem teste no tamanho final, principalmente no intervalo entre K e S. O símbolo T deve aparecer em contexto que identifique a TKS; o avatar da empresa usa as três letras.

## Canva

O kit PDF reúne a marca principal, negativa, horizontal e compacta, a paleta e dois modelos comerciais. Está preparado para importação no Canva. A importação automática ainda não foi concluída. Após importar, confira a preservação dos contornos; para os logos, prefira os SVG originais do pacote. Os textos de apoio podem ser editados.

Os modelos de post e proposta são pranchas de partida em formato paisagem; adapte a dimensão ao canal de publicação. O kit é um conjunto de páginas e ativos, e não um Brand Kit nativo já configurado. Para configurar um Brand Kit na conta, use os SVG, o azul #011E3E e Rubik como fonte de apoio.

O manual mostra aplicações ilustrativas em site, documento, furgão e uniforme. A arte de adesivação final deve respeitar as dimensões e recortes de cada veículo; não está incluído um gabarito de produção de uma frota específica.

## Originais editáveis

Os SVG são os arquivos de trabalho do logo. Todas as letras estão em curvas, sem necessidade de instalar fontes para visualizar ou reproduzir a marca. A geometria também está em JSON. O script de geração usa Python e as dependências de `requirements.txt`; as fontes auxiliares estão em `Fontes`. O conjunto do lettering TKS permanece nos SVG, em vez de um arquivo TTF de alfabeto.

## Verificação

Foram conferidos os contornos, as três versões de cor, a transparência dos PNG e a ausência de imagens raster nos PDFs. As páginas do manual e do kit foram renderizadas e revisadas. O teste de tamanhos registra o símbolo em 24 e 32 px e o logo completo em larguras reduzidas.
