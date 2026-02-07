export default function Berita() {
  return (
    <section id="berita">
      <div className="wrap">
        <h2>Berita Desa</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Tamang
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ padding: '16px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h4>Judul Berita {i}</h4>
              <p>Isi ringkasan berita desa...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}