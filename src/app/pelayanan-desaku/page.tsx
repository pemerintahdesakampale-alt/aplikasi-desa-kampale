'use client';

import { useState } from 'react';

export default function PelayananDesa() {
  const [nama, setNama] = useState('');
  const [nomor, setNomor] = useState('');
  const [kategori, setKategori] = useState('');
  const [pengaduan, setPengaduan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format pesan untuk WhatsApp
    let message = `*PENGADUAN DESA*\n\n`;
    message += `Nama: ${nama}\n`;
    message += `Nomor WA: ${nomor}\n`;
    message += `Kategori: ${kategori}\n`;
    message += `Pengaduan: ${pengaduan}\n`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Link WhatsApp — GANTI NOMOR DENGAN NOMOR KAMU!
    const waLink = `https://wa.me/6285256228055?text=${encodedMessage}`;

    // Buka WhatsApp
    window.open(waLink, '_blank');
  };

  return (
    <div style={{
      padding: '40px 20px',
      background: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '16px',
        textAlign: 'center',
        color: '#1e293b',
      }}>Pelayanan Desa</h1>

      <p style={{
        fontSize: '1.1rem',
        marginBottom: '32px',
        textAlign: 'center',
        color: '#64748b',
      }}>
        Silakan isi form pengaduan di bawah ini. Kami akan segera merespons!
      </p>

      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '24px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}>
        {/* Nama */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
          }}>
            Nama *
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama Anda"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
          />
        </div>

        {/* Nomor Telepon/WhatsApp */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
          }}>
            Nomor Telepon/WA *
          </label>
          <input
            type="tel"
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
            placeholder="Masukkan nomor HP/WhatsApp"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
          />
        </div>

        {/* Kategori Pelayanan */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
          }}>
            Kategori Pengaduan *
          </label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
            }}
          >
            <option value="">Pilih kategori pelayanan</option>
            <option value="Pengaduan">Pengaduan</option>
            <option value="Pendidikan">Pendidikan</option>
            <option value="Kesehatan">Kesehatan</option>
            <option value="Lingkungan">Lingkungan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        {/* Keterangan */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
          }}>
            Keterangan *
          </label>
          <textarea
            value={pengaduan}
            onChange={(e) => setPengaduan(e.target.value)}
            placeholder="Masukkan kesan, informasi, atau detail laporan Anda"
            required
            rows={5}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          />
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          <span style={{ marginRight: '8px' }}>✈️</span>
          Kirim
        </button>
      </form>

      {/* Footer */}
      <div style={{
        marginTop: '40px',
        fontSize: '0.9rem',
        color: '#94a3b8',
        textAlign: 'center',
      }}>
        © 2026 - Aplikasi Desa Kampale.
      </div>
    </div>
  );
}