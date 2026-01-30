import { RevealOnScroll } from "../RevealOnScroll";

export const Work = () => {
  return (
    <section id="work" className="px-6">
      <div className="w-full h-px bg-white/10" />
      <div className="w-full max-w-6xl mx-auto px-6 py-28">

        <RevealOnScroll>
          <div>
            <h2 className="text-4xl font-bold text-white">
              Work Experience
            </h2>
            <div className="w-20 h-px bg-[#00A19B] mt-4 mb-8" />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Professional experiences that shaped my work ethic,
              responsibility and problem-solving skills.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 space-y-14">
          <TimelineItem
            title="Shop Attendant"
            company="Family-Owned Business — Kulon Progo, Yogyakarta"
            date="Nov 2024 – May 2025"
            points={[
              "Handled 20–40 daily sales transactions and maintained basic sales records",
              "Managed inventory data for approximately 50 product items",
              "Ensured operational cleanliness and consistent customer service",
            ]}
          />

          <TimelineItem
            title="Construction Worker"
            company="Padat Karya Program — Kulon Progo, Yogyakarta"
            date="Aug 2024 – Sep 2024"
            points={[
              "Executed daily field tasks within a 5–10 person team based on work plans",
              "Assisted in meeting project deadlines through disciplined task completion",
              "Complied with workplace safety and operational procedures",
            ]}
          />

          <TimelineItem
            title="Polling Station Supervisor (PTPS)"
            company="BAWASLU — Kulon Progo, Yogyakarta"
            date="Jan 2024 – Mar 2024"
            points={[
              "Supervised voting and vote-counting processes at 1 polling station with ±150 voters",
              "Recorded and reported election monitoring data accurately and objectively",
              "Ensured all procedures complied with official electoral regulations",
            ]}
          />
        </div>
      </div>
      <div className="w-full h-px bg-white/10" />
    </section>
  );
};

const TimelineItem = ({ title, company, date, points }) => (
  <RevealOnScroll>
    <div className="grid grid-cols-[32px_1fr] gap-6 relative">
      <div className="relative flex justify-center">
        <span className="absolute top-0 bottom-0 w-px bg-white/10" />
        <span className="relative z-10 mt-2 w-3.5 h-3.5 rounded-full bg-white" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between flex-wrap gap-2">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          <span className="text-sm text-gray-500">
            {date}
          </span>
        </div>
        <p className="text-gray-400">{company}</p>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-2">
          {points.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </RevealOnScroll>
);
