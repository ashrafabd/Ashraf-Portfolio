import { useEffect } from "react";
import { useTranslation } from "@/context/LocaleContext";
import { siteConfig } from "@/data/portfolio";

export function usePageSEO({ title, description } = {}) {
  const t = useTranslation();

  useEffect(() => {
    document.title = title
      ? `${title} · ${t.site.name}`
      : t.seo.defaultTitle || siteConfig.seo.defaultTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        description ||
          t.seo.defaultDescription ||
          siteConfig.seo.defaultDescription,
      );
    }
  }, [title, description, t]);
}
