export default function SDGS() {
  return (
    <section id="sdgs" style={{ 
      backgroundColor: 'white',
      color: '#1f2937',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ 
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Konten Teks */}
        <div style={{ 
          flex: '1',
          minWidth: '300px',
          paddingRight: '20px'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'left'
          }}>
            SDGs Desa
          </h2>
          
          <p style={{ 
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '24px',
            textAlign: 'left',
            color: '#4b5563'
          }}>
            SDGs desa mengacu pada upaya yang dilakukan di tingkat desa untuk mencapai Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals/SDGs). SDGs merupakan agenda global yang ditetapkan oleh Perserikatan Bangsa-Bangsa (PBB) untuk mengatasi berbagai tantangan sosial, ekonomi, dan lingkungan di seluruh dunia.
          </p>
          
          <div style={{ 
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb',
            textAlign: 'left'
          }}>
            <h3 style={{ 
              margin: '0',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#047857'
            }}>Skor SDGs Desa Kampale 42,12</h3>
          </div>
        </div>

        {/* Emblem SDGs */}
        <div style={{ 
          flex: '1',
          minWidth: '300px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img 
            src="/images/SDGS.png" 
            alt="SDGs Emblem" 
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }} 
          />
        </div>
      </div>

      {/* Grid 2 Foto di Bawah */}
      <div style={{ 
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '40px'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* Foto SDGS 1 */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              background: '#047857',
              color: 'white',
              padding: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                margin: '0',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                SDGS 1
              </h3>
            </div>
            <img 
              src="/images/SDGS1.png" 
              alt="SDGs 1" 
              style={{ 
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                display: 'block'
              }} 
            />
          </div>

          {/* Foto SDGS 2 */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              background: '#047857',
              color: 'white',
              padding: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                margin: '0',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                SDGS 2
              </h3>
            </div>
            <img 
              src="/images/SDGS2.png" 
              alt="SDGs 2" 
              style={{ 
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                display: 'block'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}