'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, FolderOpen } from 'lucide-react'

const projects = [
  {
    title: 'AuthorityRx',
    description: 'HIPAA-compliant platform simplifying claim management for 340B programs with AI-powered chatbot and automated claim verification.',
    technologies: ['ReactJS', 'Redux Toolkit', 'MUI', 'AWS S3', 'CI/CD'],
    link: 'https://authorityrx.com/',
    type: 'Production'
  },
  {
    title: 'Servbetter.io',
    description: 'Customer engagement survey platform with real-time feedback collection, trend analysis, and actionable insights.',
    technologies: ['React', 'Laravel', 'MySQL', 'Stripe', 'AWS'],
    link: 'https://servbetter.io/',
    type: 'Production'
  },
  {
    title: 'Bridge18',
    description: 'Smart trucking platform streamlining dispatch operations and minimizing administrative overhead.',
    technologies: ['ReactJS', 'NodeJS', 'Express', 'MySQL', 'AWS'],
    link: 'https://www.bridge18.com/',
    type: 'Production'
  },
  {
    title: 'UE Comix',
    description: 'AI-powered web app transforming text prompts into manga comic panels with collaborative features.',
    technologies: ['ReactJS', 'GPT-4', 'Stripe', 'Google OAuth', 'AWS'],
    link: 'https://uecomix.ai/',
    type: 'Production'
  },
  {
    title: 'Anda Inmov',
    description: 'AI chatbot enabling seamless PDF/document interaction with GPT-4 powered responses.',
    technologies: ['ReactJS', 'OpenAI GPT-4', 'AWS S3', 'MUI'],
    link: 'https://andaafiliados.com/',
    type: 'Production'
  },
  {
    title: 'REIStar',
    description: 'Real estate investment platform for foreclosure property management with web and mobile support.',
    technologies: ['PHP/Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    link: 'https://www.reistar.com/',
    type: 'Production'
  },
  {
    title: 'Codecrate',
    description: 'Boilerplate management system enhancing code reusability across tech stacks.',
    technologies: ['ReactJS', 'Redux', 'MUI', 'AWS', 'CI/CD'],
    type: 'Internal Tool'
  },
  {
    title: 'PL LMS',
    description: 'Scalable learning management system built on Moodle with custom plugin integrations.',
    technologies: ['Moodle', 'PHP', 'HTML5', 'CSS3', 'Google OAuth'],
    link: 'https://lms.purelogics.com/',
    type: 'Production'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-4">
                <FolderOpen className="w-10 h-10 text-primary" />
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.type === 'Production' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-blue-600 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <a
                  href="#"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}