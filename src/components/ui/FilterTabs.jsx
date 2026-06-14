import { cn } from '@/lib/utils'

export function FilterTabs({ filters, active, onChange, className }) {
  return (
    <div className={cn('flex flex-wrap gap-2 justify-center', className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            active === filter
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white',
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
