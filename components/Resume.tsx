"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const workExperience = [
  {
    title: "Senior Developer",
    company: "Tech Co.",
    period: "2024-Present",
    description: "Led development of enterprise applications, mentored junior developers, and implemented best practices."
  },
  {
    title: "Full Stack Developer",
    company: "Web Solutions Inc.",
    period: "2022-2024",
    description: "Developed and maintained multiple client projects using modern web technologies."
  },
  {
    title: "Junior Developer",
    company: "StartUp XYZ",
    period: "2021-2022",
    description: "Collaborated on frontend development and learned industry best practices."
  }
]

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "University of Technology",
    period: "2029-2030",
    description: "Specialized in Software Engineering and Artificial Intelligence"
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "Air University",
    period: "2024-2028",
    description: "I am currently in my third semester at Air University, pursuing a degree in Artificial Intelligence."
  }
]

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              A detailed overview of my professional journey and educational background.
            </p>
            <Button asChild className="inline-flex items-center gap-2">
              <Link href="https://drive.google.com/file/d/1mqdH2MvuyCf2sB6DORftDbX4QVkP1dld/view?usp=drive_link" target="_blank">
              Check Out My CV
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={containerVariants}>
              <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold">{job.title}</h4>
                          <span className="text-sm text-muted-foreground">{job.period}</span>
                        </div>
                        <p className="text-primary mb-2">{job.company}</p>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold">{edu.degree}</h4>
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                        </div>
                        <p className="text-primary mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}