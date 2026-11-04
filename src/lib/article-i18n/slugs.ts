import type { LanguageCode } from '../locale-routing'

/** The two sections' URL slugs and each article's slug, per language. No article text, so anything may import it. */
export const SECTION_SLUGS: Partial<Record<LanguageCode, { problems: string; glossary: string }>> = {
  es: { problems: 'problemas-de-pantalla', glossary: 'glosario' },
  'pt-br': { problems: 'problemas-de-tela', glossary: 'glossario' },
  de: { problems: 'bildschirmprobleme', glossary: 'glossar' },
  fr: { problems: 'problemes-d-ecran', glossary: 'glossaire' },
  it: { problems: 'problemi-dello-schermo', glossary: 'glossario' },
  nl: { problems: 'schermproblemen', glossary: 'woordenlijst' },
  id: { problems: 'masalah-layar', glossary: 'glosarium' },
  tr: { problems: 'ekran-sorunlari', glossary: 'sozluk' },
}

const PROBLEM_KEYS = ['stuck-pixel', 'hot-pixel', 'backlight-bleed', 'ips-glow', 'screen-burn-in', 'image-retention', 'screen-flickering', 'screen-tearing', 'ghosting', 'color-banding', 'yellow-tint-on-screen'] as const
const TERM_KEYS = ['refresh-rate', 'oled-vs-lcd', 'hdr', 'resolution', 'chroma-key'] as const

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
