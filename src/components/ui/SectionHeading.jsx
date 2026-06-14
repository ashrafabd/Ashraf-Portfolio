import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, viewportOnce } from '@/lib/motion'

export function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-14 lg:mb-16',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        align === 'left' && 'text-left max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
