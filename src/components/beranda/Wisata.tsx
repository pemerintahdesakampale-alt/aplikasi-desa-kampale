export default function Wisata() {
  return (
    <section id="wisata">
      <div className="wrap">
        <h2>WISATA Desa</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Layanan yang mempermudah promosi wisata Desa sehingga dapat menarik pengunjung Desa
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {[1, 2, 3].map(i => (
            <div key={i}>
              <img src={`https://picsum.photos/600/400?wisata=${i}`} alt={`Wisata ${i}`} />
              <p style={{ textAlign: 'center', marginTop: '8px' }}>Objek Wisata {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}