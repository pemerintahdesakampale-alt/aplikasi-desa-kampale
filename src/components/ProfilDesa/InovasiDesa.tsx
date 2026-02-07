export default function InovasiDesa() {
  return (
    <section id="inovasi-desa" style={{ 
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
          Inovasi Desa
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* Inovasi 1 - Kolam Ikan dengan Kincir Air */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/inovasi/ikankincir.jpeg" 
                alt="Kolam Ikan dengan Kincir Air"
                style={{ 
                  maxHeight: '250px', 
                  width: '100%',
                  objectFit: 'cover',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Kolam ikan dengan kincir air
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Kolam Ikan dengan Kincir Air
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              Penerapan sistem kincir air dalam budidaya ikan untuk meningkatkan sirkulasi air dan kualitas air dalam kolam. Sistem ini membantu memastikan ketersediaan oksigen yang optimal bagi ikan.
            </p>
          </div>

          {/* Inovasi 2 - Kandang Itik Telur */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/inovasi/kandangitik.jpeg" 
                alt="Kandang Itik Telur"
                style={{ 
                  maxHeight: '250px', 
                  width: '100%',
                  objectFit: 'cover',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Kandang itik telur modern
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Kandang Itik Telur Modern
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              Pengembangan kandang itik telur dengan sistem modern untuk meningkatkan produksi telur dan kesejahteraan hewan. Sistem ini memastikan kualitas telur yang optimal dan kenyamanan hewan.
            </p>
          </div>

          {/* Inovasi 3 - Kolam Ikan dengan Pompa Angin */}
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px dashed #cbd5e1'
            }}>
              <img 
                src="/images/inovasi/ikanpompa.jpeg" 
                alt="Kolam Ikan dengan Pompa Angin"
                style={{ 
                  maxHeight: '250px', 
                  width: '100%',
                  objectFit: 'cover',
                  background: '#f8fafc'
                }} 
              />
              <div style={{ 
                marginTop: '8px',
                fontSize: '13px',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                * Kolam ikan dengan pompa angin
              </div>
            </div>
            
            <h3 style={{ 
              color: '#1f2937',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Kolam Ikan dengan Pompa Angin
            </h3>
            <p style={{ 
              color: '#4b5563',
              fontSize: '14px',
              lineHeight: '1.6',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              Penerapan pompa angin dalam kolam ikan untuk memastikan ketersediaan oksigen yang cukup bagi ikan. Sistem ini meningkatkan produktivitas dan kesehatan ikan dalam budidaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}