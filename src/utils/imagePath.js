export const getImagePath = (path) => {
  if (!path) return "";

  // Bersihkan path: hapus slash di awal
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Gunakan BASE_URL dari Vite
  const base = import.meta.env.BASE_URL || "/";

  // Pastikan base berakhir dengan slash
  const baseWithSlash = base.endsWith("/") ? base : `${base}/`;

  // Gabungkan
  return `${baseWithSlash}${cleanPath}`;
};
