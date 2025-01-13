"use client"

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git and Version Control",
  "System Design and Architecture",
  "AWS (EC2, S3, Lambda, EKS)",
  "AI and Machine Learning",
  "Cloud Infrastructure and Deployment",
  "Application Development and Scaling",
  "API Design (RESTful and GraphQL)",
  "Microservices Architecture",
  "Continuous Integration/Continuous Deployment (CI/CD)",
  "Performance Optimization and Scaling",
  "Algorithms and Data Structures",
  "Dynamic Programming",
  "Tree and Graph Algorithms",
  "Sorting and Searching Techniques",
  "Hashing and Caching",
  "Responsive Web Design",
  "Database Optimization and Management",
  "Testing (Unit, Integration)",
  "Docker and Containerization",
  "Kubernetes",
  "Serverless Computing",
  "Agile and Scrum Methodologies",
  "Cross-Functional Team Collaboration",
  "Problem Solving and Debugging"
]

export default function Skills() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [controls])

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">My Skills</h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white shadow-2xl">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

