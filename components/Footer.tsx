"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mfahadjbr/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              {/* <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a> */}
            </div>
          </div>

          <div className="text-right">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-primary"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4" />
            </motion.button>
            <p className="mt-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer