'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  // Daftar foto hero (sesuaikan nama file Anda)
  const images = [
    "/images/hero/desakampale1.jpg",
    "/images/hero/desakampale2.jpg",
    "/images/hero/desakampale3.jpg",
    "/images/hero/desakampale4.jpg",
    "/images/hero/desakampale5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow setiap 7 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section className="hero" style={{
      position: 'relative',
      width: '100%',
      height: '70vh',
      overflow: 'hidden',
      padding: 0
    }}>
      {/* Slideshow Container */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        transition: 'transform 1s ease-in-out'
      }}>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Hero Desa ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              flexShrink: 0,
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 1s ease-in-out'
            }}
          />
        ))}
      </div>

      {/* Overlay Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)'
      }} />

      {/* Text Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '16px',
          textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
          animation: 'fadeInDown 1s ease'
        }}>
          SELAMAT DATANG 
          WEBSITE RESMI DESA KAMPALE
        </h1>
        <p style={{
          fontSize: '18px',
          maxWidth: '700px',
          lineHeight: '1.6',
          textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
          animation: 'fadeInUp 1s ease'
        }}>
          Melalui website ini Anda dapat menjelajahi hal-hal yang terkait dengan Desa.
        </p>
      </div>

      {/* Indicators (Bullets) */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        gap: '10px'
      }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
