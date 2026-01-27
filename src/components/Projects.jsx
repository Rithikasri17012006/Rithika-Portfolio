import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Education Platform for Rural Learning",
    tech: ["React", "Tailwind CSS"],
    description:
      "Developed a frontend education platform designed for rural users with limited or unstable internet connectivity.",
  },
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern, animated personal portfolio showcasing skills and projects.",
  },
  {
    title: "Fitness Application – Workflow & UI Design",
    tech: ["Figma"],
    description:
      "Designed end-to-end workflows and high-fidelity UI screens using Figma.",
  },
]

export default function Projects() {
  const [index, setIndex] = useState(0)

  const nextProject = () =>
    setIndex((prev) => (prev + 1) % projects.length)

  const prevProject = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const currentProject = projects[index]
  if (!currentProject) return null

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">
        Projects
      </h2>

      <div className="max-w-4xl mx-auto px-4">

        {/* CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 border border-purple-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {currentProject.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-600/20 border border-purple-500 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-base sm:text-lg">
              {currentProject.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* MOBILE BUTTONS */}
        <div className="flex justify-between mt-6 sm:hidden">
          <button
            onClick={prevProject}
            className="px-6 py-2 bg-purple-600 rounded-full text-lg"
          >
            ← Prev
          </button>
          <button
            onClick={nextProject}
            className="px-6 py-2 bg-purple-600 rounded-full text-lg"
          >
            Next →
          </button>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden sm:block relative">
          <button
            onClick={prevProject}
            className="absolute top-[-210px] -left-16 w-14 h-14 rounded-full bg-purple-600 text-2xl"
          >
            &lt;
          </button>

          <button
            onClick={nextProject}
            className="absolute top-[-210px] -right-16 w-14 h-14 rounded-full bg-purple-600 text-2xl"
          >
            &gt;
          </button>
        </div>

      </div>
    </section>
  )
}
