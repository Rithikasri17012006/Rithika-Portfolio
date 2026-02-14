import { motion } from "framer-motion"

const certifications = [
  {
    title: "Introduction to Node.js",
    issuer: "Linux Foundation",
    year: "2024",
  },
  {
    title: "MongoDB ",
    issuer: "MongoDB",
    year: "2024",
  },
  {
    title: "React.js",
    issuer: "Scaler",
    year: "2025",
  },
  {
    title: "Javascript",
    issuer: "Infosys Springboard",
    year: "2025",
  },
  {
    title: "solved 100+ problen in Leetcode",
    issuer: "Leetcode",
    year: "2025",
  },
  {
    title: "Adobe Hackathon Round 1",
    issuer: "Adobe",
    year: "2025",
  },
  {
    title: "SIH Participant'25",
    issuer: "AICTE",
    year: "2025",
  },
    {
    title: "Codsoft Internship",
    issuer: "Codsoft",
    year: "2024",
  },
    {
    title: "Ideathon Competion",
    issuer: "BIT",
    year: "2023",
  },
  {
    title: "Snap Mini Hackathon & Workshop ",
    issuer: "Snapchat",
    year: "2024",
  },
  {
    title: "Hackzilla national level hackathon",
    issuer: "KPR",
    year: "2025",
  },
    {
    title: "Hands-on Generative AI Workshop",
    issuer: " Integra Connect",
    year: "2025",
  },
  
    {
    title: "Oracle Certified Professional – Java SE 17 Developer",
    issuer: " Oracle",
    year: "2026",
  },
]


export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 overflow-hidden bg-gray-950"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
        Certifications & Accomplishment
      </h2>

      <motion.div
        className="flex gap-8 w-max px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...certifications, ...certifications].map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="min-w-[280px] bg-gray-900 border border-purple-600/40
                       rounded-2xl p-6 shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">
              {cert.title}
            </h3>
            <p className="text-purple-400">{cert.issuer}</p>
            <p className="text-sm text-gray-400 mt-2">
              {cert.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
