export default function BeliDariDesa() {
  const products = ["Keripik Pisang", "Madu Hutan", "Anyaman Bambu", "Kopi Lokal"];
  
  return (
    <section id="beli">
      <div className="wrap">
        <h2>BELI DARI Desa</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Layanan yang disediakan promosi produk UMKM Desa sehingga mampu meningkatkan perekonomian masyarakat Desa
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {products.map((produk, i) => (
            <div key={i} style={{ padding: '16px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <img src={`https://picsum.photos/300/200?product=${i}`} alt={produk} style={{ marginBottom: '12px', borderRadius: '8px' }} />
              <strong>{produk}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}