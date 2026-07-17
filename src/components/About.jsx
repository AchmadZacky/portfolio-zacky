import { getImagePath } from "../utils/imagePath";

const About = () => {
  // Ganti dengan path file CV Anda
  const cvPath = "/documents/CV-Achmad-Zacky-Haudaa.pdf";
  // atau jika langsung di public: const cvPath = "/CV-Achmad-Zacky-Haudaa.pdf";

  return (
    <section id="about" className="py-20 max-w-[1200px] mx-auto px-4 md:px-8">
      <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-12 shadow-ambient-low flex flex-col md:flex-row gap-12 items-center border border-[var(--border-color)]/30">
        <div className="w-full md:w-1/2">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Tentang Saya
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada
            pengembangan aplikasi, analisis data, serta teknologi baru.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-4 border-b border-[var(--border-color)]/30 pb-3">
              <span className="material-symbols-outlined text-[var(--gradient-start)] w-6">
                person
              </span>
              <span className="font-semibold w-24 text-[var(--text-primary)]">
                Nama
              </span>
              <span className="text-[var(--text-secondary)]">
                Achmad Zacky Haudaa
              </span>
            </li>
            <li className="flex items-center gap-4 border-b border-[var(--border-color)]/30 pb-3">
              <span className="material-symbols-outlined text-[var(--gradient-start)] w-6">
                location_on
              </span>
              <span className="font-semibold w-24 text-[var(--text-primary)]">
                Lokasi
              </span>
              <span className="text-[var(--text-secondary)]">Indonesia</span>
            </li>
            <li className="flex items-center gap-4 border-b border-[var(--border-color)]/30 pb-3">
              <span className="material-symbols-outlined text-[var(--gradient-start)] w-6">
                mail
              </span>
              <span className="font-semibold w-24 text-[var(--text-primary)]">
                Email
              </span>
              <span className="text-[var(--text-secondary)]">
                zacky@example.com
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[var(--gradient-start)] w-6">
                school
              </span>
              <span className="font-semibold w-24 text-[var(--text-primary)]">
                Pendidikan
              </span>
              <span className="text-[var(--text-secondary)]">
                S1 Informatika
              </span>
            </li>
          </ul>

          {/* Tombol Download CV */}
          <a
            href={cvPath}
            download
            className="mt-8 px-6 py-2 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity inline-flex"
          >
            Download CV
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-2xl object-cover shadow-md h-[400px]"
            src={getImagePath("about-img.png")}
            alt="About Me"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
