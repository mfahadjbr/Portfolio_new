"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Code2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Set theme to system by default
    if (!theme || theme === 'system') {
      setTheme('system')
    }
    setMounted(true)
  }, [theme, setTheme])

  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Resume']

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b"
    > 
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="h-8 w-8" />
            <span className="text-xl font-bold">Portfolio</span>
          </motion.div>

          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
            <Button onClick={handleContactClick}>Contact Me</Button>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header