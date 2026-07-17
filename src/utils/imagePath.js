// src/utils/imagePath.js
export const getImagePath = (path) => {
  if (!path) return "";
  // Hapus slash di awal jika ada
  let cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Dapatkan BASE_URL dari Vite
  const base = import.meta.env.BASE_URL || "/";
  // Gabungkan tanpa double slash
  return `${base}${cleanPath}`.replace(/\/+/g, "/");
};
