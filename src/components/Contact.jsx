import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
  e.preventDefault()
  console.log("Sending email...")

  emailjs
    .sendForm(
      "service_r808ihc",
      "template_2kke36l",
      form.current,
      "qlCO-l0zjokCCKJJQ"
    )
    .then(
      (result) => {
        console.log("SUCCESS", result.text)
        alert("Message sent successfully!")
        form.current.reset()
      },
      (error) => {
        console.error("FAILED", error)
        alert("Failed to send message. Check console.")
      }
    )
}


  return (
    <section id="contact" className="py-20 px-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-6 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="max-w-md mb-6">
          <input
            name="name"
            className="w-full p-3 mb-3 rounded text-black"
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            className="w-full p-3 mb-3 rounded text-black"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="w-full p-3 mb-3 rounded text-black"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 px-6 py-2 rounded hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Rithikasri17012006"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rithika-sri-karthikeyan-2baaa1276/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
