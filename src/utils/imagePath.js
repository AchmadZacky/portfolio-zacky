// src/utils/imagePath.js
export const getImagePath = (path) => {
  // Hapus slash di awal jika ada
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
