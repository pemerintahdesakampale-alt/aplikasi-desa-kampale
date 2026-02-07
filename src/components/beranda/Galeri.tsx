'use client';
import { useState } from 'react';

export default function Galeri() {
  // Tambahkan foto baru ke sini (sesuaikan jumlah)
  const photos = [
    { id: 1, src: "/images/fotodesa/foto1.jpg" },
    { id: 2, src: "/images/fotodesa/foto2.jpg" },
    { id: 3, src: "/images/fotodesa/foto3.jpg" },
    { id: 4, src: "/images/fotodesa/foto4.jpg" },
    { id: 5, src: "/images/fotodesa/foto5.jpg" },
    { id: 6, src: "/images/fotodesa/foto6.jpg" },
    { id: 7, src: "/images/fotodesa/foto7.jpg" },
    { id: 8, src: "/images/fotodesa/foto8.jpg" },
    { id: 9, src: "/images/fotodesa/foto9.jpg" },
    { id: 10, src: "/images/fotodesa/foto10.jpeg" },
    { id: 11, src: "/images/fotodesa/foto11.jpg" },
    { id: 12, src: "/images/fotodesa/foto12.jpg" },
    { id: 13, src: "/images/fotodesa/foto13.jpg" },
    { id: 14, src: "/images/fotodesa/foto14.jpg" },
    { id: 15, src: "/images/fotodesa/foto15.jpg" },
    { id: 16, src: "/images/fotodesa/foto16.jpg" },
    { id: 17, src: "/images/fotodesa/foto17.jpeg" },
    { id: 18, src: "/images/fotodesa/foto18.jpeg" },
    { id: 19, src: "/images/fotodesa/foto19.jpeg" },
    { id: 20, src: "/images/fotodesa/foto20.jpeg" },
    { id: 21, src: "/images/fotodesa/foto21.jpeg" }
  ];

  const [visibleCount, setVisibleCount] = useState(6); // Tampilkan 6 foto di awal

  return (
    <section id="galeri">
      <div className="wrap" style={{ padding: '0', textAlign: 'center' }}>
        <h2 style={{ color: '#2563eb', fontSize: '28px', fontWeight: 'bold' }}>GALERI DESA</h2>
        <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '24px' }}>
          Menampilkan kegiatan-kegiatan yang berlangsung di desa
        </p>

        {/* Grid Foto */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {photos.slice(0, visibleCount).map((photo) => (
            <img 
              key={photo.id}
              src={photo.src} 
              alt={`Foto galeri ${photo.id}`}
              style={{ 
                width: '100%', 
                height: '250px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          ))}
        </div>

        {/* Tombol Lihat Lebih Banyak */}
        {visibleCount < photos.length && (
          <button
            type="button"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              color: '#4b5563',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background 0.2s',
              cursor: 'pointer',
              background: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            onClick={() => setVisibleCount(photos.length)}
          >
            📁 LIHAT FOTO LEBIH BANYAK
          </button>
        )}
      </div>
    </section>
  );
}