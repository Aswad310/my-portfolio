'use client'

import { Card } from './ui/Card'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        > 
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am an experienced resource in the software industry with a keen interest in the latest technologies 
              and extensive experience in developing dynamic solutions. I enjoy learning new skills and am confident 
              in working in different challenging environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With over <strong>4 years of experience</strong> in software development and analysis, I have completed 
              a Bachelor of Computer Science from a recognized university. I have exceptional skills in system analysis, 
              problem resolution, data analysis, and data quality.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Key Expertise Areas:</h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Requirements Gathering and Analysis</li>
                <li>• Research and Algorithms</li>
                <li>• Development, Testing, and Debugging</li>
                <li>• Healthcare Management Systems</li>
                <li>• Agile Methodologies</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Bachelor of Computer Science – BSCS (4 Years)</h4>
                <p className="text-gray-600 dark:text-gray-400">PakAIMS, Lahore, Pakistan (2023)</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Recognized by H.E.C. | GPA Scholarship Recipient</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Intermediate, ICS (Physics)</h4>
                <p className="text-gray-600 dark:text-gray-400">Govt. Islamia College (GICCL), Lahore (2019)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Matriculation, Science</h4>
                <p className="text-gray-600 dark:text-gray-400">The Educators, Lahore (2017)</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-2">Certifications</h4>
              <ul className="text-gray-700 dark:text-gray-300">
                <li>• Programming Fundamentals C/C++ (3 months)</li>
                <li>• Microsoft Office Foundation (3 months)</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}