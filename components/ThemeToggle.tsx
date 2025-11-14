'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    setTheme(stored)
    document.documentElement.classList.toggle('dark', stored === 'dark')
    // notify other components in this window about the current theme
    try {
      window.dispatchEvent(new CustomEvent('theme-change', { detail: stored }))
    } catch (e) {
      console.log(e)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    // dispatch a theme-change event so in-page components can react immediately
    try {
      window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  )
}