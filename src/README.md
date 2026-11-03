# Lumar — landing

Site estático (HTML, CSS e JS puros, sem build). Idioma principal: espanhol; português em `?lang=pt` ou pelo botão PT/ES.

## Estrutura
- `index.html`: conteúdo em espanhol. Os textos em português ficam em `js/app.js` (`dict.pt`), ligados por `data-i18n`.
- `css/styles.css`: tokens da marca, fontes e layout.
- `js/app.js`: `CONFIG` (número e IDs de analytics), idiomas, consentimento e eventos.
- `assets/`: logos e fontes.

## Analytics e mapa de calor
Cole os IDs em `CONFIG.analytics` (`js/app.js`):
- `ga4`: Google Analytics 4 (Admin → Fluxos de dados). Marque `whatsapp_click` como evento principal.
- `clarity`: Microsoft Clarity, gratuito (mapa de calor e gravações). Project ID em Settings → Overview.
- `metaPixel`: Pixel da Meta, para anúncios. O clique no WhatsApp vira `Contact`.

Com os três vazios nada carrega e o aviso de privacidade não aparece. Com algum preenchido, as ferramentas só carregam após "Aceptar".

| Evento | Quando | Parâmetros |
|---|---|---|
| `whatsapp_click` | clique em botão/link de WhatsApp | `location`: header, hero, manicure-f1, manicure-gel, sobrancelhas, offer, sticky |
| `instagram_click` | clique em link do Instagram | `location`: hero, gallery, sobre, offer, footer |
| `section_view` | seção 40% visível | `section` |
| `scroll_depth` | 25/50/75/100% | `percent` |
| `lang_switch` | troca ES/PT | `lang` |
| `image_open` | abre uma foto ampliada | `image` |
| `image_zoom` | aproxima a foto (clique, roda do mouse ou pinça) | `image` |

Todos levam `lang` e as UTMs da URL. A mensagem do WhatsApp inclui a origem (ex.: `[instagram]`).
Exemplo de link para anúncio: `?utm_source=instagram&utm_medium=bio&utm_campaign=15off`.

Testes: `?debug=1` mostra os eventos no console; `#privacidad` força o aviso; `?lang=pt` abre em português.

## Imagens
- `assets/img/hero.webp` (1920×1080) e `assets/img/hero-m.webp` (1000×1500, celular): foto de abertura, com efeito parallax (desligado para quem prefere menos movimento).
- Cada foto de serviço e da galeria existe em duas versões com o mesmo nome: `assets/img/NOME.webp` (exibida) e `assets/img/full/NOME.webp` (aberta no visualizador). Nomes: `f1`, `gel`, `sobrancelhas`, `g1`–`g6`, todas em 4:5.
- `assets/img/og.jpg` (1200×630): imagem que aparece ao compartilhar o link no WhatsApp, Instagram e Facebook.
- Visualizador: clique ou toque na foto para ampliar no ponto escolhido, arraste para mover, roda do mouse ou pinça para ajustar, deslize ou setas para trocar de foto, Esc ou toque fora para fechar.
- O único espaço tracejado que sobra é o retrato da Marcela (`data-placeholder="retrato"`).

## SEO e assistentes de IA
- `index.html`: título e descrição para busca, Open Graph, dados estruturados (`BeautySalon`/`NailSalon`, serviços, idiomas, Instagram e `FAQPage` com as perguntas frequentes visíveis na página).
- `robots.txt`: libera buscadores e os robôs de IA (ChatGPT, Claude, Perplexity, Gemini, Apple).
- `sitemap.xml`: página e fotos.
- `llms.txt`: resumo em texto simples (espanhol e português) para assistentes de IA.

Antes do primeiro deploy, troque `https://SEU-DOMINIO` pelo endereço real em todos esses arquivos:

    grep -rl "SEU-DOMINIO" index.html robots.txt sitemap.xml llms.txt | xargs sed -i '' 's#https://SEU-DOMINIO#https://lumar-py.web.app#g'

Depois do deploy: cadastre o site no Google Search Console e no Bing Webmaster Tools (o Bing alimenta o ChatGPT) e envie o `sitemap.xml`. O que mais pesa para buscas locais ("manicura en Asunción") é um Perfil de Empresa no Google com o mesmo nome, telefone e link do site.

## Deploy (Firebase Hosting)
    firebase login
    firebase projects:create <id-do-projeto> --display-name lumar
    firebase use <id-do-projeto>
    firebase deploy --only hosting
