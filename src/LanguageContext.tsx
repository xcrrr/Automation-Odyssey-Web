import React, { createContext, useContext, useState } from 'react';
import type { Lang } from './i18n';
import t from './i18n';

type Translations = typeof t['pl'] | typeof t['en'];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pl',
  setLang: () => {},
  tr: t.pl,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('pl');
  const tr: Translations = t[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
