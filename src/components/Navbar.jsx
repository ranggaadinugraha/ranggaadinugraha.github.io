import { useEffect, useState, useRef } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "work",
        "projects",
        "education",
        "organization",
        "contact",
      ];

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = menuRefs.current[activeSection];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft + el.offsetWidth * 0.3,
        width: el.offsetWidth * 0.4,
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        border-b border-white/10
        transition-colors duration-300
        ${scrolled
          ? "bg-[rgba(15,15,15,0.7)]"
          : "bg-[rgba(15,15,15,0.45)]"}
      `}
    >
      <div className="relative w-full px-6 md:px-26">
        <div className="flex justify-between items-center h-16">

          <button
            onClick={() => scrollToSection("home")}
            className="
              font-mono text-base md:text-lg
              font-bold tracking-wide
              text-white
              cursor-pointer
            "
          >
            Portofolio<span className="text-[#00A19B]">.Rangga</span>
          </button>

          <div
            className="md:hidden w-7 h-5 flex flex-col justify-between cursor-pointer"
            onClick={() => setMenuOpen((p) => !p)}
          >
            <span
              className={`h-[2px] bg-[#00A19B] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`h-[2px] bg-[#00A19B] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] bg-[#00A19B] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 relative">
            <span
              className="
                absolute bottom-0 h-[2px]
                bg-[#00A19B]
                rounded-full
                transition-all duration-300
              "
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />

            {[
              "home",
              "about",
              "work",
              "projects",
              "education",
              "organization",
              "contact",
            ].map((item) => (
              <button
                key={item}
                ref={(el) => (menuRefs.current[item] = el)}
                onClick={() => scrollToSection(item)}
                className={`
                  pb-1
                  text-[13px] lg:text-sm
                  font-medium
                  tracking-normal
                  transition-colors duration-300
                  cursor-pointer
                  ${
                    activeSection === item
                      ? "text-[#00A19B]"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
