import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    // Add event listeners for links and buttons
    const links = document.querySelectorAll('a, button')
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => setCursorVariant('hover'))
      link.addEventListener('mouseleave', () => setCursorVariant('default'))
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setCursorVariant('hover'))
        link.removeEventListener('mouseleave', () => setCursorVariant('default'))
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden md:block"
      variants={variants}
      animate={cursorVariant}
    />
  )
}

export default Cursor
