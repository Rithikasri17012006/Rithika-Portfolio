import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Education Platform for Rural Learning",
    tech: ["React", "Tailwind CSS"],
    description:
      "Developed a frontend education platform designed for rural users with limited or unstable internet connectivity.Implemented features such as online/offline network status indicators,video-based learning, and interactive quizzes to enhance accessibility and engagement.",
  },
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern, animated personal portfolio showcasing skills, projects, certifications, and experience with seamless UI transitions.",
  },
  {
    title: "Fitness Application – Workflow & UI Design",
    tech: ["Figma"],
    description:
      "Designed an end-to-end user workflow and high-fidelity UI screens for a fitness application using Figma.Focused on intuitive navigation, user flow consistency, and responsive design concepts across devices.",
  },
  {
    title: "Restaurant Website – Responsive Web Templates",
    tech: ["HTML","Tailwind CSS"],
    description:
      "Designed and developed reusable, responsive web templates for a restaurant-based website using HTML and Tailwind CSS.",
  },
  {
    title: "Movie Management System (Console Application)",
    tech: ["Java","Arrays","Lists"],
    description:
      "Developed a Java-based CRUD console application to store and manage movie details such as actor, director, and ratings.Implemented structured data operations using arrays, lists, and custom methods.",
  },
  {
    title: "Micro-Donation Platform for Disaster Relief (SIH Project)",
    tech: ["React J.S","Tailwind CSS","TypeScript","Express","Supabase"],
    description:
      "Developed a responsive frontend platform to support micro-donations for disaster relief initiatives. Designed the system with AES-256 encryption architecture, offline-enabled access, and USSD-based support to ensure secure and inclusive usage during emergencies currently working on backend integration.",
  },
  {
  title: "News Aggregation Web Application",
  tech: ["React.js", "Node.js", "Express.js", "News API", "Axios", "CSS"],
  description:
    "Developed a dynamic news aggregation web application that fetches and displays real-time news articles across multiple categories using a public News API. Built a responsive React-based frontend with conditional rendering and state management, and implemented a Node.js and Express.js backend to handle API requests and improve scalability. Focused on clean UI, efficient data fetching, and seamless user experience.",
},

]

export default function Projects() {
  const [index, setIndex] = useState(0)

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // ✅ SAFETY GUARD (prevents undefined crash during animation)
  const currentProject = projects[index]
  if (!currentProject) return null

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-14 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
        Projects
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Previous Button */}
        <button
          onClick={prevProject}
          className="absolute top-1/2 -left-16
                     transform -translate-y-1/2
                     w-14 h-14 rounded-full
                     bg-purple-600 text-2xl
                     hover:scale-110 transition z-10"
        >
          &lt;
        </button>

        {/* Animated Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 border border-purple-600/40
                       rounded-3xl p-10 shadow-2xl"
          >
            {/* Title */}
            <motion.h3
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              {currentProject.title}
            </motion.h3>

            {/* Tech Stack */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {currentProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-purple-600/20
                             border border-purple-500
                             rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {currentProject.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="absolute top-1/2 -right-16
                     transform -translate-y-1/2
                     w-14 h-14 rounded-full
                     bg-purple-600 text-2xl
                     hover:scale-110 transition z-10"
        >
          &gt;
        </button>
      </div>
    </section>
  )
}
