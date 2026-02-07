export default function PrestasiInstansi() {
  return (
    <section id="prestasi-instansi" style={{ 
      backgroundColor: 'white',
      color: '#1f2937',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ 
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: '#047857',
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          Prestasi Instansi
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* Penghargaan 1 - IAI As'adiyah */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Penghargaan
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/iai.jpeg" 
                alt="Sertifikat IAI As'adiyah"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Sertifikat akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Institut Agama Islam (IAI) As'adiyah
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Memberikan Penghargaan Kepada: Rabala Den Jambale, Ketua Panitia KKN atas dukungan dan kerjasamanya menyukseskan pelaksanaan kegiatan Kuliah Kerja Nyata (KKN) Angk. XXXV
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Periode:</strong> 6 Maret s.d. 4 Mei 2023
            </div>
          </div>

          {/* Penghargaan 2 - PBB-P2 Terbaik */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Penghargaan 
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/pbb.jpeg" 
                alt="Sertifikat PBB-P2 Terbaik"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Sertifikat akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Desa/Kelurahan Terbaik PBB-P2
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Atas prestasinya dalam pencapaian target penerimaan Pajak Bumi dan Bangunan Perdesaan & Perkotaan (PBB-P2) Tahun 2023
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Instansi:</strong> Pemerintah Daerah Kab. Sidenreng Rappang<br />
              <strong>Kecamatan:</strong> Dua Pitue
            </div>
          </div>

          {/* Penghargaan 3 - LPM KKN */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Sertifikat Penghargaan
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/lpm.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Sertifikat akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Lembaga Pengabdian Masyarakat (LPM)
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas kerjasama dan kemitraan yang sangat baik selama pelaksanaan program KKN. Dukungan dan partisipasi aktif dari Desa Kampale telah menjadi kunci keberhasilan program KKN.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Kerjasama Program KKN
            </div>
          </div>

          {/* Penghargaan 4 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              piala
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto1.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * piala akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              JUARA III 
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas pencapaiannya meraih juara III dalam lomba pemanfaatan lahan pekarangan dan hatinya PKK se-Sidarp.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Lomba 
            </div>
          </div>

          {/* Penghargaan 5 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              piala
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto2.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * piala akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Juara II
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas pencapaiannya meraih juara II dalam lomba nasi Tumpeng tingkat desa atau Kelurahan dalam rangka memperingati Hut Kemerdekaan RI ke-79.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Lomba
            </div>
          </div>

          {/* Penghargaan 6 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              piala
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto3.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * piala akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Juara harapan III
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas pencapaiannya dalam mengikuti acra pesta rakyat dengan lomba festival lagu Bugis/ Dangdut dan meraih Juara Harapan III.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Lomba
            </div>
          </div>
          
          {/* Penghargaan 7 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              piala
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto4.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * piala akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Juara I
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas pencapaiannya dalam megikuti lomba Kebersihan dan Keindahan lorong tingkat Kelurahan/ Desa dalam rangka memperingati Hut Kemerdekaan RI ke 79 dan berhasil meraih juara I.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Lomba 
            </div>
          </div>
          {/* Penghargaan 8 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              piala
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto5.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * piala akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Juara II
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas pencapaiannya meraih juara II dalam Lomba Gerak Jalan BKMT/PKK se-Kecamatan Dua Pitue dalam memperingati Hut RI ke 70.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Lomba
            </div>
          </div>
          {/* Penghargaan 9 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              piala
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto6.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * piala akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Juara II
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale atas pencapaiannya meraih Juara II dalam mengikuti Lomba Gerak Jalan Tingkat PKK dalam rangka HUT RI ke-74.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kategori:</strong> Lomba
            </div>
          </div>
          {/* Penghargaan 10 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              sertifikat penghargaan
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto8.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * sertifikat akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Desa terbaik penerimaan PBB-P2
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Atas prestasinya dalam penerimaan PBB-P2 tahun 2022.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kecamatan:</strong> Dua Pitue
              <strong>Kabupaten:</strong> Sidendreng Rappang 
            </div>
          </div>
          {/* Penghargaan 11 - piala */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              sertifikat Penghargaan
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/foto7.jpeg" 
                alt="Sertifikat LPM KKN"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * sertifikat akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Desa terbaik penerimaan PBB-P2
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Atas Prestasinya dalam penerimaan PBB-P2 Tahun 2020.
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Kecamatan:</strong> Dua Pitue
              <strong>Kabupaten:</strong> Sidendreng Rappang 
            </div>
          </div>

          {/* Penghargaan 12 - Desa Siaga TB */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              backgroundColor: '#047857',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Sertifikat Penghargaan
            </div>
            
            {/* Tempat Gambar Sertifikat */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/sertifikat/tb.jpeg" 
                alt="Sertifikat Desa Siaga TB"
                style={{ 
                  maxHeight: '150px', 
                  width: '100%',
                  objectFit: 'contain',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Sertifikat akan ditampilkan di sini
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              Hari Kesehatan Nasional ke-61 Tahun 2025
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Diberikan kepada Desa Kampale, Kecamatan Dua Pitue atas Kepeloporan dalam Pencegahan dan Penanggulangan Tuberkulosis melalui DESA SIAGA TB
            </p>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <strong>Nomor:</strong> 14/HKN-61/TB/XI/2025<br />
              <strong>Pemberi:</strong> Bupati Sidenreng Rappang
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}