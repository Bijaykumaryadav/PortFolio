import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from './ui/badge'
import Profile from "../images/Profile.jpeg"

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <Badge variant="outline" className="mb-3 text-sm">
              About me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Story</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-16 items-center mx-auto justify-between flex">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Image container with relative positioning and fixed dimensions */}
<div className="relative w-40 md:w-full border-2 border-primary aspect-[4/5] max-w-sm rounded-lg mx-auto">
  {/* Border Element */}
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ x: 20, y: 20 }}
    animate={isInView ? { x: 10, y: 10 } : { x: 20, y: 20 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  />

  {/* Image Element */}
  <div className="overflow-hidden rounded-lg relative z-10 w-full h-full">
    <img
      src={Profile}
      alt="Bijay Kumar Yadav"
      className="w-full h-full object-cover object-center rounded-lg"
    />
  </div>
</div>

            </motion.div>

            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Full Stack Developer & Technical Support
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm a full stack developer with freelance experience building
                responsive web applications and maintaining live projects. I
                currently work in technical support at Megatech in Putalisadak,
                Kathmandu, helping users and maintaining office IT systems.
              </p>
              <p className="text-muted-foreground mb-6">
                My development work includes React interfaces, REST API
                integration, and full-stack applications. My support work spans
                hardware, software, networking, and CCTV troubleshooting.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="text-muted-foreground">Bijay Kumar Yadav</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-muted-foreground">ybijayyadav468@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-muted-foreground">Kathmandu, Nepal</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </div>
              </div>

              <motion.a
                href="/BijayKumarYadav.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About