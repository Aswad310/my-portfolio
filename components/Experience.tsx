'use client'

import { Card } from './ui/Card'
import { motion } from 'framer-motion'
import { Briefcase, Award } from 'lucide-react'

const experiences = [
  {
    company: 'PureLogics LLC, Pakistan',
    role: 'Software Engineer - JavaScript Developer',
    period: 'Jan 2024 - Present',
    projects: [
      'AuthorityRx – HIPAA Compliant Solution',
      'Servbetter.io – Survey Platform',
      'Codecrate – Boilerplate Management',
      'PL LMS – Learning Management System'
    ]
  },
  {
    company: 'PureLogics LLC, Pakistan',
    role: 'Associate Software Engineer - JavaScript Developer',
    period: 'Jan 2023 - Dec 2023',
    projects: [
      'Bridge18 – Smart Trucking Platform',
      'Anda Inmov – AI Chatbot',
      'UE Comix – AI Manga Generator',
      'REIStar – Real Estate Investment'
    ]
  },
  {
    company: 'PureLogics LLC, Pakistan',
    role: 'Intern Software Engineer',
    period: 'Sep 2022 - Dec 2022',
    projects: ['E-commerce Solution (Amazon Clone)']
  },
  {
    company: 'Self-Employed, Pakistan',
    role: 'JavaScript / PHP Developer',
    period: 'Jul 2021 - Aug 2022',
    projects: [
      'Library Management System',
      'Expense Tracker',
      'Food Order Web App',
      'Chatting Web App'
    ]
  }
]

const awards = [
  { title: 'Star of the Month (SOM)', date: 'July 2025', org: 'PureLogics' },
  { title: 'Star of the Month (SOM)', date: 'Nov 2024', org: 'PureLogics' },
  { title: 'Star of the Month (SOM)', date: 'Nov 2023', org: 'PureLogics' },
  { title: 'GPA Scholarship', date: '2019-2023', org: 'PakAIMS' }
]

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
          
          <div className="space-y-8 pl-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - positioned on the line at left-6 */}
                <div className="absolute -left-6 top-6 -translate-x-1/2 z-20">
                  <div className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ring-2 ring-blue-200 dark:ring-blue-600" />
                </div>
                
                {/* Content card */}
                <Card className="relative">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm self-start md:self-auto whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Projects:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.projects.map((project) => (
                        <div key={project} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            Achievements & Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <Card key={index} className="text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <h4 className="font-semibold">{award.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{award.date}</p>
                <p className="text-sm text-primary">{award.org}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}