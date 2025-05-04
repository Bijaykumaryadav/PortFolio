import { useState, useEffect } from 'react' 
import { motion, AnimatePresence } from 'framer-motion' 
import Header from './components/Header' 
import Hero from './components/Hero' 
import About from './components/About' 
import Skills from './components/Skills' 
import Projects from './components/Projects' 
import Experience from './components/Experience' 
import Contact from './components/Contact' 
import Footer from './components/Footer' 
import Cursor from './components/Cursor' 
import PreLoader from './components/PreLoader' 

function App() {
  const [loading, setLoading] = useState(true)
   
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
   
  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <PreLoader key="preloader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            <Cursor />
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App