import { useState } from "react";
import certificates from "../data/certificates";
import { getImagePath } from "../utils/imagePath";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="certificates"
      className="py-20 max-w-[1200px] mx-auto px-4 md:px-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            Sertifikat
          </h2>
          <p className="font-['Inter'] text-base text-[var(--text-secondary)]">
            Sertifikasi profesional dan kursus yang telah diselesaikan untuk
            memvalidasi keterampilan teknis saya.
          </p>
        </div>
        <button className="flex items-center gap-2 text-[var(--gradient-start)] font-['Inter'] text-sm font-semibold hover:text-[var(--gradient-end)] transition-colors group">
          View All Certificates
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Grid Sertifikat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)]/50 shadow-ambient-low hover:shadow-ambient-high transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => cert.image && openLightbox(cert.image)}
          >
            {/* Gambar dengan object-contain */}
            <div className="w-full aspect-[4/3] bg-[var(--bg-container-low)] flex items-center justify-center p-4">
              <img
                src={getImagePath(cert.image)}
                alt={cert.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info Sertifikat */}
            <div className="p-4">
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[var(--text-primary)] mb-1 leading-tight line-clamp-2">
                {cert.name}
              </h4>
              <p className="font-['Inter'] text-sm text-[var(--text-secondary)]">
                {cert.provider}
              </p>
              {cert.category && (
                <span className="inline-block mt-3 px-2 py-1 bg-[var(--surface-variant)] text-[var(--text-secondary)] font-['Inter'] text-xs font-semibold rounded-md">
                  {cert.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal untuk melihat gambar besar */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-full h-[80vh] flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt="Certificate full view"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
