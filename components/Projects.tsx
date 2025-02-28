"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Medical Rag Application",
    description: "A fully functional Medical Rag platform. It is a platform that connects people with the best medical experts world wide.",
    image: "/medical.png",
    demo: "https://medical-rag-application-1.vercel.app/"
  },
  {
    title: "Medical ChatBot Assistant",
    description: "A fully functional Medical ChatBot Assistant platform. It is a platform that connects people with the best medical experts world wide.",
    image: "/1.png",
    demo: "https://mfahadjbr-medical-chatbot-assistant-main-plrqms.streamlit.app/"
  },
  {
    title: "Agentia world Website",
    description: "A fully functional Agentia world platform. It is a platform that connects people with the best travel agents world wide.",
    image: "/project1.png",
    demo: "https://agentia-world-website.vercel.app/"
  },
  {
    title: "Basketball Website",
    description: "A dynamic basketball hub featuring live scores, player stats, team news, match schedules, photo galleries, and interactive fan engagement for enthusiasts.",
    image: "/project2.png",
    demo: "https://basketball-website-ten.vercel.app/"
  },
  {
    title: "AI Resume Application",
    description: "AI-powered resume builder with intelligent suggestions, ATS optimization, and professional templates for creating personalized resumes.",
    image: "/project3.png",
    demo: "https://ai-resume-builder-three-iota.vercel.app/"
  },
  {
    title: "vprimetech Website",
    description: "A fully functional vprimetech platform. It is a platform that connects people with the best tech experts world wide.",
    image: "/project4.png",
    demo: "https://vprimetech.vercel.app/"
  },
  {
    title: "Online Grocery Store Website",
    description: "A fully functional online grocery store platform.",
    image: "/project5.png",
    demo: "https://ecommerce-website-online-grocery-store-fahad.vercel.app/"
  },
  {
    title: "AI Trip Planner Application",
    description: "AI-powered trip planner with intelligent suggestions, ATS optimization, and professional templates.",
    image: "/project6.png",
    demo: "https://mfahadjbr-ai-trip-plan-website-srcproject1main-0b1pil.streamlit.app/"
  }
]

export default function Projects() {
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of my recent work showcasing innovative solutions
              and technical expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-auto text-center">
                      <Button
                        className="w-full sm:w-auto transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}