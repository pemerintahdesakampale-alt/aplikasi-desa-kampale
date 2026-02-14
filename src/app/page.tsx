import Hero from '@/components/beranda/Hero';
import Sambutan from '@/components/beranda/Sambutan';
import PetaDesa from '@/components/beranda/PetaDesa';
import Statistik from '@/components/beranda/Statistik';
import ApbDesa from '@/components/beranda/ApbDesa';
import Berita from '@/components/beranda/Berita';
import Galeri from '@/components/beranda/Galeri';
import Sotk from '@/components/beranda/Sotk';
import Footer from '@/components/beranda/Footer';
import type { Metadata } from 'next';

// Hapus variabel globalStyles dari sini.
// Pindahkan isi CSS-nya ke file 'src/app/globals.css' agar lebih ringan.

export default function Page() {
  return (
    <>
      {/* Header biasanya sudah ada di ClientLayout. Jika belum, taruh di paling atas */}
      {/* <Header /> */} 
      
      <Hero />
      <Sambutan />
      <PetaDesa />
      <Sotk />
      <Statistik />
      <ApbDesa />
      <Berita />
      <Galeri />
      <Footer />
    </>
  );
}

// Metadata di sini cukup yang SPESIFIK untuk halaman Home saja.
// Sisanya akan otomatis ambil dari layout.tsx
export const metadata: Metadata = {
  title: 'Beranda', // Hasilnya jadi: "Beranda | Desa Kampele" (karena template di layout)
  // Description boleh ditimpa jika ingin beda, kalau sama hapus saja biar ikut layout.
};