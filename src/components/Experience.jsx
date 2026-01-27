import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-10">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Experience Content */}
      <motion.ul
        className="border-l-2 border-purple-600 pl-6 max-w-3xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.li variants={item} className="mb-2 font-semibold">
          Intern – Frontend Developer
        </motion.li>

        <motion.li variants={item} className="text-gray-400 mb-4">
          Crayond Digital Pvt. Ltd.
        </motion.li>

        <motion.li variants={item} className="mb-3">
          Built 15+ reusable, responsive UI components using React.js and Next.js,
          improving maintainability.
        </motion.li>

        <motion.li variants={item}>
          Optimized state management and component integration to enhance UI
          performance and scalability.
        </motion.li>
      </motion.ul>
    </section>
  )
}
