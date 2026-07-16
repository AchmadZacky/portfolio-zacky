const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-[1200px] mx-auto px-4 md:px-8 overflow-hidden"
    >
      {/* Kiri: Teks */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
        {/* "Hello, I'm" - slide in left */}
        <p className="text-[var(--gradient-start)] font-semibold mb-2 animate-slideInLeft opacity-0">
          Hello, I'm
        </p>

        {/* Nama - fade in up dengan delay */}
        <div className="animate-fadeInUp opacity-0 delay-100">
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-[-0.02em] mb-2 text-[var(--text-primary)]">
            Achmad Zacky
          </h1>
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-[-0.02em] bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-transparent bg-clip-text">
            Haudaa
          </h1>
        </div>

        {/* Job title - fade in up dengan delay */}
        <p className="font-['Inter'] text-lg font-medium text-[var(--text-secondary)] animate-fadeInUp opacity-0 delay-200">
          Mahasiswa S1 Teknik Informatika
        </p>

        {/* Deskripsi - fade in up dengan delay */}
        <p className="text-[var(--text-secondary)] max-w-md animate-fadeInUp opacity-0 delay-300">
          Saya membangun aplikasi web, mobile dan solusi data yang efisien,
          modern dan user friendly.
        </p>

        {/* Tombol - fade in up dengan delay */}
        <div className="flex flex-wrap gap-4 mt-4 animate-fadeInUp opacity-0 delay-400">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-[var(--gradient-start)]/30"
          >
            Lihat Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] flex items-center gap-2 hover:bg-[var(--bg-secondary)] transition-colors"
          >
            Hubungi Saya
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Social icons - slide in left dengan delay */}
        <div className="flex gap-4 mt-6 text-[var(--text-secondary)] animate-slideInLeft opacity-0 delay-500">
          <a
            href="#"
            className="hover:text-[var(--gradient-start)] transition-colors hover:scale-110 transform duration-300"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            href="#"
            className="hover:text-[var(--gradient-start)] transition-colors hover:scale-110 transform duration-300"
          >
            <span className="material-symbols-outlined">work</span>
          </a>
          <a
            href="#"
            className="hover:text-[var(--gradient-start)] transition-colors hover:scale-110 transform duration-300"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="w-full md:w-1/2 relative flex justify-center animate-fadeInScale opacity-0 delay-300">
        {/* Background blur dengan animasi float */}
        <div className="absolute inset-0 bg-[var(--surface-variant)] rounded-full blur-3xl opacity-50 z-0 animate-float"></div>

        {/* Container gambar dengan efek hover scale */}
        <div className="relative z-10  md:w-full  md:aspect-square flex items-center justify-center group">
          <img
            className="w-full h-full object-contain object-bottom drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-2"
            src="profiletr.png"
            alt="Achmad Zacky"
          />
          {/* Efek glow di bawah gambar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-[var(--gradient-start)]/10 blur-2xl z-0 group-hover:opacity-75 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
