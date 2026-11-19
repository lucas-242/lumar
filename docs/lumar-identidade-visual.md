# Lumar — Identidade Visual

Lumar é uma marca de beleza e bem-estar de Asunción, Paraguay: luxo botânico, calmo e acolhedor. O símbolo junta o mburucuyá (flor nacional), a erva-mate e uma renda circular inspirada no ñandutí. Tudo na identidade serve a esse tom: verde profundo, dourado em detalhes, muito espaço em branco e serifa leve.

Guia completo (com prévias visuais): https://claude.ai/artifact/DcyhxMPdeH5RAi5RPn2Nbm

---

## 1. Voz e conteúdo

- Escreva em português do Brasil para a comunidade brasileira e em espanhol do Paraguai para o público local. Nunca misture os dois no mesmo bloco. Mantenha "Asunción" com acento e "Paraguay" como no logo.
- Trate a pessoa por "você". Frases curtas, calmas, sem pressa e sem ponto de exclamação. Prometa cuidado e tempo, não transformação milagrosa.
- Sem emoji, sem gírias de promoção ("imperdível", "corre"). O luxo aqui é discrição.
- Exemplos de voz:
  - "Beleza com calma, no conforto da sua casa."
  - "Atendimento personalizado em Asunción."
  - "Cuidar de si também é um ritual."
- Só os rótulos (eyebrows) vão em CAIXA-ALTA com espaçamento largo (estilo `label`), como o descritor do logo. Botões, links, navegação, títulos e frases em caixa normal: a caixa-alta repetida endurece a página e briga com o itálico da Fraunces.
- Termos técnicos vêm depois do benefício. Primeiro o que a pessoa ganha ("unhas alongadas que parecem naturais"), depois a técnica como selo de autoridade ("Técnica molde F1"), sempre com uma frase que a explique para quem não conhece.
- Nomes de pessoas e cargos nas peças impressas: nome em caixa-alta na serifa, cargo em Hanken Grotesk.

---

## 2. Cor

A marca é verde, creme e dourado, com um toque de violeta. Há dois temas: **Creme** (fundo claro, o padrão) e **Verde** (fundo escuro). Use sempre os tokens semânticos e deixe o tema trocar os valores.

### Paleta

| Nome | Hex | Uso |
|---|---|---|
| branco | `#FFFFFF` | Fundo de página da landing. Dá o respiro que o nicho pede e faz as fotos saltarem. |
| blush | `#F4E7E2` | Nude rosado das unhas. Faixa de oferta, selos, números dos passos e placeholders na landing. Texto sobre ele: verde-noite, cinza-musgo (5,6:1) ou ouro-texto (4,6:1). |
| verde-floresta | `#2F482D` | Cor principal, medida do fundo verde do logo. Fundo do verso do cartão, de posts e de seções escuras; texto sobre creme (9,4:1). |
| verde-profundo | `#263B25` | Um tom abaixo do principal. Só como superfície alternativa no tema Verde. |
| verde-noite | `#262C24` | Quase-preto esverdeado. Texto principal sobre creme (13,4:1) e texto de botão sobre ouro-claro. |
| creme | `#FAF7F2` | Papel da marca, fundo do logo claro. Fundo de página no tema Creme e texto sobre verde-floresta (9,4:1). |
| creme-profundo | `#F1EBDD` | Seções alternadas e cartões sobre creme. |
| ouro-antigo | `#B08A55` | Dourado do wordmark e do anel de renda. **Só decorativo**: filetes, ornamentos e títulos grandes (3:1 a partir de 24px). Nunca texto pequeno sobre creme. |
| ouro-texto | `#836337` | Dourado escurecido para texto pequeno sobre creme e creme-profundo (5,2:1 e 4,6:1): endereço, "PARAGUAY", legendas, links. |
| ouro-claro | `#D9BE82` | Texto e filetes sobre verde-floresta (5,6:1); fundo do botão no tema Verde. |
| champanhe | `#F2DFAE` | Dourado-pálido do verso do cartão. Texto de destaque sobre verde-floresta (7,6:1). |
| violeta | `#5E5C9A` | Filamentos do mburucuyá. Acento raro: um detalhe por peça (marcador, número, selo). Nunca fundo de botão. |
| salvia | `#99A68D` | Folhas de erva-mate. Superfícies de apoio e ilustração; não usar para texto. |
| folha | `#636E5A` | Sombras das folhas. Ícones e ilustrações de apoio; não usar para texto corrido. |
| cinza-musgo | `#565E4F` | Texto secundário sobre creme e creme-profundo (6,3:1 e 5,7:1). |
| neblina | `#CBD3BF` | Texto secundário sobre verde-floresta e verde-profundo (6,5:1 e 7,9:1). |
| fio-creme | `#DDD2BA` | Filete decorativo sobre creme. |
| fio-verde | `#4B6648` | Filete decorativo sobre verde. |

### Tokens semânticos

| Token | Tema Creme | Tema Verde | Uso |
|---|---|---|---|
| `surface` | creme | verde-floresta | Fundo de página |
| `surface-alt` | creme-profundo | verde-profundo | Seções e cartões alternados |
| `ink` | verde-noite | creme | Texto principal |
| `ink-muted` | cinza-musgo | neblina | Texto secundário e legendas |
| `accent-text` | ouro-texto | ouro-claro | Dourado para texto pequeno (eyebrows, links) |
| `accent` | ouro-antigo | ouro-claro | Dourado decorativo (filetes, ornamentos, títulos grandes) |
| `line` | fio-creme | fio-verde | Filetes finos entre blocos |
| `field-strong` | verde-floresta | creme | Bloco de cor forte (capa, faixas); texto sobre ele: `surface` |
| `cta` | verde-floresta | ouro-claro | Fundo do botão principal (WhatsApp) |
| `on-cta` | creme | verde-noite | Texto sobre `cta` |
| `focus-ring` | verde-floresta | ouro-claro | Contorno de foco (2px sólido, offset 2px) |

### Regras de cor

- Fundo de página: `surface`. Seções alternadas: `surface-alt`. Texto: `ink`; legendas: `ink-muted`.
- O dourado tem dois usos que não se misturam: **decorativo** (`accent`, ouro-antigo) para filetes, ornamentos e títulos grandes; **texto pequeno** (`accent-text`) para endereço, eyebrows e links.
- Sobre verde-floresta: texto principal em creme, destaque em champanhe ou ouro-claro.
- Violeta aparece uma vez por peça, nunca em fundo de botão nem em grandes áreas.
- Salvia e folha são cores de apoio para ilustração; não servem para texto.
- Nada de gradiente em fundos ou botões. O gradiente dourado existe só dentro do wordmark e não é reproduzido em código.

### Landing page

A landing usa sempre o tema claro e não troca para o tema Verde no modo escuro do celular: a página inteira verde ficava pesada demais para um serviço delicado.

| Token | Valor | Uso |
|---|---|---|
| `surface` | branco | Fundo de página |
| `surface-alt` | creme | Painéis arredondados alternados, chips e cartões |
| `blush` | blush | Faixa de oferta, selos e destaques suaves |
| `cta` / `cta-hover` | verde-floresta / `#3D5C3A` | Botão de WhatsApp |
| `glass` | branco a 72% + desfoque de 16px | Barra do topo e barra fixa do celular |

- Proporção 60-30-10: branco domina, creme e blush apoiam, e verde e dourado ficam como acento. Na landing, o verde aparece só no botão principal e no logo, nunca como fundo de seção.
- Os painéis `surface-alt` e `blush` ficam soltos das bordas da tela (8–24px) com cantos `radius-xl`, como cartões apoiados na página.

---

## 3. Tipografia

- **Títulos:** Fraunces — `"Fraunces", Georgia, "Times New Roman", serif`
- **Texto e interface:** Hanken Grotesk — `"Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif`
- Google Fonts:
  `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600&display=swap`

| Estilo | Família | Tamanho / altura | Peso | Espaçamento | Uso |
|---|---|---|---|---|---|
| `display-xl` | Fraunces | 64px / 1.05 | 300 | -0.01em | Título principal da landing e de capas |
| `display-lg` | Fraunces | 44px / 1.1 | 300 | -0.005em | Títulos de seção e posts |
| `title` | Fraunces | 28px / 1.25 | 300 | — | Subtítulos e títulos de cartão |
| `title-italic` | Fraunces itálico | 28px / 1.25 | 300 | — | Uma ou duas palavras de destaque; citações |
| `body-lg` | Hanken Grotesk | 18px / 28px | 400 | — | Texto de abertura sob o título |
| `body` | Hanken Grotesk | 16px / 26px | 400 | — | Texto corrido |
| `body-sm` | Hanken Grotesk | 14px / 22px | 400 | — | Legendas e notas |
| `label` | Hanken Grotesk | 12px / 16px | 500 | 0.22em | Eyebrows e rótulos, sempre em CAIXA-ALTA |
| `button` | Hanken Grotesk | 15px / 1.2 | 600 | 0.01em | Botões e links, em caixa normal |

### Regras de tipografia

- Títulos em Fraunces sempre leve, peso 300. Não passe de 400; o peso 600 tira o ar de luxo. Use o eixo óptico alto (`opsz` 72–144) em títulos grandes.
- Para destacar, use itálico em uma ou duas palavras do título, nunca na frase inteira: "Beleza com *calma*".
- O wordmark LUMAR é arte do logo. Nunca o redigite com Fraunces; use sempre o arquivo. A Fraunces serve para o nome "Lumar" em títulos de texto e capas.
- Os acentos do português e do espanhol (ç, ã, õ, é, ñ, ó) estão cobertos pelas duas famílias.

---

## 4. Espaço, bordas e sombra

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 4px | Respiro mínimo entre ícone e texto |
| `space-2` | 8px | Entre rótulo e título |
| `space-3` | 16px | Padding interno de botões e cartões pequenos |
| `space-4` | 24px | Padding de cartões; margem lateral no celular |
| `space-5` | 40px | Entre blocos de uma seção |
| `space-6` | 64px | Entre seções (prefira espaço a mais) |
| `space-7` | 96px | Respiro do hero e da capa |
| `radius-none` | 0 | Cartão de visita impresso e posts |
| `radius-sm` | 12px | Campos e elementos pequenos |
| `radius-md` | 20px | Cartões, perguntas do FAQ e fotos da galeria na landing |
| `radius-lg` | 28px | Cartões grandes (passos) e base dos arcos |
| `radius-xl` | 24–48px (fluido) | Painéis de seção e faixa de oferta |
| `radius-full` | 9999px | Botões, chips, seletor de idioma e avatar, ecoando o anel de renda |
| `arch` | `50% 50% radius-md radius-md / 40% 40% radius-md radius-md` | Arco em fotos 4:5 (hero, serviços, retrato): ecoa o formato amendoado da unha |
| `shadow-paper` | Creme: `0 18px 36px -18px rgba(38,44,36,.35)` · Verde: `0 18px 36px -18px rgba(0,0,0,.55)` | Papel apoiado em peças impressas e mockups |
| `shadow-warm` | `0 24px 48px -28px rgba(131,99,55,.38)` | Fotos e cartões na landing: sombra dourada e difusa |
| `shadow-soft` | `0 12px 32px -20px rgba(38,44,36,.22)` | Botões e seletor ativo |

- Composição centrada ou em colunas amplas, com margens generosas: entre seções `space-6` ou `space-7`, nunca menos de `space-5`.
- Na landing, separe blocos com espaço ou troca de fundo, não com filetes. Nenhuma linha reta com mais de ~40px: listas usam um ponto dourado de 7px, e passos e perguntas viram cartões arredondados. Peças impressas podem manter filetes de 1px, poucos e com muito ar.
- Sem cartões com borda lateral colorida.
- Foco: contorno sólido de 2px em `focus-ring` com offset de 2px.

---

## 5. Logo

Todos os arquivos têm o fundo da própria versão (creme `#FAF7F2` ou verde `#2F482D`) e não têm transparência: aplique cada um sobre o fundo de mesma cor, sem recortar.

| Arquivo | O que é | Quando usar |
|---|---|---|
| `logo-sem-descritor-verde` / `logo-sem-descritor-creme` | Emblema + LUMAR | **Versão padrão** enquanto a Lumar atende a domicílio, sem espaço nem cursos |
| `logo-verde` / `logo-creme` | Logo completo com "Spa • Centro de Formação • Paraguay" | Quando houver espaço físico e cursos |
| `logo-verde-textura` | Logo completo sobre verde texturizado | Só em fundos grandes (capa de Instagram, embalagem, parede); nunca pequeno |
| `emblema-verde` / `emblema-creme` | Flor, coroa de erva-mate e anel de renda, sem o nome | Quando o nome já aparece ao lado |
| `flor-verde` / `flor-creme` | Só o mburucuyá | Ícone pequeno, favicon, selo |
| `avatar-verde` / `avatar-creme` | Emblema em recorte quadrado | Foto de perfil (com máscara circular) |

### Tamanhos mínimos

- Logo completo: 180px no digital ou 30mm no impresso.
- Emblema: 72px ou 14mm.
- Flor: 32px.

### Regras

- Espaço livre ao redor: a altura da letra L do LUMAR, em todos os lados.
- Fundo creme leva a versão creme; fundo verde-floresta leva a versão verde. Sobre foto, escureça a imagem antes e use a versão verde.
- Não estique, não gire, não troque as cores, não adicione sombra, não coloque dentro de caixas coloridas e não cole outro texto ao wordmark.

---

## 6. Imagem e ilustração

- A ilustração da marca é gravura botânica: traço fino, folhas de erva-mate e mburucuyá. Novas ilustrações seguem esse traço, em verde-floresta, folha, salvia, ouro-antigo e um toque de violeta.
- Fotografia em luz natural e quente, tons suaves, pele e mãos reais. Evite cenas de catálogo de spa (pedras empilhadas, bambu, orquídea) e filtros fortes.
- Evite filtros "vintage" com pretos lavados e dominante verde: deixam as unhas sem vida. Preset único para todas as fotos: temperatura +3 a +6, matiz +6 a +10 para o magenta, pretos −15 a −25, contraste +10, vibração +15, saturação de verde/aqua −20 e luminância de laranja +5 (pele).
- Prefira fundos brancos, linho ou blush. Fundos verde-escuros ou pretos competem com as unhas.
- O verde das fotos antigas vinha de um filtro aplicado depois (sombras esverdeadas e pretos lavados); os originais da câmera não têm esse tom. As fotos do site são geradas a partir dos originais em `images/` (fora da pasta publicada e fora do repositório, por causa do GPS no EXIF), com o mesmo recorte do layout e só uma curva suave que clareia os tons médios, sem mexer em preto e branco puros. Nunca aplique filtros de app ("filme", "vintage", "matte") antes de publicar.
- Formatos na landing: miniaturas em WebP de 1000 × 1250 (hero 1000 × 1500), versões ampliadas até 1400px de largura, qualidade 74–76.
- Sem ícones decorativos nem emoji. Quando faltar um símbolo, use um filete dourado ou a flor.

---

## 7. Aplicações

### Botão

Pílula, em caixa normal. Um único botão principal por tela, que leva ao WhatsApp.

- Fundo `cta`, texto `on-cta`, estilo `button`, padding 14px × 28px, `radius-full`, `shadow-soft`.
- Hover: fundo `cta-hover` e subida de 1px. Sem borda.
- Foco: contorno de 2px em `focus-ring`, offset 2px.
- Secundário: fundo `surface-alt`, texto `ink`, sem borda nem sombra. No máximo um ao lado do principal.
- Links de texto em `accent-text`, sem sublinhado, seguidos de "→", que desliza 4px no hover.
- Tema Creme: verde-floresta com texto creme. Tema Verde (fora da landing): ouro-claro com texto verde-noite.
- Nunca em violeta nem com gradiente.
- Links de WhatsApp sempre com `target="_blank"` e `rel="noopener"`.

### Cartão de visita

Quadrado, cantos retos (`radius-none`).

- **Frente:** fundo creme, `logo-sem-descritor-creme` a cerca de 88% da largura, centrado, sem mais nada. Com espaço e cursos, troque por `logo-creme`.
- **Verso:** fundo verde-floresta, `flor-verde` no canto superior esquerdo e bloco de texto alinhado à direita, embaixo.
  - Nome: Fraunces 300, caixa-alta, espaçamento 0.08em, champanhe.
  - Cargo: Hanken Grotesk 400, creme.
  - Telefone e cidade: Hanken Grotesk 400, champanhe. Instagram: creme.
- Acabamento sugerido: papel texturizado e hot stamping dourado no logo e no nome.
- No máximo cinco linhas no verso.
- Exemplo: Marcela Labrea · Fundadora · +595 982 192 737 · @lumar.py · Asunción • Paraguay. O cargo e o perfil de Instagram são provisórios: confirme antes de imprimir.

### Posts de Instagram

Formato 4:5 (1080 × 1350px). Uma frase curta em Fraunces leve (até 10 palavras), um rótulo dourado e o emblema ou a flor; nada mais.

- **Anúncio (verde):** fundo verde-floresta, emblema no topo (68% da largura), rótulo em ouro-claro, título `display-lg` em creme com a palavra de destaque em itálico e champanhe.
- **Frase (creme):** fundo creme, flor no topo, filete violeta (o único toque dessa cor), frase em `title-italic` verde-noite e rótulo em ouro-texto embaixo.
- Alterne verde e creme no feed.
- Cantos retos, sem moldura, sem emoji, sem hashtag na arte. No máximo uma palavra em itálico por título.
- Capa de destaque e fundo de story grande podem usar `logo-verde-textura`.

### Perfil e favicon

- Perfil de rede social: `avatar-verde` com máscara circular.
- Abaixo de 72px, troque o emblema pela flor: as folhas e a renda viram ruído.
- Filete dourado em volta (`accent`, 4px) é opcional e só para o perfil; não use em favicon.
- Não coloque texto dentro do círculo.

### Landing page (hero)

- Fundo `surface`, `label` acima do título, título `display-xl` (40px no celular) com uma palavra em itálico e `accent-text`, frase em `body-lg` e `ink-muted`.
- Uma única chamada para ação: o botão de WhatsApp.
- Sem fotos próprias, o emblema sobre painel verde-floresta (`radius-md`, `shadow-warm`) faz o papel de imagem. Com fotos, a foto substitui o painel.
- Na landing atual, a abertura é dividida: texto à esquerda sobre branco e foto em arco à direita, sem véu nem sobreposição. No celular, a foto vem em cima, com cantos superiores de 160px, e o texto embaixo.
- A barra do topo é translúcida (`glass`), sem filete, e flutua sobre o conteúdo.

---

## 8. Contato usado nas peças

- Marcela Labrea · WhatsApp +595 982 192 737
- Instagram: @marcela.labrea.py (https://www.instagram.com/marcela.labrea.py/)
- Na landing, o link do WhatsApp é `https://wa.me/595982192737`.
