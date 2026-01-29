import { useState } from "react";

const menu = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur">
      <div className="flex items-center justify-between px-4 sm:px-10 py-4">
        {/* Left side (optional logo/title) */}
        <a href="#home" className="text-white font-semibold">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                relative text-white transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-purple-400
                after:transition-all after:duration-300
                hover:after:w-full hover:text-purple-400
                hover:shadow-[0_0_20px_#a855f7]
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 rounded-xl bg-black/80 p-4 border border-white/10">
            {menu.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-white hover:text-purple-400 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
