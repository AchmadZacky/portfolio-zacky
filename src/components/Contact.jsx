const Contact = () => {
  return (
    <section id="contact" className="py-20 max-w-[1200px] mx-auto px-4 md:px-8">
      <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold text-center text-[var(--text-primary)] mb-4">
        Hubungi Saya
      </h2>
      <p className="text-center text-[var(--text-secondary)] mb-12">
        Punya proyek atau kesempatan kerja? Yuk, ngobrol bersama saya!
      </p>
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[var(--gradient-start)]">
              mail
            </span>
            <span className="text-[var(--text-secondary)]">
              zackyhaudaa@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[var(--gradient-start)]">
              phone
            </span>
            <span className="text-[var(--text-secondary)]">
              +62 896 5087 9051
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[var(--gradient-start)]">
              location_on
            </span>
            <span className="text-[var(--text-secondary)]">Indonesia</span>
          </div>
          <div className="flex gap-4 mt-6 text-[var(--text-secondary)]">
            <a
              href="https://www.linkedin.com/in/achmad-zacky-haudaa-7016992aa/"
              className="hover:text-[var(--gradient-start)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-[var(--gradient-start)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/ahmadzacky_86/?hl=en"
              className="hover:text-[var(--gradient-start)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full border border-[var(--border-color)] rounded-lg px-4 py-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[var(--border-color)] rounded-lg px-4 py-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] transition-colors"
            />
            <textarea
              rows="4"
              placeholder="Pesan"
              className="w-full border border-[var(--border-color)] rounded-lg px-4 py-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] transition-colors"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Kirim Pesan
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
