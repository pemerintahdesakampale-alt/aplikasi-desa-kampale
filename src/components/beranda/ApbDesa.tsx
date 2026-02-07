export default function APBDesa2025() {
  return (
    <section style={{ 
      backgroundColor: '#e6faf5',
      padding: '40px 0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
          <img 
            src="/images/APBDESA.jpg" 
            alt="APB Desa 2025" 
            style={{ 
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h1 style={{ 
              color: '#0d47a1', 
              fontSize: '32px', 
              fontWeight: 'bold', 
              textAlign: 'center',
              margin: '0 0 10px 0'
            }}>
              APB DESA 2025
            </h1>
            <p style={{ 
              color: '#374151', 
              fontSize: '16px', 
              textAlign: 'center',
              margin: '0'
            }}>
              Akses cepat dan transparan terhadap APB Desa serta proyek pembangunan
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '15px',
              alignItems: 'center'
            }}>
              <span style={{ 
                color: '#4b5563', 
                fontSize: '16px',
                fontWeight: '500'
              }}>Pendapatan Desa</span>
              <span style={{ 
                color: '#000', 
                fontSize: '24px',
                fontWeight: 'bold'
              }}>Rp1.633.576.496,00</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ 
                color: '#4b5563', 
                fontSize: '16px',
                fontWeight: '500'
              }}>Belanja Desa</span>
              <span style={{ 
                color: '#000', 
                fontSize: '24px',
                fontWeight: 'bold'
              }}>Rp1.633.717.570,00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}