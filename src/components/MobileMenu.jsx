import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <div
      className={`
        fixed inset-0 z-40
        flex flex-col items-center justify-center
        backdrop-blur-md
        bg-[rgba(15,15,15,0.85)]
        transition-all duration-500 ease-out

        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu"
        className="
          absolute top-6 right-6
          text-4xl font-light
          text-white/70
          hover:text-[#00A19B]
          transition-colors duration-300
        "
      >
        &times;
      </button>

      {["Home", "About", "Work", "Projects", "Education", "Organization", "Contact"].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          style={{ transitionDelay: `${index * 120}ms` }}
          className={`
            text-3xl font-semibold tracking-wide
            my-4
            transition-all duration-500 ease-out
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
            text-white/80
            hover:text-[#00A19B]
          `}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
