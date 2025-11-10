'use client'

import { Card } from './ui/Card'
import { motion } from 'framer-motion'
import { 
  Code2, Database, Cloud, Shield, Smartphone, 
  Globe, GitBranch, Lock,
} from 'lucide-react'

const skillCategories = [
  {
    id: 1,
    icon: Code2,
    title: 'Programming Languages',
    skills: ['JavaScript (Strong Expertise)', 'TypeScript', 'Python', 'PHP', 'C/C++'],
    color: 'text-yellow-500'
  },
  {
    id: 2,
    icon: Globe,
    title: 'Frontend Technologies',
    skills: ['ReactJS', 'NextJS', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Bootstrap'],
    color: 'text-blue-500'
  },
  {
    id: 3,
    icon: Database,
    title: 'Database Technologies',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Microsoft SQL Server'],
    color: 'text-green-500'
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS (S3, EC2, RDS)', 'Vercel', 'Heroku', 'Netlify', 'Docker', 'CI/CD'],
    color: 'text-orange-500'
  },
  {
    id: 5,
    icon: Smartphone,
    title: 'Libraries & Tools',
    skills: ['Redux Toolkit', 'React Query', 'MUI', 'Axios', 'Zod', 'React Hook Form', 'JWT'],
    color: 'text-purple-500'
  },
  {
    id: 6,
    icon: Shield,
    title: 'Backend Frameworks',
    skills: ['ExpressJS', 'MoleculerJS', 'Laravel', 'Django/DRF', 'FastAPI', 'Flask'],
    color: 'text-red-500'
  },
  {
    id: 7,
    icon: GitBranch,
    title: 'Version Control',
    skills: ['Git', 'GitHub', 'BitBucket'],
    color: 'text-gray-600'
  },
  {
    id: 8,
    icon: Lock,
    title: 'Protocols & Services',
    skills: ['REST APIs', 'WebSockets', 'HTTP/HTTPS', 'TCP/UDP', 'SMTP', 'OAuth 2.0'],
    color: 'text-indigo-500'
  }
]

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} hoverable={true}>
              <div className="flex items-start gap-4">
                <category.icon className={`w-8 h-8 ${category.color} shrink-0`} />
                <div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))} 
        </div>
      </div>
    </section>
  )
}