(() => {
  'use strict';

  const CONFIG = {
    whatsapp: '595982192737',
    whatsappDisplay: '+595 982 192 737',
    analytics: {
      ga4: 'G-WNVB79SY03', // Google Analytics 4 (measurementId del proyecto Firebase lumar-py)
      clarity: '',   // ID del proyecto en Microsoft Clarity
      metaPixel: ''  // ID del píxel de Meta
    }
  };

  const IDS = CONFIG.analytics;
  const HAS_ANALYTICS = Boolean(IDS.ga4 || IDS.clarity || IDS.metaPixel);
  const DEBUG = /[?&]debug=1/.test(location.search);

  // El español vive en el HTML; aquí solo el portugués y el mensaje de WhatsApp.
  const dict = {
    es: {
      'wa.msg': 'Hola, Marcela. Vi el sitio de Lumar y quiero reservar con el 15% de descuento para nuevos clientes.'
    },
    pt: {
      'nav.tecnica': 'Técnica', 'nav.manicure': 'Manicure', 'nav.sobrancelhas': 'Sobrancelhas', 'nav.agendar': 'Agendar',
      'cta.header': 'Agendar com 15%',
      'hero.eyebrow': 'Salão de unhas e sobrancelhas · Asunción',
      'hero.h1': 'Unhas e sobrancelhas com técnica brasileira e <em>naturalidade</em>.',
      'hero.lead': 'Alongamento com aparência natural, esmaltação em gel duradoura e sobrancelhas desenhadas para o seu rosto. Atendimento personalizado, com tempo e cuidado em cada detalhe.',
      'hero.cta': 'Agendar com 15% de desconto', 'hero.ig': 'Ver trabalhos no Instagram',
      'hero.note': '15% de desconto no primeiro agendamento para novos clientes.',
      'strip.1': 'Alongamento natural', 'strip.2': 'Esmaltação em gel', 'strip.3': 'Sobrancelhas', 'strip.4': 'Técnica brasileira',
      'strip.5': 'Banho de gel', 'strip.6': 'Pedicure',
      'nat.eyebrow': 'A técnica',
      'nat.title': 'A elegância está nos <em>detalhes</em>.',
      'nat.text': 'A manicure brasileira é reconhecida pelo acabamento impecável, pelo cuidado minucioso com a cutícula e pela esmaltação que cobre toda a área da lâmina. A Lumar traz esse segmento para Asunción e aplica o mesmo cuidado ao design de sobrancelhas.',
      'nat.p1': 'Formato em harmonia com a sua mão', 'nat.p2': 'Cutícula trabalhada com precisão', 'nat.p3': 'Acabamento perfeito',
      'man.eyebrow': 'Manicure', 'man.title': 'Unhas elegantes, com acabamento <em>impecável</em>.',
      'man.cta': 'Consultar valores no WhatsApp',
      'f1.tag': 'Técnica molde F1', 'f1.title': 'Alongamento em gel',
      'f1.text': 'Com o molde F1, o gel é modelado sobre a sua unha natural, no comprimento e no formato que melhor acompanham a sua mão. O resultado é uma unha fina, leve e de aparência natural.',
      'f1.p1': 'Comprimento e formato definidos com você', 'f1.p2': 'Cutícula cuidada e acabamento fino', 'f1.p3': 'Cores elegantes, do nude ao vermelho',
      'gel.title': 'Esmaltação em gel',
      'gel.text': 'Cor e brilho duradouros, com acabamento natural e fino. Mãos impecáveis por semanas, com uma rotina mais prática.',
      'bath.title': 'Banho de gel',
      'bath.text': 'Uma camada de gel sobre a sua unha natural, sem alongar, que protege e dá mais resistência, com acabamento fino.',
      'ped.title': 'Pedicure',
      'ped.text': 'O mesmo cuidado da manicure brasileira nos seus pés: cutícula trabalhada com precisão e esmaltação impecável.',
      'br.eyebrow': 'Sobrancelhas', 'br.title': 'Sobrancelhas que emolduram o seu <em>olhar</em>.',
      'br.text': 'O design personalizado tem como objetivo valorizar o seu rosto e realçar a beleza da sua sobrancelha, mantendo a estrutura natural e, com isso, um resultado harmonioso.',
      'br.p1': 'Desenho sob medida para o seu rosto', 'br.p2': 'Traço natural, sem exageros', 'br.p3': 'Resultado harmonioso para o dia a dia',
      'gal.eyebrow': 'Portfólio', 'gal.title': 'Trabalhos <em>recentes</em>.', 'gal.ig': 'Ver mais no Instagram',
      'ab.eyebrow': 'Quem cuida de você',
      'ab.text': 'Mais de 13 anos como manicure e mais de 5 em design de sobrancelhas, com especialização na técnica brasileira. Atende com hora marcada em Asunción, em português e espanhol, e dedica a cada atendimento o tempo que o detalhe merece.',
      'ab.ig': 'Ver o trabalho dela no Instagram',
      'st.eyebrow': 'Como agendar', 'st.title': 'Três passos, tudo pelo WhatsApp.',
      'st.1t': 'Chame no WhatsApp', 'st.1p': 'Conte qual serviço você deseja e, se quiser, envie uma foto de referência.',
      'st.2t': 'Combinamos os detalhes', 'st.2p': 'Confirmamos dia, horário, valor e o resultado que você procura.',
      'st.3t': 'Seu atendimento', 'st.3p': 'Recebemos você em Asunción, no dia e horário combinados.',
      'of.eyebrow': 'Para novos clientes',
      'of.title': '15% de desconto no seu primeiro <em>agendamento</em>.',
      'of.text': 'Chame a Marcela no WhatsApp e mencione o desconto ao agendar.',
      'of.cta': 'Agendar pelo WhatsApp',
      'ft.privacy': 'Privacidade e cookies',
      'sticky.text': '15% para novos clientes', 'sticky.cta': 'WhatsApp',
      'cs.title': 'Privacidade',
      'cs.text': 'Usamos ferramentas de análise e mapas de calor para entender como o site é usado, em dados agregados de cliques e rolagem. Você pode recusar.',
      'cs.short': 'Usamos análise e mapas de calor para melhorar o site.',
      'cs.yes': 'Aceitar', 'cs.no': 'Recusar',
      'zoom.dialog': 'Galeria de imagens', 'zoom.close': 'Fechar',
      'zoom.prev': 'Imagem anterior', 'zoom.next': 'Próxima imagem',
      'zoom.hint': 'Toque ou clique para ampliar · arraste para mover',
      'faq.eyebrow': 'Perguntas frequentes', 'faq.title': 'Antes de agendar.',
      'faq.q1': 'O que é o molde F1 e qual a diferença para uma unha postiça?',
      'faq.a1': 'A técnica do molde F1 visa um tempo de mesa mais rápido, durabilidade, naturalidade e um acabamento fino nas pontas das unhas. Já a unha postiça vem com um formato padrão, pronta para ser colada: corre o risco de descolar no meio de um evento e deixa um aspecto artificial.',
      'faq.q2': 'Quanto tempo dura a esmaltação em gel?',
      'faq.a2': 'Em geral, de duas a três semanas, conforme o crescimento da unha e os cuidados do dia a dia.',
      'faq.q3': 'Como faço para agendar?',
      'faq.a3': 'Pelo WhatsApp. Conte qual serviço você quer e combinamos dia, horário e valor.',
      'faq.q4': 'Tem desconto para novos clientes?',
      'faq.a4': 'Sim: 15% de desconto no primeiro agendamento. Mencione ao chamar no WhatsApp.',
      'faq.q5': 'Onde é o atendimento?',
      'faq.a5': 'Em Asunción, Paraguai. Os detalhes do local são confirmados no agendamento.',
      'faq.q6': 'Vocês atendem em português?',
      'faq.a6': 'Sim. Atendemos em português e espanhol.',
      'meta.title': 'Lumar · Salão de unhas e sobrancelhas em Asunción | Técnica brasileira',
      'wa.msg': 'Olá, Marcela. Vim pelo site da Lumar e quero agendar com os 15% de desconto para novos clientes.'
    }
  };

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const byId = (id) => document.getElementById(id);

  $$('[data-i18n]').forEach((el) => { dict.es[el.dataset.i18n] = el.innerHTML; });
  $$('[data-i18n-aria]').forEach((el) => { dict.es[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  dict.es['meta.title'] = document.title;

  const storage = (name) => ({
    get: (key) => { try { return window[name].getItem(key); } catch (e) { return null; } },
    set: (key, value) => { try { window[name].setItem(key, value); } catch (e) { /* storage bloqueado */ } }
  });
  const local = storage('localStorage');
  const session = storage('sessionStorage');

  const utm = (() => {
    let saved = {};
    try { saved = JSON.parse(session.get('lumar-utm')) || {}; } catch (e) { /* sin datos previos */ }
    const query = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach((key) => {
      if (query.get(key)) saved[key] = query.get(key).slice(0, 60);
    });
    if (query.get('fbclid') && !saved.utm_source) saved.utm_source = 'meta';
    session.set('lumar-utm', JSON.stringify(saved));
    return saved;
  })();

  let lang = (() => {
    const requested = new URLSearchParams(location.search).get('lang') || local.get('lumar-lang');
    return requested === 'pt' ? 'pt' : 'es';
  })();
  let consent = local.get('lumar-consent');
  let analyticsLoaded = false;

  const t = (key) => dict[lang][key] || dict.es[key] || '';
  const waHref = () => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`${t('wa.msg')} [${utm.utm_source || 'site'}]`)}`;

  function track(name, params = {}) {
    const payload = { ...params, lang, ...utm };
    if (DEBUG) console.log('[lumar:evento]', name, payload, 'consentimiento:', consent);
    if (consent !== 'granted' || !analyticsLoaded) return;
    if (window.gtag && IDS.ga4) window.gtag('event', name, payload);
    if (window.clarity && IDS.clarity) window.clarity('event', name);
    if (window.fbq && IDS.metaPixel) {
      if (name === 'whatsapp_click') window.fbq('track', 'Contact', { content_name: payload.location || 'site' });
      if (name === 'instagram_click') window.fbq('trackCustom', 'InstagramClick', { location: payload.location || 'site' });
    }
  }

  function applyLang(next, fromUser) {
    lang = next;
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'es-PY';
    document.title = t('meta.title');
    $$('[data-i18n]').forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value) el.innerHTML = value;
    });
    $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $$('[data-lang]').forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.lang === next)));
    const href = waHref();
    $$('a[data-wa]').forEach((a) => a.setAttribute('href', href));
    byId('wa-display').textContent = CONFIG.whatsappDisplay;
    if (!fromUser) return;
    local.set('lumar-lang', next);
    track('lang_switch', { lang: next });
    if (window.clarity && consent === 'granted') window.clarity('set', 'lang', next);
  }

  function loadAnalytics() {
    if (analyticsLoaded || !HAS_ANALYTICS) return;
    analyticsLoaded = true;

    if (IDS.ga4) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(IDS.ga4)}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', IDS.ga4, { language: lang });
    }

    if (IDS.clarity) {
      window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${encodeURIComponent(IDS.clarity)}`;
      document.head.appendChild(script);
      window.clarity('set', 'lang', lang);
      if (utm.utm_source) window.clarity('set', 'utm_source', utm.utm_source);
    }

    if (IDS.metaPixel) {
      const fbq = function () { fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments); };
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      window.fbq = window._fbq = fbq;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      fbq('init', IDS.metaPixel);
      fbq('track', 'PageView');
    }
  }

  const consentBox = byId('consent');
  // Expõe a altura do banner para o hero mobile reservar espaço e manter o CTA visível
  const syncConsentHeight = () => {
    document.documentElement.style.setProperty('--consent-h', consentBox.hidden ? '0px' : `${consentBox.offsetHeight}px`);
  };
  if ('ResizeObserver' in window) new ResizeObserver(syncConsentHeight).observe(consentBox);
  const showConsent = () => { consentBox.hidden = false; document.body.classList.add('has-consent'); syncConsentHeight(); };
  const hideConsent = () => { consentBox.hidden = true; document.body.classList.remove('has-consent'); syncConsentHeight(); };

  function setConsent(value) {
    consent = value;
    local.set('lumar-consent', value);
    hideConsent();
    if (value === 'granted') loadAnalytics();
  }

  byId('consent-yes').addEventListener('click', () => setConsent('granted'));
  byId('consent-no').addEventListener('click', () => setConsent('denied'));
  byId('open-consent').addEventListener('click', showConsent);

  document.addEventListener('click', (event) => {
    const target = event.target.closest('a[data-wa], a[data-ig], button[data-lang]');
    if (!target) return;
    if (target.dataset.wa) track('whatsapp_click', { location: target.dataset.wa });
    else if (target.dataset.ig) track('instagram_click', { location: target.dataset.ig });
    else applyLang(target.dataset.lang, true);
  });

  const depths = [25, 50, 75, 100];
  const reached = new Set();
  let scrollQueued = false;
  window.addEventListener('scroll', () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      const root = document.documentElement;
      const percent = ((window.scrollY + window.innerHeight) / Math.max(root.scrollHeight, 1)) * 100;
      depths.forEach((depth) => {
        if (percent >= depth && !reached.has(depth)) {
          reached.add(depth);
          track('scroll_depth', { percent: depth });
        }
      });
    });
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const seen = new Set();
    const sections = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.dataset.section;
        if (entry.isIntersecting && !seen.has(id)) {
          seen.add(id);
          track('section_view', { section: id });
        }
      });
    }, { threshold: 0.4 });
    $$('[data-section]').forEach((section) => sections.observe(section));

    const sticky = byId('sticky');
    new IntersectionObserver(([entry]) => {
      const visible = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      sticky.classList.toggle('is-on', visible);
      sticky.setAttribute('aria-hidden', String(!visible));
      $$('a', sticky).forEach((a) => { a.tabIndex = visible ? 0 : -1; });
    }).observe(byId('top'));
  }

  const heroStage = document.querySelector('.hero__stage');
  const heroImg = byId('hero-img');
  if (heroStage && heroImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let parallaxQueued = false;
    const parallax = () => {
      parallaxQueued = false;
      const top = heroStage.getBoundingClientRect().top;
      // La imagen sobra 60px por encima del marco; el desplazamiento no pasa de eso.
      if (top > -heroStage.offsetHeight) heroImg.style.transform = `translate3d(0, ${Math.min(60, Math.max(0, -top) * 0.35)}px, 0)`;
    };
    window.addEventListener('scroll', () => {
      if (!parallaxQueued) { parallaxQueued = true; requestAnimationFrame(parallax); }
    }, { passive: true });
    parallax();
  }

  const lightbox = byId('lightbox');
  const stage = byId('lightbox-stage');
  const viewerImg = byId('lightbox-img');
  const counter = byId('lightbox-count');
  const photos = $$('a[data-zoom]');
  const MAX_SCALE = 4;
  const CLICK_SCALE = 2.5;
  const pointers = new Map();
  let current = 0;
  let scale = 1;
  let tx = 0;
  let ty = 0;
  let gesture = null;

  const photoName = () => photos[current].getAttribute('href').split('/').pop().split('?')[0];

  function render() {
    viewerImg.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
    lightbox.classList.toggle('is-zoomed', scale > 1.01);
  }

  function clampPan() {
    const maxX = Math.max(0, (viewerImg.offsetWidth * scale - stage.clientWidth) / 2);
    const maxY = Math.max(0, (viewerImg.offsetHeight * scale - stage.clientHeight) / 2);
    tx = Math.min(maxX, Math.max(-maxX, tx));
    ty = Math.min(maxY, Math.max(-maxY, ty));
  }

  function zoomAt(x, y, nextScale) {
    nextScale = Math.min(MAX_SCALE, Math.max(1, nextScale));
    if (scale <= 1.01 && nextScale > 1.01) track('image_zoom', { image: photoName() });
    const rect = viewerImg.getBoundingClientRect();
    const dx = x - (rect.left + rect.width / 2);
    const dy = y - (rect.top + rect.height / 2);
    const k = nextScale / scale;
    tx += dx - dx * k;
    ty += dy - dy * k;
    scale = nextScale;
    clampPan();
    render();
  }

  function resetZoom() {
    scale = 1; tx = 0; ty = 0;
    render();
  }

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const link = photos[current];
    viewerImg.src = link.getAttribute('href');
    viewerImg.alt = link.querySelector('img').alt;
    counter.textContent = `${current + 1} / ${photos.length}`;
    resetZoom();
    [1, -1].forEach((step) => {
      new Image().src = photos[(current + step + photos.length) % photos.length].getAttribute('href');
    });
  }

  function openPhoto(index) {
    showPhoto(index);
    lightbox.showModal();
    document.body.classList.add('is-locked');
    track('image_open', { image: photoName() });
  }

  function endPointer(event) {
    if (!pointers.has(event.pointerId)) return;
    pointers.delete(event.pointerId);
    lightbox.classList.remove('is-dragging');
    if (!gesture) return;

    if (gesture.type === 'pinch') {
      if (pointers.size === 1) {
        const [p] = pointers.values();
        gesture = { type: 'pan', x: p.x, y: p.y, tx, ty, moved: true, onImage: true };
      } else gesture = null;
      return;
    }
    if (pointers.size > 0) return;

    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (!gesture.moved) {
      if (gesture.onImage) {
        if (scale > 1.01) resetZoom();
        else zoomAt(event.clientX, event.clientY, CLICK_SCALE);
      } else if (scale <= 1.01) lightbox.close();
    } else if (scale <= 1.01 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      showPhoto(current + (dx < 0 ? 1 : -1));
    }
    gesture = null;
  }

  if (typeof lightbox.showModal === 'function') {
    photos.forEach((link, index) => {
      link.addEventListener('click', (event) => { event.preventDefault(); openPhoto(index); });
    });

    stage.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      stage.setPointerCapture(event.pointerId);
      if (pointers.size === 1) {
        gesture = { type: 'pan', x: event.clientX, y: event.clientY, tx, ty, moved: false, onImage: event.target === viewerImg };
      } else if (pointers.size === 2) {
        const [a, b] = pointers.values();
        gesture = { type: 'pinch', distance: Math.hypot(a.x - b.x, a.y - b.y), scale };
      }
    });

    stage.addEventListener('pointermove', (event) => {
      if (!pointers.has(event.pointerId) || !gesture) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (gesture.type === 'pinch' && pointers.size === 2) {
        const [a, b] = pointers.values();
        lightbox.classList.add('is-dragging');
        zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, gesture.scale * Math.hypot(a.x - b.x, a.y - b.y) / gesture.distance);
        return;
      }
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      if (!gesture.moved && Math.hypot(dx, dy) > 6) {
        gesture.moved = true;
        lightbox.classList.add('is-dragging');
      }
      if (gesture.moved && scale > 1.01) {
        tx = gesture.tx + dx;
        ty = gesture.ty + dy;
        clampPan();
        render();
      }
    });

    stage.addEventListener('pointerup', endPointer);
    stage.addEventListener('pointercancel', endPointer);

    stage.addEventListener('wheel', (event) => {
      event.preventDefault();
      zoomAt(event.clientX, event.clientY, scale * Math.exp(-event.deltaY * 0.0015));
    }, { passive: false });

    byId('lightbox-close').addEventListener('click', () => lightbox.close());
    byId('lightbox-prev').addEventListener('click', () => showPhoto(current - 1));
    byId('lightbox-next').addEventListener('click', () => showPhoto(current + 1));

    lightbox.addEventListener('keydown', (event) => {
      const center = stage.getBoundingClientRect();
      const cx = center.left + center.width / 2;
      const cy = center.top + center.height / 2;
      if (event.key === 'ArrowLeft') showPhoto(current - 1);
      else if (event.key === 'ArrowRight') showPhoto(current + 1);
      else if (event.key === '+' || event.key === '=') zoomAt(cx, cy, scale * 1.5);
      else if (event.key === '-') zoomAt(cx, cy, scale / 1.5);
    });

    lightbox.addEventListener('close', () => {
      document.body.classList.remove('is-locked');
      pointers.clear();
      gesture = null;
      resetZoom();
    });

    window.addEventListener('resize', () => { if (lightbox.open) { clampPan(); render(); } });
  }

  applyLang(lang, false);
  if (consent === 'granted') loadAnalytics();
  else if (consent !== 'denied' && (HAS_ANALYTICS || /^#privacidad/.test(location.hash))) showConsent();
})();
