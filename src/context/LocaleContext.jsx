import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

const messages = { en, ar };
const LocaleContext = createContext(null);
const LOCALE_STORAGE_KEY = "locale";

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && messages[saved]) return saved;

    const browserLocale = window.navigator.language?.split("-")[0];
    return browserLocale && messages[browserLocale] ? browserLocale : "en";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
      languages: messages[locale].languages,
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslation() {
  return useLocale().t;
}
