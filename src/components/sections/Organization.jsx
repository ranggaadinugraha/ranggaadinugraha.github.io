import { RevealOnScroll } from "../RevealOnScroll";

export const Organization = () => {
  return (
    <section id="organization" className="px-6">
      <div className="w-full h-px bg-white/10" />
      <div className="w-full max-w-6xl mx-auto px-6 py-28">

        <RevealOnScroll>
          <div>
            <h2 className="text-4xl font-bold text-white">
              Organization
            </h2>
            <div className="w-20 h-px bg-[#00A19B] mt-4 mb-8" />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Experience in organizational roles involving coordination,
              communication and responsibility.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 space-y-12">

          <OrgItem
            role="Treasurer"
            org="Karang Taruna — Kulon Progo, Yogyakarta"
            date="Nov 2022 – Present"
            desc="Handled financial records, cash flow management and reporting for organizational activities."
          />

          <OrgItem
            role="Chairperson"
            org="Independence Day Competition Event"
            date="Jul 2025 – Aug 2025"
            desc="Led event planning, coordinated team members and ensured smooth execution of activities."
          />

          <OrgItem
            role="Public Relations"
            org="Community Service Program"
            date="Jul 2024 – Nov 2024"
            desc="Acted as a liaison between the organizing team and the local community."
          />
        </div>
      </div>
      <div className="w-full h-px bg-white/10" />
    </section>
  );
};

const OrgItem = ({ role, org, date, desc }) => (
  <RevealOnScroll>
    <div className="border-l border-white/10 pl-6">
      <div className="flex justify-between flex-wrap gap-3 mb-1">
        <h3 className="text-lg font-semibold text-white">
          {role}
        </h3>
        <span className="text-sm text-gray-500">
          {date}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-2">
        {org}
      </p>

      <p className="text-gray-400 leading-relaxed max-w-3xl">
        {desc}
      </p>
    </div>
  </RevealOnScroll>
);
