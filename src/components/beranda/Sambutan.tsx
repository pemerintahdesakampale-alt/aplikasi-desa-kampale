export default function Sambutan() {
  return (
    <section id="sambutan">
      <div className="wrap" style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '32px',
        padding: '40px',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        maxWidth: '1000px',
        margin: 'auto',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      }}>
        {/* Foto Profil */}
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '4px solid #fff',
        }}>
          <img 
            src="/images/pakdesa/pakdesa.jpeg"
            alt="Kepala Desa Kampale"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Konten Sambutan */}
        <div style={{ flex: 1, textAlign: 'left' }}>
          <h2 style={{ color: '#2563eb', fontSize: '20px', margin: '0 0 8px 0' }}>
            Sambutan Kepala Desa Kampale
          </h2>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
            ASHAR SOSE, SE
          </h3>
          <p style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0', color: '#4b5563' }}>
            KEPALA DESA
          </p>
          
          <p style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: '#111827',
            margin: '0 0 20px 0',
            textAlign: 'justify',
          }}>
            SELAMAT DATANG DI WEBSITE RESMI DESA KAMPALE, WEBSITE INI DI BANGUN UNTUK MEMPERMUDAH SISTEM DAN TATAKELOLA KERJA PEMERINTAH DESA KAMPALE SERTA MEMPERMUDAH PENYAMPAIAN INFORMASI DI SETIAP AGENDA DAN KEGIATAN PEMERINTAH DESA KAMPALE KEPADA MASYARAKAT AGAR TERBANGUN KETERBUKAAN INFORMASI.
          </p>

        
        </div>
      </div>
    </section>
  );
}