'use client';

import { useState, useEffect } from 'react';

export default function KalenderWidget() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Atur tanggal tujuan (14 Mei 2026, 00:00:00)
  const targetDate = new Date('2026-05-14T00:00:00').getTime();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Mencegah error di Next.js
  if (!mounted) return null;

  return (
    <div style={{
      position: 'absolute', // Membuatnya melayang di atas gambar
      top: '20px',
      right: '20px',
      zIndex: 50, // Memastikan tidak tertutup elemen lain
      background: 'linear-gradient(135deg, #66eaac 0%, #52a24b 100%)', // Warna ungu gradasi
      color: 'white',
      padding: '16px 24px',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      minWidth: '300px'
    }}>
      <div style={{ fontSize: '14px', marginBottom: '4px' }}>Hari Libur Nasional</div>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Kenaikan Yesus Kristus</div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '12px' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '16px' }}>Kamis</div>
          <div style={{ fontSize: '14px' }}>14 Mei 2026</div>
        </div>
        
        <div style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 16px' }}>
          {timeLeft.days}
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '14px' }}>Hari Lagi</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
}