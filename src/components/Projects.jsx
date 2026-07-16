import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Kategori unik
  const categories = useMemo(() => {
    const cats = projectsData.map((p) => p.category);
    return ["all", ...new Set(cats)];
  }, []);

  // Tahun unik
  const years = useMemo(() => {
    const yrs = projectsData.map((p) => p.year);
    return ["all", ...new Set(yrs)].sort((a, b) => b - a);
  }, []);

  // Filter proyek
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;
    if (filter !== "all") {
      filtered = filtered.filter((p) => p.category === filter);
    }
    if (yearFilter !== "all") {
      filtered = filtered.filter((p) => p.year === parseInt(yearFilter));
    }
    return filtered;
  }, [filter, yearFilter]);

  return (
    <section
      id="projects"
      className="py-20 max-w-[1200px] mx-auto px-4 md:px-8"
    >
      <h1 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
        Projects
      </h1>
      <p className="font-['Inter'] text-base text-[var(--text-secondary)] mb-8">
        Kumpulan proyek yang telah saya kerjakan selama perjalanan karir saya.
      </p>

      {/* Filter Bar - Kategori */}
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="font-['Inter'] text-sm font-semibold text-[var(--text-secondary)] mr-2 self-center">
          Kategori:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full font-['Inter'] text-sm font-semibold transition-all ${
              filter === cat
                ? "bg-[var(--gradient-start)] text-white shadow-ambient-low"
                : "bg-[var(--bg-container)] text-[var(--text-secondary)] hover:bg-[var(--surface-variant)]"
            }`}
          >
            {cat === "all"
              ? "Semua"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Filter Bar - Tahun */}
      <div className="flex flex-wrap gap-3 mb-12">
        <span className="font-['Inter'] text-sm font-semibold text-[var(--text-secondary)] mr-2 self-center">
          Tahun:
        </span>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setYearFilter(year)}
            className={`px-4 py-1.5 rounded-full font-['Inter'] text-sm font-semibold transition-all ${
              yearFilter === year
                ? "bg-[var(--gradient-start)] text-white shadow-ambient-low"
                : "bg-[var(--bg-container)] text-[var(--text-secondary)] hover:bg-[var(--surface-variant)]"
            }`}
          >
            {year === "all" ? "Semua" : year}
          </button>
        ))}
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)]/30 shadow-ambient-low hover:shadow-ambient-high transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
          >
            {/* Gambar dengan overlay */}
            <div className="relative overflow-hidden w-full h-48 bg-[var(--bg-container-low)]">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Badge Status */}
              <div className="absolute top-3 right-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "on progress"
                      ? "bg-yellow-500 text-white animate-pulse"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {project.status === "on progress"
                    ? "🚧 Sedang Berjalan"
                    : "✅ Selesai"}
                </span>
              </div>
              {/* Badge Tahun */}
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Konten */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h2 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[var(--text-primary)] line-clamp-1">
                  {project.title}
                </h2>
              </div>
              <p className="font-['Inter'] text-sm text-[var(--text-secondary)] mb-3 flex-grow line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="bg-[var(--bg-container)] text-[var(--text-secondary)] px-2.5 py-0.5 rounded-full font-['Inter'] text-xs font-medium border border-[var(--border-color)]/20"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[var(--text-secondary)] text-xs font-medium px-2 py-0.5">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Jika tidak ada proyek */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-secondary)]">
            Tidak ada proyek yang sesuai dengan filter.
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
