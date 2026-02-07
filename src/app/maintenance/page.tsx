// src/app/maintenance/page.tsx

'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext'; // Mengambil context dark mode
import Image from "next/image";

const MaintenancePage = () => {
  const { dark } = useAppContext(); // Mengambil nilai dark mode dari context

  // Ganti angka ini sesuai ukuran asli gambar test.png kamu!
  const imageWidth = 400;
  const imageHeight = 300;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: dark ? '#111' : '#fff',
        color: dark ? '#fff' : '#000',
        padding: '20px',
        flexDirection: 'column',
        width: '100%',
        margin: 0,
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        We&apos;re Currently Under Maintenance
      </h2>

      <div
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          Sorry for the inconvenience! Our website is undergoing scheduled
          maintenance.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          We are working hard to bring you the best experience. Please check
          back soon!
        </p>

        {/* ✅ Gambar dengan width & height wajib */}
        <Image
          src="/images/test.png"
          alt="Testimonial"
          width={imageWidth}    // ← Wajib!
          height={imageHeight}  // ← Wajib!
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </div>
  );
};

export default MaintenancePage;