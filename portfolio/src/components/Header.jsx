import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"
import { useTheme } from "./theme-provider"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const { theme, setTheme } = useTheme()
  
  // Use theme-aware background color
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)']
  )
  const headerPadding = useTransform(
    scrollY,
    [0, 100],
    ['2rem', '1rem']
  )

  // Update header background when theme changes
  useEffect(() => {
    // Force recalculation of header background when theme changes
    headerBackground.set(scrollY.get() < 50 ? 
      'rgba(255, 255, 255, 0)' : 
      theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)'
    )
  }, [theme, headerBackground, scrollY])
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false)
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-5 h-5" /> },
    { name: 'Projects', href: '#projects', icon: <FolderOpen className="w-5 h-5" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> }
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
    <>
      <motion.header
        style={{ 
          background: headerBackground,
          padding: headerPadding
        }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm border-b border-transparent transition-colors"
        animate={{
          borderColor: scrollY.get() > 50 ? 'var(--border)' : 'transparent'
        }}
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

          {/* Mobile - only theme toggle in header */}
          <div className="md:hidden">
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
          </div>
        </div>
      </motion.header>

      {/* Floating Bottom Navbar for Mobile */}
      <motion.div 
        className="md:hidden fixed bottom-4 left-4 right-4 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.nav 
          className="bg-background/90 backdrop-blur-md rounded-full border border-border shadow-lg px-4 py-3"
        >
          <motion.ul 
            className="flex justify-between items-center"
            variants={staggeredChildren}
            initial="hidden"
            animate="show"
          >
            {navItems.map((item) => (
              <motion.li 
                key={item.name} 
                variants={child}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a 
                  href={item.href}
                  className="flex flex-col items-center justify-center text-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-xs mt-1">{item.name}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </motion.div>
    </>
  )
}

export default Header