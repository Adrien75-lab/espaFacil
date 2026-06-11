/** Maps LinguaFacil language codes → ISO 3166-1 alpha-2 country codes for flag-icons */
const MAP: Record<string, string> = {
  es: 'es',
  en: 'gb',
  de: 'de',
  it: 'it',
  pt: 'pt',
  nl: 'nl',
  pl: 'pl',
  tr: 'tr',
  ru: 'ru',
  ja: 'jp',
  ko: 'kr',
  zh: 'cn',
  ar: 'sa',
  hi: 'in',
}

export function flagClass(langCode: string): string {
  const cc = MAP[langCode] ?? langCode
  return `fi fi-${cc}`
}
