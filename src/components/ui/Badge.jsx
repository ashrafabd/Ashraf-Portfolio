import { cn } from '@/lib/utils'

export function Badge({ className, variant = 'default', children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variant === 'default' &&
          'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
        variant === 'outline' &&
          'border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400',
        className,
      )}
    >
      {children}
    </span>
  )
}
