import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import { usePageSEO } from '@/hooks/usePageSEO'
import { blogPosts, blogCategories } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FilterTabs } from '@/components/ui/FilterTabs'
import { SearchInput } from '@/components/ui/SearchInput'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/motion'

export default function Blog() {
  usePageSEO({
    title: 'Blog',
    description: 'Articles on QA, automation, testing, and career growth.',
  })

  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchFilter = filter === 'All' || post.category === filter
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      return matchFilter && matchSearch
    })
  }, [filter, search])

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Insights"
            title="Blog"
            description="Thoughts on quality engineering, test automation, and building a career in technology."
          />

          <FilterTabs
            filters={blogCategories}
            active={filter}
            onChange={setFilter}
            className="mb-8"
          />

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search articles, tags..."
            className="max-w-md mx-auto mb-14"
          />

          <motion.div
            key={filter + search}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <Card className="h-full flex flex-col group cursor-pointer">
                  <div className="h-36 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 mb-5 flex items-end p-4">
                    <Badge>{post.category}</Badge>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs text-zinc-500"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} read
                    </span>
                    <span className="text-xs text-zinc-500">{post.date}</span>
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-20">No articles found.</p>
          )}
        </div>
      </section>
    </div>
  )
}
