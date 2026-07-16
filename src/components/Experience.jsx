import { useState } from "react";
import experiences from "../data/experiences";

const Experience = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "tech", "network", "creative"];

  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === filter);

  return (
    <section
      id="experience"
      className="py-20 max-w-[1200px] mx-auto px-4 md:px-8"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Kiri: Judul & Filter */}
        <div className="w-full md:w-1/3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Pengalaman &amp; Aktivitas
          </h2>
          <p className="font-['Inter'] text-base text-[var(--text-secondary)] mb-6">
            Perjalanan profesional saya yang mencakup pengembangan software,
            networking, hingga kreatif.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-['Inter'] text-sm font-semibold transition-all ${
                  filter === cat
                    ? "bg-[var(--gradient-start)] text-white"
                    : "bg-[var(--bg-container)] text-[var(--text-secondary)] hover:bg-[var(--surface-variant)] border border-[var(--border-color)]"
                }`}
              >
                {cat === "all"
                  ? "Semua"
                  : cat === "tech"
                    ? "💻 Tech"
                    : cat === "network"
                      ? "🌐 Network"
                      : "📸 Creative"}
              </button>
            ))}
          </div>
        </div>

        {/* Kanan: Timeline */}
        <div className="w-full md:w-2/3 relative pl-8">
          {/* Garis vertikal */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[var(--border-color)] rounded-full"></div>

          {filteredExperiences.length === 0 ? (
            <p className="text-[var(--text-secondary)]">
              Tidak ada pengalaman untuk kategori ini.
            </p>
          ) : (
            filteredExperiences.map((exp, index) => (
              <div key={index} className="relative mb-10 last:mb-0">
                {/* Node */}
                <div
                  className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full ${
                    exp.isHighlight
                      ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] border-4 border-[var(--bg-primary)] shadow-[0_0_0_4px_rgba(79,70,229,0.1)]"
                      : "bg-[var(--surface-variant)] border-2 border-[var(--border-color)]"
                  }`}
                ></div>

                {/* Tahun & Judul */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <span
                    className={`font-['Inter'] text-sm font-semibold px-3 py-1 rounded-full w-max ${
                      exp.isHighlight
                        ? "text-[var(--gradient-start)] bg-[var(--gradient-start)]/10"
                        : "text-[var(--text-secondary)] bg-[var(--surface-variant)]"
                    }`}
                  >
                    {exp.year}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                    {exp.title}
                  </h3>
                  {exp.isHighlight && (
                    <span className="text-xs font-semibold text-[var(--gradient-start)] bg-[var(--gradient-start)]/10 px-2 py-0.5 rounded-full">
                      ⭐ Highlight
                    </span>
                  )}
                </div>

                {/* Company */}
                <h4 className="font-['Inter'] text-base font-semibold text-[var(--gradient-end)] mb-2">
                  {exp.company}
                </h4>

                {/* Deskripsi singkat */}
                <p className="font-['Inter'] text-sm text-[var(--text-secondary)] mb-2 italic">
                  {exp.description}
                </p>

                {/* Detail poin-poin */}
                {exp.details && exp.details.length > 0 && (
                  <ul className="space-y-1.5">
                    {exp.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[var(--text-secondary)] font-['Inter'] text-sm"
                      >
                        <span className="text-[var(--gradient-start)] mt-0.5">
                          ▹
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
