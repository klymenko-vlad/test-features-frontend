'use client';

import { ReactNode, useEffect } from 'react';

import { Locale } from '@/i18n/config';
import { loadCatalog } from '@/i18n/utils';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

type Props = {
  children: ReactNode;
  locale: Locale;
};

export default function ClientI18nProvider({ children, locale }: Props) {
  useEffect(() => {
    loadCatalog(locale);
  }, [locale]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
