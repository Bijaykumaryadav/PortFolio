import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const { theme, setTheme } = useTheme()
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  )
  const headerPadding = useTransform(
    scrollY,
    [0, 100],
    ['2rem', '1rem']
  )

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false)
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const staggeredChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const child = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.header
      style={{ 
        background: headerBackground,
        padding: headerPadding
      }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <a href="#home" className="text-primary">DevPortfolio</a>
        </motion.div>

        {/* Desktop Navigation with Theme Toggle */}
        <motion.nav 
          className="hidden md:flex items-center"
          initial="hidden"
          animate="show"
          variants={staggeredChildren}
        >
          <ul className="flex space-x-8 mr-6">
            {navItems.map((item) => (
              <motion.li key={item.name} variants={child}>
                <a 
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Theme Toggle */}
          <motion.div variants={child}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-background border border-border p-2 rounded-full"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.nav>

        {/* Mobile Navigation Toggle and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle for Mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-background border border-border p-2 rounded-full z-50"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: theme === "dark" ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </motion.div>
          </motion.button>
          
          {/* Hamburger Menu */}
          <motion.div 
            className="cursor-pointer z-50"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-8 flex flex-col space-y-1.5">
              <motion.span 
                animate={{ 
                  rotateZ: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0
                }}
                className="w-full h-0.5 bg-foreground block"
              />
              <motion.span 
                animate={{ 
                  opacity: isOpen ? 0 : 1
                }}
                className="w-full h-0.5 bg-foreground block"
              />
              <motion.span 
                animate={{ 
                  rotateZ: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0
                }}
                className="w-full h-0.5 bg-foreground block"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className="flex justify-center items-center h-full"
                variants={staggeredChildren}
                initial="hidden"
                animate="show"
              >
                <ul className="space-y-6 text-center">
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.name} 
                      variants={child}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href={item.href}
                        className="text-foreground text-2xl font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header