import { motion } from "framer-motion"

const headingText = "About Me"

const paragraph =
  "Computer Science and Design undergraduate with a foundation in frontend technologies including HTML, CSS, JavaScript, React, and Tailwind CSS. CodeSoft intern seeking a Frontend Developer internship experiences."

// Container for stagger
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

// Letter animation
const letter = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] flex"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="max-w-3xl leading-relaxed"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {paragraph.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  )
}
