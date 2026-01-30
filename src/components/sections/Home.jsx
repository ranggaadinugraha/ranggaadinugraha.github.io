import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ isLoaded }) => {
  return (
    <section
      id="home"
      className="
        relative z-10
        min-h-screen
        flex items-center
        overflow-hidden
        px-6
      "
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="max-w-2xl">

          <RevealOnScroll active={isLoaded} className="reveal-left">
            <div className="inline-flex items-center mb-6">
              <span className="
                px-5 py-3
                rounded-full
                text-[11px] md:text-xs
                font-semibold
                tracking-widest
                uppercase
                text-gray-200
                bg-white/5
                border border-white/10
              ">
                Available for Opportunities
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll active={isLoaded} className="reveal-left reveal-delay-1">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
              Hello, I’m{" "}
              <span className="text-[#00A19B]">
                Rangga
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll active={isLoaded} className="reveal-left reveal-delay-2">
            <p className="text-gray-400 leading-relaxed mb-14">
              Fresh Graduate with an Interest in Data | Networking | IoT | Technology
            </p>
          </RevealOnScroll>

          <RevealOnScroll active={isLoaded} className="reveal-left reveal-delay-3">
            <div className="flex items-center gap-6">
              <a
                href="#projects"
                className="
                  bg-white text-black
                  font-semibold
                  py-3 px-8
                  transition-all duration-300
                  hover:-translate-y-1
                  active:scale-[0.98]
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  border border-white/25
                  py-3 px-8
                  text-white font-medium
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#00A19B]
                  hover:text-[#00A19B]
                "
              >
                Contact Me
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};