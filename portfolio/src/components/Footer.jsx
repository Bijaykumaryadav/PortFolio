import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Designed And Developed By</h2>
            <h6 className="text-md">Bijay Kumar Yadav</h6>
            <p className="text-muted-foreground text-md">(Full Stack Developer)</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            <motion.a
              href="#top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary/10 text-primary"
            >
              <ChevronUp className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Bijay Kumar Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;