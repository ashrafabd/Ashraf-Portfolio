import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { Layout } from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Experience from '@/pages/Experience'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import Certifications from '@/pages/Certifications'
import Courses from '@/pages/Courses'
import Awards from '@/pages/Awards'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/Ashraf-Portfolio/">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="courses" element={<Courses />} />
            <Route path="awards" element={<Awards />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
