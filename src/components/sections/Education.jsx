import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  return (
    <section id="education" className="px-6">
      <div className="w-full h-px bg-white/10" />
      <div className="w-full max-w-6xl mx-auto px-6 py-28">

        <RevealOnScroll>
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-white">
              Education
            </h2>
            <div className="w-20 h-px bg-[#00A19B] mt-4 mb-8" />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Academic background highlighting technical foundation, analytical thinking
              and practical skills.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 space-y-12">
          <RevealOnScroll>
            <div className="bg-gray-900/60 p-6 ">
              <h3 className="text-xl font-semibold text-white">
                B.Sc. in Informatics (S.Kom)
              </h3>
              <p className="text-gray-400 mt-1">
                Universitas Teknologi Yogyakarta — Sleman, Yogyakarta
              </p>
              <span className="text-sm text-gray-500 mt-1 block">
                Sep 2021 – Jul 2025 (GPA 3.47/4.00)
              </span>
              <p className="text-gray-400 mt-3 text-sm">
                Focused on programming fundamentals, information systems, and data processing. 
                Developed logical, structured and analytical thinking through practical IT projects and problem-solving exercises.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-gray-900/60 p-6 ">
              <h3 className="text-xl font-semibold text-white">
                Light Vehicle Engineering
              </h3>
              <p className="text-gray-400 mt-1">
                SMK Ma’arif 1 Nanggulan — Kulon Progo, Yogyakarta
              </p>
              <span className="text-sm text-gray-500 mt-1 block">
                Jul 2018 – Jul 2021
              </span>
              <p className="text-gray-400 mt-3 text-sm">
                Studied basic maintenance and repair of light vehicles, including engines, transmissions and supporting components. Applied standard procedures and basic workplace safety in practical automotive workshops.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <div className="w-full h-px bg-white/10" />
    </section>
  );
};
