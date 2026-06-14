import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Card({ className, children, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn('glass-card p-6 lg:p-8', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
