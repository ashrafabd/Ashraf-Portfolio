import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
        <span className="text-zinc-500 dark:text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
        />
      </div>
    </div>
  )
}

export function StatCard({ label, value, className }) {
  return (
    <div
      className={cn(
        'glass-card p-6 lg:p-8 text-center group hover:border-indigo-500/30 transition-colors',
        className,
      )}
    >
      <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-gradient font-display">
        {value}
      </p>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{label}</p>
    </div>
  )
}
