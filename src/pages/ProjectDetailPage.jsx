import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset ke gambar pertama saat proyek berubah
  useEffect(() => {
    setCurrentImage(0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Proyek tidak ditemukan
          </h2>
          <Link
            to="/#projects"
            className="text-[var(--gradient-start)] hover:underline mt-4 inline-block"
          >
            Kembali ke Projects
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images || [project.image];
  const totalImages = images.length;

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev + 1) % totalImages);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImage, isTransitioning]);

  return (
    <section className="pt-28 pb-20 bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Tombol Kembali */}
        <Link
          to="/#projects"
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--gradient-start)] transition-colors mb-6 group"
        >
          <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Kembali ke Projects
        </Link>

        <div className="bg-[var(--bg-secondary)] rounded-2xl shadow-ambient-low border border-[var(--border-color)]/30 overflow-hidden">
          {/* CAROUSEL */}
          <div className="relative w-full h-72 sm:h-96 md:h-[480px] bg-[var(--bg-container-low)] overflow-hidden">
            {/* Gambar dengan transisi smooth */}
            <div
              className="w-full h-full transition-transform duration-500 ease-in-out flex"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 flex items-center justify-center bg-[var(--bg-container-low)]"
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Tombol Navigasi - SELALU TERLIHAT & LEBIH BESAR */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-12 h-12 rounded-full transition-all duration-300 z-10 flex items-center justify-center hover:scale-110 shadow-lg"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-3xl">
                    chevron_left
                  </span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-12 h-12 rounded-full transition-all duration-300 z-10 flex items-center justify-center hover:scale-110 shadow-lg"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-3xl">
                    chevron_right
                  </span>
                </button>

                {/* Indikator posisi (dot) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "bg-white w-8"
                          : "bg-white/40 hover:bg-white/70 w-2"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Badge Status & Tahun */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  project.status === "on progress"
                    ? "bg-yellow-500 text-white animate-pulse"
                    : "bg-green-500 text-white"
                }`}
              >
                {project.status === "on progress"
                  ? "🚧 Sedang Berjalan"
                  : "✅ Selesai"}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-black/60 text-white text-sm font-semibold backdrop-blur-sm">
                {project.year}
              </span>
            </div>

            {/* Counter gambar (misal: 1/5) */}
            {totalImages > 1 && (
              <div className="absolute top-4 left-4 z-10 bg-black/60 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                {currentImage + 1} / {totalImages}
              </div>
            )}
          </div>

          {/* Konten */}
          <div className="p-6 md:p-8 lg:p-10">
            <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h1>

            {/* Tag Teknologi */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-[var(--bg-container)] text-[var(--text-secondary)] px-4 py-1 rounded-full font-['Inter'] text-sm font-medium border border-[var(--border-color)]/30"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Deskripsi */}
            <p className="mt-6 font-['Inter'] text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-['Inter'] text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  🚀 Live Demo
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-['Inter'] text-sm font-semibold hover:bg-[var(--bg-container)] transition-colors"
                >
                  📂 Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
