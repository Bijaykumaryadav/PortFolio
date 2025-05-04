import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Badge } from './ui/badge'
import { ExternalLink, Github, Maximize } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import Ecommerce from "../images/Ecommerce.png";
import FitChain from "../images/FitChain.png";
import Carebot from "../images/CareBot.png";
import CoffeeSaas from "../images/CoffeeSaas.png";
import Cms from "../images/Cms.png";
import ChatApp from "../images/ChatApp.png";
import CyberNinja from "../images/CyberNinja.png";

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.",
      image: Ecommerce,
      tags: ["React", "JavaScript", "RTK", "Shad CN"],
      category: "web",
      demoLink: "https://ecommerce-brg8.onrender.com/",
      githubLink: "https://github.com/Bijaykumaryadav/ECOMMERCE",
      features: [
        "Real-time sales analytics",
        "Admin role management",
        "Order processing workflow",
        "User role management",
        "Paypal Payment Integration"
      ]
    },
    {
      id: 2,
      title: "FitChain WebApp",
      description: "A modern Fitness app for personalized video workout along with subscription(stripe).",
      image: FitChain,
      tags: ["RTK", "Firebase", "AWS", "Stripe"],
      category: "web",
      demoLink: "https://app.lagreeontheroad.com/",
      githubLink: "https://github.com/krishnamahto021/fitness-app",
      features: [
        "Interactive destination maps",
        "Booking and reservation system",
        "Payment integration with Stripe",
        "User reviews and ratings",
        "Responsive across all devices"
      ]
    },
    {
      id: 3,
      title: "CareBot AI",
      description: "A CareBot is which diagnose the disease and appointment of doctor and made appointment for family as a user.Three level management:user,superuser,admin",
      image: Carebot,
      tags: ["RTK", "Shad CN", "Firebase", "Stripe","Claude Api"],
      category: "web",
      demoLink: "https://carebot-ai-brown.vercel.app/",
      githubLink: "https://github.com/krishnamahto021/carebot",
      features: [
        "Personalized workout plans",
        "Progress tracking with charts",
        "Social sharing capabilities",
        "Integration with health devices",
        "Offline support"
      ]
    },
    {
      id: 4,
      title: "Coffee Saas App",
      description: "A headless CMS with a user-friendly interface, markdown support, and flexible content modeling.",
      image: CoffeeSaas,
      tags: ["React", "Node.js", "RTK", "MongoDB","Stripe","Paypal","Canava"],
      category: "web",
      demoLink: "https://coffee-liart-ten.vercel.app/auth",
      githubLink: "https://github.com/Coffee-Web-Saas/frontend",
      features: [
        "Drag-and-drop content builder",
        "Rich text editor with markdown",
        "Content versioning and scheduling",
        "Flexible content modeling",
        "API access control"
      ]
    },
    {
      id: 5,
      title: "Real Time Chat Application",
      description: "A customizable portfolio template for developers and designers with smooth animations and dark mode support.",
      image: ChatApp,
      tags: ["Socket.io", "React", "Nodejs", "Mongodb"],
      category: "web",
      demoLink: "https://chatapp-v2-3.onrender.com/",
      githubLink: "https://github.com/Bijaykumaryadav/ChatApp-V2",
      features: [
        "Customizable sections and themes",
        "Advanced animations and transitions",
        "Dark mode support",
        "SEO optimized",
        "Contact form integration"
      ]
    },
    {
      id: 6,
      title: "College Management System",
      description: "A collaborative task management tool with drag-and-drop interfaces, time tracking, and team collaboration features.",
      image: Cms,
      tags: ["React", "Nodejs", "Chartjs", "Styled-components","MongoDB"],
      category: "web",
      demoLink: "https://bticlz.onrender.com/",
      githubLink: "https://github.com/Bijaykumaryadav/College_management_system",
      features: [
        "Kanban board with drag-and-drop",
        "Real-time collaboration",
        "Time tracking and reporting",
        "Integration with calendar",
        "Notification system"
      ]
    },
        {
      id: 7,
      title: "Course Selling Platform",
      description: "A comprehensive online learning platform allowing instructors to create and sell courses with interactive content, quizzes, and certification.",
      image: CyberNinja,
      tags: ["React", "Tailwind css"],
      category: "dashboard",
      demoLink: "https://mycyberninja.vercel.app/",
      githubLink: "https://github.com/Bijaykumaryadav/course-platform",
      features: [
        "Course creation and management",
        "Video lectures with playback controls",
        "Interactive quizzes and assessments",
        "Progress tracking for students",
        "Instructor analytics dashboard"
      ]
    }
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'dashboard', label: 'Dashboards' },
  ]
  
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Badge variant="outline" className="mb-3 text-sm">My work</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Explore my latest projects showcasing my expertise in UI development, 
              animations, and interactive experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted-foreground/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-card border border-border rounded-lg overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary rounded-full text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card border border-border rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <Dialog>
                        <DialogTrigger asChild>
                          <motion.button
                            onClick={() => setSelectedProject(project)}
                            className="p-3 bg-card border border-border rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Maximize className="w-5 h-5" />
                          </motion.button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <img 
                                src={selectedProject?.image || project.image} 
                                alt={selectedProject?.title || project.title} 
                                className="w-full h-auto rounded-lg"
                              />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold mb-2">
                                {selectedProject?.title || project.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {selectedProject?.description || project.description}
                              </p>
                              <div className="mb-4">
                                <h4 className="font-semibold mb-2">Features:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                  {(selectedProject?.features || project.features).map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {(selectedProject?.tags || project.tags).map((tag) => (
                                  <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                              </div>
                              <div className="flex gap-4">
                                <a 
                                  href={selectedProject?.demoLink || project.demoLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2 text-sm"
                                >
                                  <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a 
                                  href={selectedProject?.githubLink || project.githubLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-card border border-border px-4 py-2 rounded-md flex items-center gap-2 text-sm"
                                >
                                  <Github className="w-4 h-4" /> View Code
                                </a>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">+{project.tags.length - 3}</Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects