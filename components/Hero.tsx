"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer" , "UI/UX Designer"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const role = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen pt-20 mt-20 sm:pt-0 px-4">
      <div className="container mx-auto px-4 h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Fahad Jabbar</span>
            </h1>
            <div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
            Building scalable and seamless web solutions with expertise in frontend and backend development
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={scrollToProjects}>View My Work</Button>
              <Link href="https://drive.google.com/file/d/1mqdH2MvuyCf2sB6DORftDbX4QVkP1dld/view?usp=drive_link" target="_blank">
              <Button size="lg" variant="outline">Check Out My CV</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Image
                width={500}
                height={500}
                src="/image.png"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"
              style={{ transform: "translateZ(-50px)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}