// Home.jsx
import { motion } from 'framer-motion'
import profile from "../assets/profile.jpeg"

export default function Home() {
return (
<section id="home" className="min-h-screen flex items-center justify-center">
<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{
    opacity: 1,
    y: [0, -12, 0],   // floating up & down
  }}
  transition={{
    opacity: { duration: 1 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="text-center"
>

<img src={profile} dowload className="w-40 mx-auto rounded-full mb-6 ring-2 ring-purple-500 ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(168,85,247,0.7)]" alt="profile photo"/>
<h1 className="text-5xl font-bold text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">Rithika Sri K</h1>
<p className="text-xl  mt-2">Software Engineer</p>
<p className="mt-4 max-w-xl mx-auto">
Passionate about building modern, scalable web applications.
</p>
<a
href="/resume.pdf"
className="inline-block mt-6 px-6 py-3 bg-purple-600 rounded-lg"
download
>
Download Resume
</a>
</motion.div>
</section>
)
}