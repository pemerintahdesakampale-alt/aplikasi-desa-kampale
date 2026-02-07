'use client';

import { useState } from 'react';

export default function Berita() {
  const [showAll, setShowAll] = useState(false);

  const berita = [
    {
      title: "Dari Kampale, Semangat Ketahanan Pangan Sidrap Menggema ke Seluruh Desa",
      image: "/images/berita/ketahananpangan.jpeg",
      date: "15 Jan 2026",
      link: "https://rri.co.id/daerah/1504601/dari-kampale-semangat-ketahanan-pangan-sidrap-menggema-ke-seluruh-desa",
      summary: "Program ketahanan pangan di Desa Kampale menjadi inspirasi bagi desa-desa lain di Sidrap untuk meningkatkan kemandirian pangan."
    },
    {
      title: "Banjir Bandang di Desa Kampale, Kabupaten Sidrap: Tanggul Jebol",
      image: "/images/berita/jebol.jpeg",
      date: "05 Mei 2024",
      link: "https://share.google/MDBXUEY3FhPtsXItt",
      summary: "Bencana banjir bandang yang melanda desa kampale, Kab. Sidrap, dipicu oleh jebolnya tranggul penahan air yang tak mampu menahan debit kiriman air, mengalibatkan kerusakan infrastruktur serta kerugian material warga yang sangat besar."
    },
    {
      title: "Jalan Amblas Terputus di Desa Kampale Sidrap, BBWS Bakal Buat Tanggul Darurat",
      image: "/images/berita/jalanamblas.jpeg",
      date: "10 Jan 2026",
      link: "https://www.detik.com/sulsel/berita/d-6014249/jalan-amblas-terputus-di-desa-kampale-sidrap-bbws-bakal-buat-tanggul-darurat",
      summary: "BBWS Pompengan Jeneberang akan membangun tanggul darurat untuk mengatasi jalan amblas yang terputus di Desa Kampale."
    },
    {      
      title: "Mahasiswa KKN Unhas 115 Inovasikan Pengelolaan Sampah Berbasis Maggot di Desa Kampale",
      image: "/images/berita/maggot.jpg",
      date: "25 Jun 2025",
      link: "https://topnews1.online/mahasiswa-kkn-unhas-115-inovasikan-pengelolaan-sampah-berbasis-maggot-di-desa-kampale/",
      summary: "Maggot jadi solusi cerdas kelola sampah organik sekaligus hasilkan pakan ternak di Desa Kampale."
    },
    {
      title: "Mahasiswa KKN Unhas Posko 115 Hadirkan Inovasi Paving Blok dari Sampah Plastik di Desa Kampale",
      image: "/images/berita/pavingblok.jpg",
      date: "22 Jun 2025",
      link: "https://topnews1.online/mahasiswa-kkn-unhas-posko-115-hadirkan-inovasi-paving-blok-dari-sampah-plastik-di-desa-kampale/",
      summary: "Mahasiswa KKN Unhas Posko 115 berhasil menciptakan inovasi paving blok dari sampah plastik sebagai solusi pengelolaan sampah di Desa Kampale."
    },
    {
      title: "Sulap Daun Kelor Jadi Mochi Kekinian, Mahasiswa KKN Desa Kampale Bidik Peluang UMKM Baru",
      image: "/images/berita/mochikelor.jpg",
      date: "20 Jun 2025",
      link: "https://siaran-berita.com/sulap-daun-kelor-jadi-mochi-kekinian-mahasiswa-kkn-desa-kampale-bidik-peluang-umkm-baru/",
      summary: "Mahasiswa KKN Desa Kampale mengolah daun kelor menjadi mochi kekinian sebagai upaya membuka peluang usaha baru bagi masyarakat setempat."
    },
    {
      title: "Inovasi Energi Terbarukan, Mahasiswa KKN Desa Kampale Ubah Sekam Padi Jadi Briket Ramah Lingkungan",
      image: "/images/berita/briket.jpg",
      date: "18 Jun 2025",
      link: "https://siaran-berita.com/inovasi-energi-terbarukan-mahasiswa-kkn-desa-kampale-ubah-sekam-padi-jadi-briket-ramah-lingkungan/",
      summary: "Program KKN di Desa Kampale menghasilkan inovasi briket dari sekam padi sebagai alternatif energi terbarukan yang ramah lingkungan."
    }
  ];

  // Tampilkan 4 berita jika showAll = false, semua berita jika showAll = true
  const beritaTampil = showAll ? berita : berita.slice(0, 4);

  return (
    <section id="berita">
      <div className="wrap" style={{ padding: '0 20px' }}>
        <h2 style={{
          color: '#2563eb',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 0 8px 0',
        }}>Berita Desa</h2>
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          textAlign: 'center',
          marginBottom: '30px',
        }}>
          Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Kampale
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '30px'
        }}>
          {beritaTampil.map((item, index) => (
            <div key={index} style={{
              padding: '16px',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
              <div style={{ position: 'relative', marginBottom: '12px' }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  background: '#10b981',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {item.date}
                </div>
              </div>
              
              <h4 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '8px',
                lineHeight: '1.4'
              }}>{item.title}</h4>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '16px',
                lineHeight: '1.5'
              }}>{item.summary}</p>
              
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  color: '#10b981',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                Baca Selengkapnya →
              </a>
            </div>
          ))}
        </div>

        {showAll ? (
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setShowAll(false);
            }}
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
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            ← KEMBALI
          </a>
        ) : (
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setShowAll(true);
            }}
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
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            📰 LIHAT SEMUA BERITA
          </a>
        )}
      </div>
    </section>
  );
}