import { useEffect } from 'react'
import { siteConfig } from '@/data/portfolio'

export function usePageSEO({ title, description } = {}) {
  useEffect(() => {
    document.title = title
      ? `${title} · ${siteConfig.name}`
      : siteConfig.seo.defaultTitle

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description || siteConfig.seo.defaultDescription)
    }
  }, [title, description])
}
