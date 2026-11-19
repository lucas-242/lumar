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
| `whatsapp_click` | clique em botão/link de WhatsApp | `location`: header, hero, manicure-f1, manicure-gel, manicure-banho, pedicure, sobrancelhas, offer, sticky |
| `instagram_click` | clique em link do Instagram | `location`: hero, gallery, sobre, offer, footer |
| `section_view` | seção 40% visível | `section` |
| `scroll_depth` | 25/50/75/100% | `percent` |
| `lang_switch` | troca ES/PT | `lang` |
| `image_open` | abre uma foto ampliada | `image` |
| `image_zoom` | aproxima a foto (clique, roda do mouse ou pinça) | `image` |

Todos levam `lang` e as UTMs da URL. A mensagem do WhatsApp sai limpa, só o texto `wa.msg` no idioma da página (espanhol ou português); a origem do clique fica nos eventos de analytics.
Exemplo de link para anúncio: `?utm_source=instagram&utm_medium=bio&utm_campaign=15off`.

Testes: `?debug=1` mostra os eventos no console; `#privacidad` força o aviso; `?lang=pt` abre em português.

## Imagens
- `assets/img/hero-m.webp` (1000×1500): foto de abertura no desktop, dentro do arco do hero, com parallax leve (desligado para quem prefere menos movimento). No celular entra `assets/img/hero-sq.webp` (1000×1000), recortada conforme a altura da tela para o botão caber na primeira dobra.
- Cada foto de serviço e da galeria existe em duas versões com o mesmo nome: `assets/img/NOME.webp` (exibida) e `assets/img/full/NOME.webp` (aberta no visualizador). Nomes: `f1`, `gel`, `sobrancelhas`, `g1`–`g6`, todas em 4:5.
- `assets/img/og.jpg` (1200×630): imagem que aparece ao compartilhar o link no WhatsApp, Instagram e Facebook.
- Visualizador: clique ou toque na foto para ampliar no ponto escolhido, arraste para mover, roda do mouse ou pinça para ajustar, deslize ou setas para trocar de foto, Esc ou toque fora para fechar.
- `assets/img/marcela.jpg` (738×922, 4:5): retrato da Marcela na seção "Quién te atiende".
- Fotos originais: ficam na pasta `images/` da raiz, só na máquina de quem edita o site. Ela está no `.gitignore` e não vai para o repositório nem para o deploy, porque as fotos do celular trazem no EXIF a localização (GPS), a data e o aparelho. Peça os originais à Marcela ou a quem mantém o site.
- Ao exportar uma foto nova para `assets/img/`, salve sem metadados e confira antes de publicar (no macOS: `mdls arquivo.jpg | grep -i latitude` não deve retornar nada).

## SEO e assistentes de IA
- `index.html`: título e descrição para busca, Open Graph, dados estruturados (`BeautySalon`/`NailSalon`, serviços, idiomas, Instagram e `FAQPage` com as perguntas frequentes visíveis na página).
- `robots.txt`: libera buscadores e os robôs de IA (ChatGPT, Claude, Perplexity, Gemini, Apple).
- `sitemap.xml`: página e fotos.
- `llms.txt`: resumo em texto simples (espanhol e português) para assistentes de IA.

Domínio oficial: `https://lumar.com.py`, já usado no canonical, Open Graph, dados estruturados, `sitemap.xml`, `robots.txt` e `llms.txt`. Se o domínio mudar, troque em todos esses arquivos de uma vez:

    grep -rl "https://lumar.com.py" index.html robots.txt sitemap.xml llms.txt | xargs sed -i '' 's#https://lumar.com.py#https://NOVO-DOMINIO#g'

Ícones: `favicon.ico` (16, 32 e 48 px, pedido direto pelos navegadores e pelo Google em `/favicon.ico`), `favicon-32.png`, `icon-512.png` (logo nos dados estruturados) e `apple-touch-icon.png` (180 px, tela inicial do iPhone). Todos saem do mesmo emblema; ao trocar o logo, gere os quatro de novo.

Depois do deploy: cadastre o site no Google Search Console e no Bing Webmaster Tools (o Bing alimenta o ChatGPT) e envie o `sitemap.xml`. O que mais pesa para buscas locais ("manicura en Asunción") é um Perfil de Empresa no Google com o mesmo nome, telefone e link do site.

## Deploy (Firebase Hosting)
    firebase login
    firebase projects:create <id-do-projeto> --display-name lumar
    firebase use <id-do-projeto>
    firebase deploy --only hosting
