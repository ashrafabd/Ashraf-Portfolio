import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { LoadingScreen } from './LoadingScreen'

export function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col noise-bg">
      <LoadingScreen />
      <Header />
      <main className="flex-1 pt-16 lg:pt-18">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
