import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/themeProvider"
import { Navbar } from './components/navbar'
import { Home } from './pages/home'
import { About } from './pages/about'
import { ProjectsPage } from './pages/project'
import { Contact } from './pages/contact'
import { ParticlesBackground } from './components/particleBackground'
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground relative">
          <ParticlesBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {showScrollTop && (
            <Button
              className="fixed bottom-8 right-8 rounded-full p-2"
              onClick={scrollToTop}
              size="icon"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          )}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

