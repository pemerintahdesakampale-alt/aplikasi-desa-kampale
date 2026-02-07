// app/page.tsx
import Hero from '@/components/beranda/Hero';
import Sambutan from '@/components/beranda/Sambutan';
import PetaDesa from '@/components/beranda/PetaDesa';
import Statistik from '@/components/beranda/Statistik';
import ApbDesa from '@/components/beranda/ApbDesa';
import Berita from '@/components/beranda/Berita';
import Galeri from '@/components/beranda/Galeri';
import Sotk from '@/components/beranda/Sotk';
import Footer from '@/components/beranda/Footer';


const globalStyles = `
  /* =============================== */
  /* RESET & BASE */
  /* =============================== */
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    background: #f3f4f6;
    color: #111827;
  }
  a { text-decoration: none; }

  .wrap {
    max-width: 1200px;
    margin: auto;
    padding: 0;
  }

  section {
    padding: 60px 0;
  }
    sectioni
     {
    padding: 30px 30px;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 24px;
    text-align: center;
  }

  img {
    width: 100%;
    display: block;
    border-radius: 6px;
  }

  /* === APB === */
  .apb { background: #ecfdf5; }
  .apb-value { color: #047857; font-weight: 700; margin-top: 6px; font-size: 20px; }

  /* === SOTK === */
  .sotk-cards {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 10px 0;
    scrollbar-width: thin;
  }
  .sotk-card { min-width: 280px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .sotk-card img { height: 220px; object-fit: cover; }
  .sotk-card .info { background: #2563eb; color: white; padding: 16px; text-align: center; }
  .name { font-weight: bold; font-size: 16px; margin: 0 0 4px 0; }
  .position { font-size: 14px; opacity: 0.9; }

  .btn-lihat-semua {
    display: block;
    width: fit-content;
    margin: 20px auto 0;
    padding: 10px 24px;
    border: 2px solid #2563eb;
    border-radius: 12px;
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
  }
  .btn-lihat-semua:hover { background: #2563eb; color: white; }

  /* === FOOTER === */
  footer {
    background: #065f46;
    color: #fff;
    margin-top: 60px;
  }
  footer .wrap { padding: 40px 0; }
  footer p { margin: 4px 0; font-size: 14px; }
`;

export default function Page() {
  return (
    <>
      <style>{globalStyles}</style>
      <Hero />
      <Sambutan />
      <PetaDesa />
      <Sotk />
      <Statistik />
      <ApbDesa />
      <Berita />
      <Galeri />
      <Footer />
      <header />
    </>
  );
}