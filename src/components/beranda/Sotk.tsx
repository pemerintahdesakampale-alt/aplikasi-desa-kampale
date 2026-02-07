'use client';

import { useState } from 'react';

export default function Sotk() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pejabat = [
    {
      id: 1,
      name: "ASHAR SOSE,SE",
      position: "Kepala Desa",
      photo: "/images/sotk/asharsose.jpg"
    },
    {
      id: 2,
      name: "SUDIRMAN. B",
      position: "SEKRETARIS DESA",
      photo: "/images/sotk/sudirmanb.jpeg"
    },
    {
      id: 3,
      name: "IDAYANTI",
      position: "KAUR TATA USAHA DAN UMUM",
      photo: "/images/sotk/idayanti.jpg"
    },
    {
      id: 4,
      name: "DARWIS, S.Kep",
      position: "KAUR KEUANGAN",
      photo: "/images/sotk/darwis.jpg"
    },
    {
      id: 5,
      name: "ANDY YAMZEM, S.H",
      position: "STAFF KAUR KEUANGAN",
      photo: "/images/sotk/andyyamzem.jpeg"
    },
    {
      id: 6,
      name: "ASRUDI, S",
      position: "KAUR PERENCANAAN",
      photo: "/images/sotk/asrudis.jpeg"
    },
    {
      id: 7,
      name: "NANDA ARIS, S.Ak",
      position: "STAFF KAUR PERENCANAAN",
      photo: "/images/sotk/nandaaris.jpeg"
    },
    {
      id: 8,
      name: "MISDAR",
      position: "KAUR PELAYANAN",
      photo: "/images/sotk/misdar.jpeg"
    },
    {
      id: 9,
      name: "SITTI HARDIANTI",
      position: "KAUR KESEJAHTERAAN",
      photo: "/images/sotk/sittihardianti.jpg"
    },
    {
      id: 10,
      name: "HERNENI, A.Md",
      position: "KAUR PEMERINTAHAN",
      photo: "/images/sotk/herneni.jpg"
    },
    {
      id: 11,
      name: "H. MURDIONO",
      position: "KEPALA DUSUN I",
      photo: "/images/sotk/murdiono.jpg"
    },
    {
      id: 12,
      name: "H. WAJI",
      position: "KEPALA DUSUN II",
      photo: "/images/sotk/waji.jpg"
    }
  ];

  return (
    <section id="sotk">
      <div className="wrap" style={{
        padding: '0',
        textAlign: 'center',
      }}>
        {/* Header */}
        <h2 style={{
          color: '#2563eb',
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0 0 8px 0',
        }}>SOTK</h2>
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          margin: '0 0 24px 0',
        }}>
          Struktur Organisasi dan Tata Kerja Desa Kampale
        </p>

        {/* Horizontal Scroll Container */}
        <div style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          padding: '0 10px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#d1d5db #f9fafb',
          marginBottom: '24px',
          msOverflowStyle: 'none',
        }}>
          {pejabat.map((p) => (
            <div key={p.id} style={{
              minWidth: '240px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              backgroundColor: '#fff',
              transition: 'transform 0.2s',
              cursor: 'pointer',
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
              <div style={{
                width: '100%',
                height: '300px',
                overflow: 'hidden',
              }}>
                <img 
                  src={p.photo} 
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{
                background: '#2563eb',
                color: 'white',
                padding: '16px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}>{p.name}</div>
                <div style={{
                  fontSize: '14px',
                  opacity: 0.9,
                }}>{p.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'none',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            color: '#4b5563',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background 0.2s',
            cursor: 'pointer',
            border: '1px solid #d1d5db',
          }} 
          onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} 
          onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
        >
          📄 LIHAT STRUKTUR LEBIH LENGKAP
        </button>

        {/* Modal Struktur */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
          }}>
            <div style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
            }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  zIndex: 10,
                }}
              >
                ×
              </button>
              
              <img 
                src="/images/STR.jpeg" 
                alt="Struktur Organisasi Desa Kampale"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }} 
              />
              
              <div style={{
                marginTop: '16px',
                color: 'white',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 'bold',
              }}>
                Struktur Organisasi dan Tata Kerja Desa Kampale
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}