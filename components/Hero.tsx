'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react'
import { Button } from './ui/Button'

export const Hero = () => {
  const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = '/Aswad-Ali-Software-Engineer.pdf'
    link.download = 'Aswad-Ali-Software-Engineer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-linear-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Aswad Ali
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-3xl text-primary mb-6"
        >
          Software Engineer - JavaScript Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+92 302 5390916</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>aswadali310@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Lahore, Pakistan</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Experienced Software Engineer with 4+ years of expertise in crafting dynamic, scalable solutions.
          Specialized in JavaScript ecosystem with proven track record in Healthcare, Real Estate, and E-commerce domains.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button onClick={handleDownloadCV}>
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
          <Button variant="outline" href="#projects">
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/aswadali310" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/aswadali310" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:aswadali310@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
