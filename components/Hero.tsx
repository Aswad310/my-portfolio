'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react'
import { Button } from './ui/Button'
import DotGrid from './dotGrid/DotGrid'

const LIGHT_BASE = '#E5E7EB'
const DARK_BASE = '#271e37'
const ACTIVE_COLOR = '#155dfc';

export const Hero = () => {
  const [baseColor, setBaseColor] = useState<string>(() => {
    if (typeof window === 'undefined') return LIGHT_BASE
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return DARK_BASE
    return LIGHT_BASE
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const compute = () => {
      const stored = localStorage.getItem('theme')
      const isDark =
        stored === 'dark' ||
        (!stored && (document.documentElement.classList.contains('dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)))
      setBaseColor(isDark ? DARK_BASE : LIGHT_BASE)
    }

    const onThemeChange = () => compute()

    window.addEventListener('theme-change', onThemeChange)
    window.addEventListener('storage', onThemeChange)

    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    const mqHandler = () => compute()
    if (mql) {
      if (mql.addEventListener) mql.addEventListener('change', mqHandler)
      else mql.addListener(mqHandler)
    }

    const mo = new MutationObserver(() => compute())
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('theme-change', onThemeChange)
      window.removeEventListener('storage', onThemeChange)
      if (mql) {
        if (mql.removeEventListener) mql.removeEventListener('change', mqHandler)
        else mql.removeListener(mqHandler)
      }
      mo.disconnect()
    }
  }, [])

  const handleDownloadCV = () => {
    const fileId = '1jFPNozLUfJCEtCe8-BrSdIShsSCpdN7W'
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'Aswad-Ali-Software-Engineer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* DotGrid as full-screen background */}
      <div className="absolute inset-0 h-screen w-full z-0 pointer-events-none overflow-hidden">
        <DotGrid
          dotSize={4}
          gap={20}
          baseColor={baseColor}
          activeColor={ACTIVE_COLOR}
          proximity={380}
          shockRadius={150}
          shockStrength={5}
          resistance={1000}
          returnDuration={3}
        />
      </div>

      {/* Hero content on top */}
      <div className="relative z-10 max-w-6xl mx-auto text-center section-padding">
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
