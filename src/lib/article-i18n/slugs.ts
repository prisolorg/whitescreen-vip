import type { LanguageCode } from '../locale-routing'

/** The three sections' URL slugs and each article's slug, per language. No article text, so anything may import it. */
export const SECTION_SLUGS: Partial<Record<LanguageCode, { problems: string; glossary: string; backgrounds: string }>> = {
  es: { problems: 'problemas-de-pantalla', glossary: 'glosario', backgrounds: 'fondos' },
  'pt-br': { problems: 'problemas-de-tela', glossary: 'glossario', backgrounds: 'fundos' },
  de: { problems: 'bildschirmprobleme', glossary: 'glossar', backgrounds: 'hintergruende' },
  fr: { problems: 'problemes-d-ecran', glossary: 'glossaire', backgrounds: 'fonds' },
  it: { problems: 'problemi-dello-schermo', glossary: 'glossario', backgrounds: 'sfondi' },
  nl: { problems: 'schermproblemen', glossary: 'woordenlijst', backgrounds: 'achtergronden' },
  id: { problems: 'masalah-layar', glossary: 'glosarium', backgrounds: 'latar-belakang' },
  tr: { problems: 'ekran-sorunlari', glossary: 'sozluk', backgrounds: 'arka-planlar' },
}

const PROBLEM_KEYS = ['stuck-pixel', 'hot-pixel', 'backlight-bleed', 'ips-glow', 'screen-burn-in', 'image-retention', 'screen-flickering', 'screen-tearing', 'ghosting', 'color-banding', 'yellow-tint-on-screen'] as const
const TERM_KEYS = ['refresh-rate', 'oled-vs-lcd', 'hdr', 'resolution', 'chroma-key'] as const

const BACKGROUND_KEYS = ['white-background', 'black-background', 'orange-background', 'gradient-background', 'neon-background', 'red-background', 'yellow-background', 'blue-background', 'green-screen-background', 'virtual-office', 'graph-paper', 'pink-background', 'green-background', 'purple-background', 'dark-background', 'gold-background', 'aesthetic-background', 'beige-background', 'pastel-background'] as const

const zip = (keys: readonly string[], values: readonly string[]) => Object.fromEntries(keys.map((key, index) => [key, values[index]]))

export const PROBLEM_SLUGS: Partial<Record<LanguageCode, Record<string, string>>> = {
  es: /* @__PURE__ */ zip(PROBLEM_KEYS, ['pixel-atascado', 'pixel-caliente', 'fuga-de-retroiluminacion', 'brillo-ips', 'quemado-de-pantalla', 'retencion-de-imagen', 'parpadeo-de-pantalla', 'tearing-de-pantalla', 'ghosting-de-monitor', 'bandas-de-color', 'pantalla-amarillenta']),
  'pt-br': /* @__PURE__ */ zip(PROBLEM_KEYS, ['pixel-travado', 'pixel-quente', 'vazamento-de-luz', 'brilho-ips', 'burn-in-de-tela', 'retencao-de-imagem', 'cintilacao-da-tela', 'tearing-da-tela', 'ghosting-de-monitor', 'faixas-de-cor', 'tela-amarelada']),
  de: /* @__PURE__ */ zip(PROBLEM_KEYS, ['haengender-pixel', 'heisser-pixel', 'backlight-bleeding', 'ips-glow', 'einbrennen', 'bildnachleuchten', 'bildschirmflackern', 'screen-tearing', 'monitor-ghosting', 'color-banding', 'gelbstich']),
  fr: /* @__PURE__ */ zip(PROBLEM_KEYS, ['pixel-bloque', 'pixel-chaud', 'fuites-de-retroeclairage', 'halo-ips', 'marquage-d-ecran', 'remanence-d-image', 'scintillement-d-ecran', 'tearing-d-ecran', 'ghosting-d-ecran', 'banding-de-couleur', 'ecran-jauni']),
  it: /* @__PURE__ */ zip(PROBLEM_KEYS, ['pixel-bloccato', 'pixel-caldo', 'backlight-bleed', 'ips-glow', 'burn-in-dello-schermo', 'ritenzione-dell-immagine', 'sfarfallio-dello-schermo', 'tearing-dello-schermo', 'ghosting-del-monitor', 'bande-di-colore', 'schermo-giallognolo']),
  nl: /* @__PURE__ */ zip(PROBLEM_KEYS, ['vastzittende-pixel', 'hete-pixel', 'backlight-bleed', 'ips-glow', 'inbranden', 'beeldretentie', 'schermflikkering', 'screen-tearing', 'monitorghosting', 'color-banding', 'gele-zweem']),
  id: /* @__PURE__ */ zip(PROBLEM_KEYS, ['piksel-macet', 'piksel-panas', 'backlight-bleed', 'ips-glow', 'burn-in-layar', 'retensi-gambar', 'layar-berkedip', 'screen-tearing', 'ghosting-monitor', 'color-banding', 'layar-kekuningan']),
  tr: /* @__PURE__ */ zip(PROBLEM_KEYS, ['takili-piksel', 'sicak-piksel', 'arka-isik-sizintisi', 'ips-parlamasi', 'ekran-yanmasi', 'goruntu-kalintisi', 'ekran-titremesi', 'ekran-yirtilmasi', 'monitor-golgelenmesi', 'renk-bantlanmasi', 'ekranda-sari-ton']),
}

export const TERM_SLUGS: Partial<Record<LanguageCode, Record<string, string>>> = {
  es: /* @__PURE__ */ zip(TERM_KEYS, ['frecuencia-de-actualizacion', 'oled-vs-lcd', 'hdr', 'resolucion', 'chroma-key']),
  'pt-br': /* @__PURE__ */ zip(TERM_KEYS, ['taxa-de-atualizacao', 'oled-vs-lcd', 'hdr', 'resolucao', 'chroma-key']),
  de: /* @__PURE__ */ zip(TERM_KEYS, ['bildwiederholrate', 'oled-vs-lcd', 'hdr', 'aufloesung', 'chroma-key']),
  fr: /* @__PURE__ */ zip(TERM_KEYS, ['taux-de-rafraichissement', 'oled-vs-lcd', 'hdr', 'resolution', 'chroma-key']),
  it: /* @__PURE__ */ zip(TERM_KEYS, ['frequenza-di-aggiornamento', 'oled-vs-lcd', 'hdr', 'risoluzione', 'chroma-key']),
  nl: /* @__PURE__ */ zip(TERM_KEYS, ['verversingssnelheid', 'oled-vs-lcd', 'hdr', 'resolutie', 'chroma-key']),
  id: /* @__PURE__ */ zip(TERM_KEYS, ['refresh-rate', 'oled-vs-lcd', 'hdr', 'resolusi', 'chroma-key']),
  tr: /* @__PURE__ */ zip(TERM_KEYS, ['yenileme-hizi', 'oled-ve-lcd', 'hdr', 'cozunurluk', 'chroma-key']),
}

export const BACKGROUND_SLUGS: Partial<Record<LanguageCode, Record<string, string>>> = {
  es: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['fondo-blanco', 'fondo-negro', 'fondo-naranja', 'fondo-degradado', 'fondo-neon', 'fondo-rojo', 'fondo-amarillo', 'fondo-azul', 'fondo-de-pantalla-verde', 'fondo-de-oficina-virtual', 'fondo-de-papel-cuadriculado', 'fondo-rosa', 'fondo-verde', 'fondo-morado', 'fondo-oscuro', 'fondo-dorado', 'fondo-estetico', 'fondo-beis', 'fondo-pastel']),
  'pt-br': /* @__PURE__ */ zip(BACKGROUND_KEYS, ['fundo-branco', 'fundo-preto', 'fundo-laranja', 'fundo-em-degrade', 'fundo-neon', 'fundo-vermelho', 'fundo-amarelo', 'fundo-azul', 'fundo-de-tela-verde', 'fundo-de-escritorio-virtual', 'fundo-de-papel-quadriculado', 'fundo-rosa', 'fundo-verde', 'fundo-roxo', 'fundo-escuro', 'fundo-dourado', 'fundo-estetico', 'fundo-bege', 'fundo-pastel']),
  de: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['weisser-hintergrund', 'schwarzer-hintergrund', 'oranger-hintergrund', 'verlaufshintergrund', 'neon-hintergrund', 'roter-hintergrund', 'gelber-hintergrund', 'blauer-hintergrund', 'greenscreen-hintergrund', 'virtueller-buero-hintergrund', 'karopapier-hintergrund', 'rosa-hintergrund', 'gruener-hintergrund', 'lila-hintergrund', 'dunkler-hintergrund', 'goldener-hintergrund', 'aesthetischer-hintergrund', 'beiger-hintergrund', 'pastell-hintergrund']),
  fr: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['fond-blanc', 'fond-noir', 'fond-orange', 'fond-degrade', 'fond-neon', 'fond-rouge', 'fond-jaune', 'fond-bleu', 'fond-d-ecran-vert', 'fond-de-bureau-virtuel', 'fond-de-papier-quadrille', 'fond-rose', 'fond-vert', 'fond-violet', 'fond-sombre', 'fond-dore', 'fond-esthetique', 'fond-beige', 'fond-pastel']),
  it: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['sfondo-bianco', 'sfondo-nero', 'sfondo-arancione', 'sfondo-sfumato', 'sfondo-neon', 'sfondo-rosso', 'sfondo-giallo', 'sfondo-blu', 'sfondo-green-screen', 'sfondo-ufficio-virtuale', 'sfondo-carta-a-quadretti', 'sfondo-rosa', 'sfondo-verde', 'sfondo-viola', 'sfondo-scuro', 'sfondo-dorato', 'sfondo-estetico', 'sfondo-beige', 'sfondo-pastello']),
  nl: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['witte-achtergrond', 'zwarte-achtergrond', 'oranje-achtergrond', 'verloopachtergrond', 'neonachtergrond', 'rode-achtergrond', 'gele-achtergrond', 'blauwe-achtergrond', 'greenscreen-achtergrond', 'virtuele-kantoorachtergrond', 'ruitjespapierachtergrond', 'roze-achtergrond', 'groene-achtergrond', 'paarse-achtergrond', 'donkere-achtergrond', 'gouden-achtergrond', 'esthetische-achtergrond', 'beige-achtergrond', 'pastel-achtergrond']),
  id: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['putih', 'hitam', 'oranye', 'gradien', 'neon', 'merah', 'kuning', 'biru', 'green-screen', 'kantor-virtual', 'kertas-grafik', 'merah-muda', 'hijau', 'ungu', 'gelap', 'emas', 'estetik', 'krem', 'pastel']),
  tr: /* @__PURE__ */ zip(BACKGROUND_KEYS, ['beyaz-arka-plan', 'siyah-arka-plan', 'turuncu-arka-plan', 'gradyan-arka-plan', 'neon-arka-plan', 'kirmizi-arka-plan', 'sari-arka-plan', 'mavi-arka-plan', 'yesil-ekran-arka-plani', 'sanal-ofis-arka-plani', 'kareli-kagit-arka-plani', 'pembe-arka-plan', 'yesil-arka-plan', 'mor-arka-plan', 'koyu-arka-plan', 'altin-arka-plan', 'estetik-arka-plan', 'bej-arka-plan', 'pastel-arka-plan']),
}
