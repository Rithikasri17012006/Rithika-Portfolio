const menu = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label:"Skills",id:"skills"},
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
];

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed w-full top-0 flex justify-between items-center px-10 py-4 bg-black/70 backdrop-blur z-50">
      
      {/* Menu */}
      <div className="flex gap-6">
        {menu.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:text-purple-400 transition"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-1 rounded bg-purple-600"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
