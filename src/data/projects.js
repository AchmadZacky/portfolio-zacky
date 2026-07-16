const projects = [
  {
    id: 1,
    title: "Sistem Pemesanan Tiket Transjakarta",
    category: "web",
    year: 2026,
    status: "on progress",
    image: "images/transjakarta-thumb.jpg",
    images: [
      "images/transjakarta-1.png",
      "images/transjakarta-2.png",
      "images/transjakarta-3.png",
      "images/transjakarta-4.png",
      "images/transjakarta-5.png",
      "images/transjakarta-6.png",
      "images/transjakarta-7.png",
    ],
    description:
      "Sistem pemesanan tiket Transjakarta berbasis web dengan integrasi pembayaran Midtrans.",
    fullDescription:
      "Proyek ini mengembangkan sistem pemesanan tiket Transjakarta secara online menggunakan JavaScript, Tailwind, PHP, MySQL, dan Midtrans sebagai payment gateway. Fitur utama: pencarian rute, pemesanan tiket, pembayaran online, dan cetak e-ticket. Proyek ini sedang dalam tahap pengembangan dan akan segera diluncurkan.",
    tech: ["JavaScript", "Tailwind", "PHP", "MySQL", "Midtrans"],
    link: "",
    github: "#",
  },
  {
    id: 2,
    title: "Sistem PPDB Online",
    category: "web",
    year: 2026,
    status: "completed",
    image: "images/ppdb-tumb.png",
    images: ["images/ppdb-1.png", "images/ppdb-2.png"],
    description:
      "Sistem Penerimaan Peserta Didik Baru berbasis web untuk sekolah.",
    fullDescription:
      "Aplikasi PPDB online dengan fitur pendaftaran siswa, upload dokumen, verifikasi berkas, dan pengumuman hasil seleksi. Dibangun dengan JavaScript, Tailwind, PHP, dan MySQL. Memudahkan sekolah dalam proses penerimaan siswa baru secara digital.",
    tech: ["JavaScript", "Tailwind", "PHP", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Sistem Pemesanan Cafe Berbasis QR",
    category: "web",
    year: 2025,
    status: "completed",
    image: "images/cafe-qr-thumb.jpg",
    images: [
      "images/cafe-qr-1.png",
      "images/cafe-qr-2.png",
      "images/cafe-qr-3.png",
    ],
    description:
      "Sistem pemesanan cafe menggunakan QR Code untuk scan menu digital.",
    fullDescription:
      "Aplikasi pemesanan cafe digital dengan QR Code. Pelanggan cukup scan QR Code di meja untuk melihat menu, memesan makanan/minuman, dan melakukan pembayaran. Dibangun dengan JavaScript, PHP, dan MySQL. Meningkatkan efisiensi pelayanan cafe.",
    tech: ["JavaScript", "PHP", "MySQL", "QR Code"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Perancangan UI/UX Aplikasi Mobile",
    category: "design",
    year: 2025,
    status: "completed",
    image: "images/figma-thumb.jpg",
    images: [
      "images/figma-1.png",
      "images/figma-2.png",
      "images/figma-3.png",
      "images/figma-4.png",
      "images/figma-5.png",
      "images/figma-6.png",
      "images/figma-7.png",
      "images/figma-8.png",
    ],
    description:
      "Perancangan UI/UX aplikasi mobile menggunakan Figma dengan pendekatan user-centered design.",
    fullDescription:
      "Desain UI/UX untuk aplikasi mobile yang fokus pada pengalaman pengguna. Meliputi wireframe, prototype interaktif, design system, dan user flow. Dibuat dengan Figma dan diuji menggunakan metode usability testing.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "IoT Kontrol Lampu",
    category: "iot",
    year: 2025,
    status: "completed",
    image: "images/wokwi-1.png",
    images: ["images/wokwi-1.png"],
    description:
      "Sistem kontrol lampu berbasis IoT menggunakan Wokwi simulator dan platform Blynk.",
    fullDescription:
      "Proyek IoT untuk mengontrol lampu secara jarak jauh menggunakan ESP32, Wokwi simulator, dan platform Blynk. Pengguna dapat menyalakan/mematikan lampu melalui smartphone dan memantau status lampu secara real-time.",
    tech: ["Wokwi", "Blynk", "ESP32", "IoT"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Aplikasi Android Sederhana",
    category: "mobile",
    year: 2025,
    status: "completed",
    image: "images/eclipse-1.png",
    images: [
      "images/eclipse-1.png",
      "images/eclipse-2.png",
      "images/eclipse-3.png",
    ],
    description: "Aplikasi Android sederhana menggunakan Eclipse IDE dan Java.",
    fullDescription:
      "Pengembangan aplikasi Android basic menggunakan Eclipse IDE dan Java. Mencakup implementasi Activity, Intent, Layout, dan komponen dasar Android lainnya. Cocok untuk pemula yang ingin belajar pengembangan Android.",
    tech: ["Java", "Android", "Eclipse"],
    link: "#",
    github: "#",
  },
  {
    id: 7,
    title: "Konfigurasi Jaringan Dasar",
    category: "network",
    year: 2023,
    status: "completed",
    image: "images/mikrotik-1.jpg",
    images: [
      "images/mikrotik-1.jpg",
      "images/mikrotik-2.png",
      "images/mikrotik-3.jpg",
      "images/mikrotik-4.jpg",
      "images/mikrotik-5.jpg",
    ],
    description: "Konfigurasi jaringan dasar menggunakan MikroTik RouterOS.",
    fullDescription:
      "Praktik konfigurasi jaringan menggunakan RouterOS MikroTik. Meliputi pengaturan IP address, routing, firewall, bandwidth management, dan DHCP server. Memberikan pemahaman dasar tentang administrasi jaringan.",
    tech: ["MikroTik", "RouterOS", "Winbox"],
    link: "#",
    github: "#",
  },
  {
    id: 8,
    title: "Merancang Jaringan Internet di Gedung Kantor",
    category: "network",
    year: 2023,
    status: "completed",
    image: "images/cisco-1.png",
    images: [
      "images/cisco-1.png",
      "images/cisco-2.png",
      "images/cisco-3.png",
      "images/cisco-4.png",
      "images/cisco-5.png",
    ],
    description:
      "Perancangan jaringan internet untuk gedung sekolah dengan Cisco Packet Tracer.",
    fullDescription:
      "Merancang topologi jaringan untuk gedung sekolah menggunakan Cisco Packet Tracer. Meliputi konfigurasi switch, router, VLAN, DHCP, dan static routing. Memastikan konektivitas internet yang stabil untuk seluruh ruangan di gedung sekolah.",
    tech: ["Cisco Packet Tracer", "VLAN", "Routing", "DHCP"],
    link: "#",
    github: "#",
  },
];

// Urutkan dari yang terbaru ke yang lama
export default projects.sort((a, b) => b.year - a.year);

// Data kategori untuk filter
export const categories = ["all", ...new Set(projects.map((p) => p.category))];
