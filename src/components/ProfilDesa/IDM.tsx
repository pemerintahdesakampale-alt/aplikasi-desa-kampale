export default function IDMDesa() {
  return (
    <section id="idm-desa" style={{ 
      backgroundColor: 'white',
      color: '#1f2937',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ 
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {/* Kolom Kiri - Data Indeks */}
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{ 
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 style={{ 
                color: '#047857',
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '16px',
                textAlign: 'left'
              }}>
                IDM
              </h2>
              <p style={{ 
                color: '#4b5563',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Indeks Desa Membangun (IDM) merupakan indeks komposit yang dibentuk dari tiga indeks, yaitu Indeks Ketahanan Sosial, Indeks Ketahanan Ekonomi, dan Indeks Ketahanan Ekologi/Lingkungan.
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                {/* Target Status */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    color: '#047857',
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Target Status
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    MANDIRI
                  </div>
                </div>
                
                {/* Skor IKS */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    color: '#047857',
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Skor IKS
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    0.886/ 34.70427%
                  </div>
                </div>
                
                {/* Skor IKE */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    color: '#047857',
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Skor IKE
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    0.8731/ 31.33568%
                  </div>
                </div>
                
                {/* Skor IKL */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    color: '#047857',
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Skor IKL
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    0.86/ 33.96005%
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kolom Kanan - Hasil IDM */}
          <div style={{ 
            flex: '0 0 350px',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* SKOR IDM 2024 */}
            <div style={{ 
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{ 
                color: '#047857',
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                SKOR IDM 2024
              </div>
              <div style={{ 
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1f2937'
              }}>
                0.8508
              </div>
            </div>
            
            {/* STATUS IDM 2024 */}
            <div style={{ 
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{ 
                color: '#047857',
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                STATUS IDM 2024
              </div>
              <div style={{ 
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1f2937'
              }}>
                MANDIRI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}