export const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-sm">
        <div className="flex items-center gap-2 text-[#2ecc71]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2ecc71]"></span>
          </span>
          <span className="font-medium">Uptime Status</span>
        </div>

        <div className="text-white/60 text-xs flex items-center gap-2">
          <span>Rangga Adi Nugraha</span>
          <span className="opacity-40">|</span>
          <a
            href="#"
            className="hover:text-[#2ecc71] transition"
          >
            Support Me
          </a>
        </div>
      </div>
    </footer>
  );
};