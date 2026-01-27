import { motion } from 'framer-motion'
export default function Education() {
  return (
    <section id="education" className="py-20 px-10 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false ,amount:0.3}}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
          Education
        </h2>

        <div className="relative border-l-4 border-purple-600 pl-8 space-y-10">

          {/* Degree */}
          <div>
            <span className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full"></span>
            <h3 className="text-xl font-semibold">
              B.Tech – Computer Science and Design
            </h3>
            <p className="text-gray-400 text-sm">2023 – 2027</p>
            <p className="mt-2">
              Bannari Amman Institute of Technology
            </p>
          </div>

          {/* Higher Secondary */}
          <div>
            <span className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full"></span>
            <h3 className="text-xl font-semibold">
              Higher Secondary Education (HSC)
            </h3>
            <p className="text-gray-400 text-sm">2021 – 2023</p>
            <p className="mt-2">
              Srinivasa Vidhayalaya Higher Secondary School
            </p>
          </div>

          {/* Secondary */}
          <div>
            <span className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full"></span>
            <h3 className="text-xl font-semibold">
              Secondary School (SSLC)
            </h3>
            <p className="text-gray-400 text-sm">2019 – 2020</p>
            <p className="mt-2">
              VAV School
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
