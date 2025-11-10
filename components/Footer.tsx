import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/aswadali310" target="_blank" rel="noopener noreferrer" 
             className="hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/aswadali310" target="_blank" rel="noopener noreferrer"
             className="hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:aswadali310@gmail.com" 
             className="hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400">
          Built with <Heart className="inline w-4 h-4 text-red-500" /> and modern web technologies
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © 2025 Aswad Ali. All rights reserved.
        </p>
      </div>
    </footer>
  )
}