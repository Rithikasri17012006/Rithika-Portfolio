import { motion } from "framer-motion"

const skills = {
  "Programming Languages": ["Java", "C", "Python"],
  Frontend: ["React", "HTML", "CSS", "Tailwind", "Javascript"],
  Backend: ["Node.js", "Express"],
  Database: ["MongoDB", "MySQL"],
  "UI/UX Design": ["Figma", "Wireframing", "Prototyping", "User Research"],
  Tools: ["Git", "Postman", "VS Code"],
}

// Container for staggered cards
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Right → Center animation
const item = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {Object.entries(skills).map(([cat, items]) => (
          <motion.div
            key={cat}
            variants={item}
            className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl mb-3">{cat}</h3>

            {items.map((skill) => (
              <span
                key={skill}
                className="inline-block bg-purple-600 px-3 py-1 m-1 rounded"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
