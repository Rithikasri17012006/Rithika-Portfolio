const menu = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label:"Skills",id:'skills'},
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
  className="
    relative text-white transition-all duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-purple-400
    after:transition-all after:duration-300
    hover:after:w-full
    hover:text-purple-400
    hover:shadow-[0_0_20px_#a855f7]
  "
>
            {item.label}
          </a>
        ))}
      </div>

    </nav>
  );
}
