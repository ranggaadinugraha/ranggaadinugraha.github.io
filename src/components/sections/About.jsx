import { RevealOnScroll } from "../RevealOnScroll";
import profileImage from "../../assets/profile.png";

export const About = () => {
  return (
    <section id="about" className="px-6">
      <div className="w-full h-px bg-white/10" />
      <div className="w-full max-w-6xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <RevealOnScroll className="reveal-left reveal-delay-1">
            <div>
              <h2 className="text-4xl font-bold text-white">
                About Me
              </h2>
              <div className="w-20 h-px bg-[#00A19B] mt-4 mb-8" />
              <p className="text-gray-300 leading-relaxed">
                I am a fresh graduate in Information Technology with an interest in data, networking, IT and modern technologies. 
                I enjoy working with data, exploring system and network operations and continuously learning new technologies to solve real-world problems.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="reveal-right reveal-delay-2">
            <div className="flex justify-center md:justify-end">
              <img
                src={profileImage}
                alt="Profile"
                className="
                  w-[260px] md:w-[360px]
                  border border-white/10
                  grayscale hover:grayscale-0
                  transition duration-500
                "
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <div className="w-full h-px bg-white/10" />
    </section>
  );
};
