import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from './ui/badge'
import { CalendarDays, MapPin, BriefcaseIcon, GraduationCap } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const workExperience = [
    {
      id: 1,
      title: "Freelance Full Stack Developer",
      company: "Self-employed",
      location: "Remote",
      period: "July 2024 - Present",
      description: "Providing comprehensive full stack development services for various clients across industries. Delivering end-to-end solutions focusing on responsive design, robust backend architecture, and exceptional user experiences.",
      highlights: [
        "Developed custom web applications with React frontend and Node.js backend",
        "Created scalable database solutions using MongoDB and PostgreSQL",
        "Implemented CI/CD pipelines for automated testing and deployment"
      ]
    }
  ]
  
  const education = [
    {
      id: 1,
      degree: "Computer Science Engineering",
      institution: "Bangalore Technological Institute",
      location: "ChikkanayaKanahalli,Off-Sarjapura Road Bangalore",
      period: "2021 - 2025",
      description: "Focused on web development and interactive media. Minor in Design Studies.",
      highlights: [
        "Graduated cum laude with 8.6 CGPA",
        "Doing Freelancing",
        "Completed internship at tech company"
      ]
    },
    {
      id: 2,
      degree: "12th in Computer Science",
      institution: "Kantipur Secondary School",
      location: "Inaruwa",
      period: "2018 - 2020",
      description: "",
      highlights: [
        "Completed +2 with 83%",
      ]
    }
  ]
  
  return (
    <section id="experience" className="py-20 md:py-32">
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
            <Badge variant="outline" className="mb-3 text-sm">My journey</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience & Education</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey and educational background that has shaped
              my expertise in full stack development.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="work" className="w-full">
              <TabsList className="grid grid-cols-2 w-64 mx-auto mb-12">
                <TabsTrigger value="work" className="flex items-center gap-2">
                  <BriefcaseIcon className="w-4 h-4" /> Work
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Education
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="work" className="mt-0">
                <div className="relative border-l-2 border-muted-foreground/20 pl-8 ml-4">
                  {workExperience.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                      className="mb-12 relative"
                    >
                      <div className="absolute -left-12 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                      
                      <div className="bg-card border border-border p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                            <CalendarDays className="mr-1 h-3 w-3" /> {job.period}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center text-muted-foreground mb-4">
                          <span className="mr-4">{job.company}</span>
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" /> {job.location}
                          </span>
                        </div>
                        
                        <p className="mb-4 text-muted-foreground">{job.description}</p>
                        
                        <ul className="space-y-2">
                          {job.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education" className="mt-0">
                <div className="relative border-l-2 border-muted-foreground/20 pl-8 ml-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                      className="mb-12 relative"
                    >
                      <div className="absolute -left-12 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                      
                      <div className="bg-card border border-border p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                            <CalendarDays className="mr-1 h-3 w-3" /> {edu.period}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center text-muted-foreground mb-4">
                          <span className="mr-4">{edu.institution}</span>
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" /> {edu.location}
                          </span>
                        </div>
                        
                        <p className="mb-4 text-muted-foreground">{edu.description}</p>
                        
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience