import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

function Hero() {
  const targetRef = useRef(null)
  
  // Function to generate colorful backgrounds for skill bubbles
  const getSkillBubbleBackground = (index) => {
    // Array of vibrant gradients that work in both light and dark modes
    const gradients = [
      'linear-gradient(135deg, #ff6b6b, #cc2b5e)',
      'linear-gradient(135deg, #fc5c7d, #6a82fb)',
      'linear-gradient(135deg, #43cea2, #185a9d)',
      'linear-gradient(135deg, #4facfe, #00f2fe)',
      'linear-gradient(135deg, #667eea, #764ba2)',
      'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      'linear-gradient(135deg, #a18cd1, #fbc2eb)',
      'linear-gradient(135deg, #ffecd2, #fcb69f)',
      'linear-gradient(135deg, #84fab0, #8fd3f4)',
      'linear-gradient(135deg, #f093fb, #f5576c)'
    ]
    
    // Cycle through the gradients based on index
    return gradients[index % gradients.length]
  }
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // List of skills to display in bubbles
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", 
    "Next.js", "Node.js", "Express", "Tailwind CSS", 
    "Framer Motion", "MongoDB", "SQL", "Git", 
    "Redux", "GraphQL", "AWS", "Docker", "Figma", 
    "UI/UX", "Responsive Design"
  ]

  return (
    <section 
      id="home" 
      ref={targetRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background skill bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full flex items-center justify-center text-xs md:text-sm font-medium select-none shadow-lg text-card-foreground"
            style={{
              width: Math.max(120, skill.length * 10 + 40),
              height: Math.max(120, skill.length * 10 + 40),
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              // Colorful gradient backgrounds with color assigned based on skill index
              background: getSkillBubbleBackground(i),
              boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.5)`,
              border: `1px solid rgba(255, 255, 255, 0.3)`,
              color: `#fff`, // White text for better contrast against colorful backgrounds
              backdropFilter: `blur(8px)`,
              WebkitBackdropFilter: `blur(8px)`,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              zIndex: 5
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 0.8 + Math.random() * 0.4,
              opacity: 0.85 + Math.random() * 0.15, // Consistent opacity regardless of theme
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
            }}
            whileInView={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              transition: {
                x: {
                  repeat: Infinity,
                  duration: 20 + Math.random() * 10,
                  ease: "easeInOut",
                },
                y: {
                  repeat: Infinity,
                  duration: 20 + Math.random() * 10,
                  ease: "easeInOut",
                },
              }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 30 + Math.random() * 10,
                ease: "linear",
              }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transformOrigin: "center",
                fontWeight: "700", // Making text even bolder for better contrast on colorful backgrounds
                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)" // Adding text shadow for improved readability
              }}
            >
              {skill}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        style={{ y, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-primary mb-2"
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6"
        >
          Bijay Kumar Yadav.
        </motion.h1>
        
        {/* Single div for "Full Stack Developer" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block text-xl md:text-3xl font-semibold py-2 px-6 bg-primary/10 rounded-md mb-8"
        >
          Full Stack Developer
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Freelance Full Stack Developer with more than 6 months of experience specializing in the MERN stack (MongoDB, Express.js, 
          React, Node.js). Passionate about building scalable, user-friendly web applications that solve real-world problems and 
          drive business growth.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <Button 
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 px-8"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="text-lg py-6 px-8"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <ChevronDown className="w-10 h-10 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero