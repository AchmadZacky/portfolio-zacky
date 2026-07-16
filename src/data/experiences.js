const experiences = [
  // ===== PENGALAMAN TERBARU (ON PROGRESS) =====
  {
    year: "Mei 2026 - Sekarang",
    title: "Web Developer - Sistem Pemesanan Tiket Transjakarta",
    company: "Project-based",
    category: "tech",
    isHighlight: true,
    isOnProgress: true,
    description:
      "Membangun sistem pemesanan tiket Transjakarta berbasis web dengan integrasi pembayaran Midtrans.",
    details: [
      "Mengembangkan fitur pencarian rute dan pemesanan tiket online",
      "Integrasi payment gateway Midtrans untuk pembayaran",
      "Menggunakan JavaScript, Tailwind, PHP, dan MySQL",
      "Fitur cetak e-ticket setelah pembayaran berhasil",
    ],
  },
  // ===== CORE TECH EXPERIENCE =====
  {
    year: "Feb 2024 - Aug 2024",
    title: "Full Stack Developer",
    company: "HariSenin (Bootcamp 6 Bulan)",
    category: "tech",
    isHighlight: true,
    description: "Program intensif full stack developer selama 6 bulan.",
    details: [
      "Mempelajari GIT, HTML, CSS, JavaScript, React.js, Node.js",
      "Mengerjakan project CRUD dengan implementasi REST API",
      "Integrasi frontend-backend dengan konsep modern",
    ],
  },
  {
    year: "2023 - Sekarang",
    title: "Freelance Academic Project Assistant",
    company: "Freelance",
    category: "tech",
    isHighlight: true,
    description: "Membantu mahasiswa dalam project akademik dan teknis.",
    details: [
      "Membimbing pembuatan simulasi jaringan di Cisco Packet Tracer",
      "Membantu debugging dan perbaikan error pada project",
      "Memberikan panduan pembuatan laporan teknis",
    ],
  },
  {
    year: "Jul 2022 - Sep 2022",
    title: "Network Operation Center (NOC)",
    company: "UPT TIK UNJ",
    category: "network",
    isHighlight: true,
    description: "PKL di UPT TIK Universitas Negeri Jakarta.",
    details: [
      "Mengelola dan maintenance ±20 ruang laboratorium komputer",
      "Monitoring dan troubleshooting jaringan seluruh kampus",
      "Instalasi software dan maintenance sistem jaringan",
    ],
  },

  // ===== CREATIVE EXPERIENCE =====
  {
    year: "Sep 2024",
    title: "Photographer",
    company: "Freelance - Seminar Proposal & Wisuda",
    category: "creative",
    isHighlight: false,
    description: "Dokumentasi acara akademik.",
    details: [
      "Dokumentasi foto Seminar Proposal mahasiswa",
      "Dokumentasi foto Wisuda",
      "Editing dan color grading hasil foto",
    ],
  },
  {
    year: "Mar 2021",
    title: "Photographer",
    company: "Freelance - Prewedding & Video",
    category: "creative",
    isHighlight: false,
    description: "Jasa fotografi dan videografi prewedding.",
    details: [
      "Mengambil foto prewedding dengan konsep outdoor & indoor",
      "Mengatur pose, lighting, dan komposisi gambar",
      "Mengambil footage video cinematic prewedding",
      "Editing foto & video hingga tahap final",
    ],
  },
];

// Urutkan berdasarkan tahun (terbaru di atas)
export default experiences.sort((a, b) => {
  const yearA = parseInt(a.year.split("-")[0]) || 0;
  const yearB = parseInt(b.year.split("-")[0]) || 0;
  return yearB - yearA;
});
