import { i18n } from '@lingui/core';

import { Locale } from './config';

export async function loadCatalog(locale: Locale) {
  const { messages } = await import(`../../locales/${locale}/messages.mjs`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export function setupI18n(locale: Locale) {
  loadCatalog(locale);
  return i18n;
}
