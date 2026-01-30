import { projects } from "../../data/projectsData";

import githubIcon from "../../assets/Icons/github.png";
import pdfIcon from "../../assets/Icons/pdf.png";
import liveicon from "../../assets/Icons/link.png";

import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="px-6">
      <div className="w-full h-px bg-white/10" />
      <div className="w-full max-w-6xl mx-auto px-6 py-28">

        <RevealOnScroll>
          <div className="mb-14 max-w-xl">
            <h2 className="text-4xl font-bold text-white">
              Projects
            </h2>
            <div className="w-20 h-px bg-[#00A19B] mt-4 mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed">
              A collection of selected projects that showcase my skills in
              software development, data analysis and modern technologies.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <RevealOnScroll key={p.id}>
              <div className="group h-full">
                <div
                  className="
                    relative h-full flex flex-col
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    transition-all duration-500
                    hover:border-white/25
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.image1}
                      alt={p.title}
                      className="
                        w-full h-[180px]
                        object-cover grayscale
                        transition-all duration-700
                        group-hover:grayscale-0
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="px-4 py-4 flex flex-col flex-1">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-[#00A19B] transition">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-gray-300 text-[13px] leading-snug">
                      {p.desc}
                    </p>

                    {p.tech && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="
                              px-2 py-0.5
                              text-[11px] 
                              bg-white/10 border border-white/10
                              text-white
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-4 flex justify-end gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-glass"
                        >
                          <img src={liveicon} alt="Live" className="w-5 h-5" />
                        </a>
                      )}

                      {p.publication && (
                        <a
                          href={p.publication}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-glass"
                        >
                          <img src={pdfIcon} alt="PDF" className="w-6 h-6" />
                        </a>
                      )}

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-glass"
                        >
                          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-white/10" />
    </section>
  );
};
