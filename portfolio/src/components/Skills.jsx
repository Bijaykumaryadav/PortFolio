import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from './ui/badge'
import { 
  Code, 
  Layers, 
  Palette, 
  GitBranch, 
  Smartphone, 
  FastForward,
  Database,
  Server
} from 'lucide-react'

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React/RTK", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Tailwind CSS/Shad cn", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js/Express.js", level: 90 },
        { name: "REST API Design", level: 85 },
        { name: "Authentication/JWT", level: 90 },
        { name: "SMTP/Nodemailer", level: 80 },
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "SQL", level: 80 },
        { name: "AWS S3/Cloudinary", level: 85 },
      ]
    },
    {
      title: "UI Design & Animation",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Framer Motion", level: 85 },
        { name: "Tailwind animate", level: 80 },
        { name: "Figma", level: 75 },
        { name: "UI/UX Principles", level: 85 },
      ]
    },
    {
      title: "Architecture & Tools",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "State Management", level: 85 },
        { name: "API Integration", level: 90 },
        { name: "Performance Optimization", level: 80 },
        { name: "Testing (Jest, RTL)", level: 75 },
      ]
    },
    {
      title: "Version Control & API",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Code Reviews", level: 85 },
        { name: "Agile Methodologies", level: 80 },
      ]
    },
    {
      title: "Responsive & Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "Mobile-First Approach", level: 90 },
        { name: "Progressive Web Apps", level: 85 },
        { name: "Cross-Browser Compatibility", level: 90 },
      ]
    },
    {
      title: "Modern Technologies",
      icon: <FastForward className="w-6 h-6" />,
      skills: [
        { name: "Payment Integration", level: 85 },
        { name: "OAuth 2.0", level: 85 },
        { name: "Serverless Functions", level: 80 },
        { name: "Headless CMS", level: 75 },
      ]
    }
  ]
  
  return (
    <section id="skills" className="py-20 md:py-32">
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
            <Badge variant="outline" className="mb-3 text-sm">My skills</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              My technical toolkit is constantly evolving as a MERN stack developer. Here are the technologies and skills 
              I've mastered to build exceptional full-stack digital experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-6 transition-all hover:shadow-md hover:border-primary/40"
              >
                <div className="flex items-center mb-5">
                  <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 + 0.1 * skillIndex + 0.1 * index }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills